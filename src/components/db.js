
// db.js
import { openDB } from 'idb';

const DB_NAME = 'formDB';
const STORE_NAME = 'formStore';

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};

export const addFormData = async (data) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  await store.add(data);
  await tx.done;
};

export const getFormData = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const allData = await store.getAll();
  return allData[allData.length - 1]; 
};

// Cloudinary Upload Utility
export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_upload_preset');

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, {
    method: 'POST',
    body: formData,
  });

  // const response = await fetch('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', {
  //   method: 'POST',
  //   body: formData,
  // });

  const data = await response.json();
  return data.secure_url;
};

