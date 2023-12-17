"use client";
import React, { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import Material from './Material';
import Printing from './Printing';
import Notes from './Notes';

const FormComponent = ({ activeTab }) => {
  const [formData, setFormData] = useState({
    jobName: '',
    customerName: '',
    materials: [],
    printType: '',
    printCustomerName: false,
    customText: '',
    notes: ''
  });
  const [customers, setCustomers] = useState([]);
  const [materialList, setMaterialList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/data')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch form data');
        return response.json();
      })
      .then(data => {
        setFormData(data.formData[0]); // Set initial form data
        setCustomers([...new Set(data.formData.map(entry => entry.customerName))]);
        setMaterialList(data.formData.map(entry => ({ id: entry.materialId, name: entry.materialName })));
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleChange = (name, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-4">
      {activeTab === 'jobInfo' && (
        <JobInfo
          jobName={formData.jobName}
          customerName={formData.customerName}
          setJobName={(value) => handleChange('jobName', value)}
          setCustomerName={(value) => handleChange('customerName', value)}
          customers={customers}
        />
      )}
      {activeTab === 'material' && (
        <Material
          materials={materialList}
          // Include functions to handle material selection
        />
      )}
      {activeTab === 'printing' && (
        <Printing
          printType={formData.printType}
          setPrintType={(value) => handleChange('printType', value)}
          printCustomerName={formData.printCustomerName}
          setPrintCustomerName={(value) => handleChange('printCustomerName', value)}
          customText={formData.customText}
          setCustomText={(value) => handleChange('customText', value)}
          // Other relevant props and functions
        />
      )}
      {activeTab === 'notes' && (
        <Notes
          notes={formData.notes}
          setNotes={(value) => handleChange('notes', value)}
        />
      )}
    </div>
  );
};

export default FormComponent;