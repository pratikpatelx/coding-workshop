import React, { useState, useEffect } from "react";
import JobInfo from "./JobInfo";
import Material from "./Material";
import Printing from "./Printing";
import Notes from "./Notes";
import ConfirmationDialog from "./ConfirmationDialog";

const FormComponent = ({ activeTab }) => {
  const [formData, setFormData] = useState({
    jobName: "",
    customerName: "",
    materials: [],
    printType: "",
    printCustomerName: false,
    customText: "",
    notes: "",
  });
  const [customers, setCustomers] = useState([]);
  const [materialList, setMaterialList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [enableCustomText, setEnableCustomText] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/data")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch form data");
        return response.json();
      })
      .then((data) => {
        setFormData(data.formData[0]);
        // Create a unique list of materials based on ID
        const uniqueMaterials = Array.from(
          new Set(data.formData.map((entry) => entry.materialId))
        )
          .map((id) => {
            return data.formData.find((entry) => entry.materialId === id);
          })
          .map((material) => ({
            id: material.materialId,
            name: material.materialName,
          }));
        setCustomers([
          ...new Set(data.formData.map((entry) => entry.customerName)),
        ]);
        setMaterialList(uniqueMaterials);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleJobInfoChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleMaterialChange = (selectedMaterials) => {
    setFormData((prevData) => ({
      ...prevData,
      materials: selectedMaterials,
    }));
  };

  const handlePrintingChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNotesChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      notes: value,
    }));
  };

  const handleOpenConfirmation = () => {
    setConfirmationDialogOpen(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          jobName: "",
          customerName: "",
          materials: [],
          printType: "",
          printCustomerName: false,
          customText: "",
          notes: "",
        });
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
        setConfirmationDialogOpen(false);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    setConfirmationDialogOpen(false);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mt-4">
      {activeTab === "jobInfo" && (
        <JobInfo
          jobName={formData.jobName}
          customerName={formData.customerName}
          setJobName={(value) => handleJobInfoChange("jobName", value)}
          setCustomerName={(value) =>
            handleJobInfoChange("customerName", value)
          }
          customers={customers}
        />
      )}
      {activeTab === "material" && (
        <Material
          // Pass the handler for material selection
          materials={materialList}
          // Pass the handler for material selection
          onMaterialChange={handleMaterialChange}
        />
      )}
      {activeTab === "printing" && (
        <Printing
          printType={formData.printType}
          setPrintType={(value) => handlePrintingChange("printType", value)}
          printCustomerName={formData.printCustomerName}
          setPrintCustomerName={(value) =>
            handlePrintingChange("printCustomerName", value)
          }
          customText={formData.customText}
          setCustomText={(value) => handlePrintingChange("customText", value)}
          enableCustomText={enableCustomText}
          setEnableCustomText={setEnableCustomText}
        />
      )}
      {activeTab === "notes" && (
        <Notes
          notes={formData.notes}
          setNotes={handleNotesChange}
          handleSubmit={handleOpenConfirmation}
        />
      )}
      <ConfirmationDialog
        isOpen={isConfirmationDialogOpen}
        onCancel={() => setConfirmationDialogOpen(false)}
        onConfirm={handleSubmit}
      />
      {showSuccessMessage && (
        <div className="bg-green-200 text-green-800 p-2 my-2 rounded">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
};

export default FormComponent;