import { fetchCollectionData } from "../../libs/mongodbOperations";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const prints = await fetchCollectionData('printTypes');
      res.status(200).json({ prints });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}