import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";
import { db, storage } from "../configFireBase";

const DeleteFile = ({ id, imageURL }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "Files", id));
      toast("File deleted successfully", { type: "success" });
      const storageRef = ref(storage, imageURL);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Error deleting file", { type: "error" });
      <div>(error)</div>;
    }
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default DeleteFile;
