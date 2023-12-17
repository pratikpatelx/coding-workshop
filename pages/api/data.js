import { fetchCollectionData } from "../../libs/mongodbOperations";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const formData = await fetchCollectionData('formData');
      res.status(200).json({ formData });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}