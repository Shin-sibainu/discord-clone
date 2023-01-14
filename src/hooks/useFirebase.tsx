import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { QueryDocumentSnapshot } from "firebase/firestore/lite";
import {
  onSnapshot,
  collection,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: QueryDocumentSnapshot<DocumentData>;
}

const useFirebase = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);

  useEffect(() => {
    let collectionRef: CollectionReference<DocumentData> = collection(db, data);
    onSnapshot(collectionRef, (snapshot) => {
      let results: Channels[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, channel: doc.data() as any });
      });
      setDocuments(results);
    });
  }, [data]);

  return { documents };
};

export default useFirebase;
