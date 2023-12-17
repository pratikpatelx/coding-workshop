import clientPromise from '../../libs/mongodb'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db("dbProject"); // Replace with your database name

      const formData = req.body; // Data sent in the request
      delete formData._id;
      await db.collection("formData").insertOne(formData);

      res.status(200).json({ message: 'Form submitted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error submitting form' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}