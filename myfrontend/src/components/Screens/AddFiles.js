import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import { db, storage } from "../configFireBase";
import { toast } from "react-toastify";
const AddFiles = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    date: Timestamp.now().toDate(),
  });
  const [progress, setProgress] = useState(0)
  const handleChange=(e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
  }
  const handleImageChange=(e)=>{
      setFormData({...formData, image:e.target.files[0]})
}
const handlePublish=()=>{
    if(!formData.title || !formData.description || !formData.image){
        alert('Please fill all the fields');
        return;
    }
    const storageRef=ref(storage,`/images/${Date.now()}${formData.image.name}`);
    const uploadImage= uploadBytesResumable(storageRef, formData.image)
    uploadImage.on('state_changed',
    (snapshot)=>{
            const progressPercent=Math.round(snapshot.bytesTransferred / snapshot.totalBytes)*100;
            setProgress(progressPercent)
    },(err)=>{
        <div>(err)</div> 
         },()=>{setFormData({
        title:"",
        description:"",
        image:"",
    
    })
getDownloadURL(uploadImage.snapshot.ref).then((url)=>{
    const fileRef=collection(db,"Files");
    addDoc(fileRef,{
        title:formData.title,
        description:formData.description,
        imageURL:url,
        date:Timestamp.now().toDate(),
    }).then(()=>{
        toast("File added successfully",{type:"success"});
        setProgress(0)
    }).catch((err)=>{
        toast("Error adding file",{type:"error"})
    })
})
    }
    )
}
  return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      <h2>Creat file</h2>
      <label>Title</label>
      <input
        type="text"
        name="title"
        className="form-control"
        value={formData.title}
        onChange={(e) => handleChange(e)}
      />

      <label>Description:</label>
      <textarea
        name="description"
        className="form-control"
        value={formData.description}
        onChange={(e) => handleChange(e)}
      />

      <label>Image:</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className="form-control"
        onChange={(e)=>handleImageChange(e)}
      />

  {progress===0?null:(
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped mt-1"
          style={{ width:`${progress}%`  }}
        >
          {`uploing image ${progress}%`}
        </div>
      </div>



)}
      <button className="form-control btn-primary mt-2"
      onClick={handlePublish}>Publish</button>
    </div>
  );
};

export default AddFiles;
