import clientPromise from './mongodb';

export const fetchCollectionData = async (collectionName) => {
  const client = await clientPromise;
  const db = client.db('dbProject');
  const data = await db.collection(collectionName).find({}).toArray();
  console.log(data);
  return data;
};