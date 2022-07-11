import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  console.error('putDb not implemented');

  // Create connection to the database and version to be used.
  const jateDB = await openDB('jate', 1);
  // Create new transaction and specify the database and data privileges.
  const tx = jateDB.transaction('jate', 'readwrite');
  // Open the desired object store.
  const store = tx.objectStore('jate');
  // Use .put() method on the store and pass in the content.
  const request = store.put({ jate: content });
  // Get confirmation of the request.
  const result = await request;
  console.log('data saved to the database', result);
};


export const getDb = async () => {
  console.error('getDb not implemented');

  // Create connection to the database and version to be used.
  const jateDB = await openDB('jate', 1);
  // Create new transaction and specify the database and data privileges.
  const tx = jateDB.transaction('jate', 'readonly');
  // Open the desired object store.
  const store = tx.objectStore('jate');
  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();
  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
