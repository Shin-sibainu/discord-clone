import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { QueryDocumentSnapshot } from "firebase/firestore/lite";
import {
  onSnapshot,
  collection,
  DocumentData,
  CollectionReference,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { useAppSelector } from "../app/hooks";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const channelId = useAppSelector((state) => state.app.channelId);
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    let collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Messages[] = [];
      snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
    });
  }, [channelId]);
  return { subDocuments };
};

export default useSubCollection;
