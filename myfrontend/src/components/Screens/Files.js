import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../configFireBase";
import DeleteFile from "./DeleteFile";

const Files = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    const fileRef = collection(db, "Files");
    const q = query(fileRef, orderBy("date", "desc"));
    onSnapshot(q, (snapshot) => {
      const files = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFiles(files);
    });
  }, []);
  return (
    <div>
      {files.length === 0 ? (
        <p>No files found!</p>
      ) : (
        files.map(({ id, title, description, imageURL, date }) => (
          <div className="  border mt-3 p-3 bg-light" key={id}>
            <div className="row">
              <div className="col-4">
                <img
                  src={imageURL}
                  alt="title"
                  style={{ height: 200, width: 200 }}
                />
              </div>
              <div className="col-9 ps-3">
                <h4> {title} </h4>
                <p> {date.toDate().toDateString()} </p>
                <h5> {description} </h5>
                <DeleteFile id={id} imageURL={imageURL} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Files;
