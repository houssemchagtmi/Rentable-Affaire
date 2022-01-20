import React, { useState } from "react";
import Header from "../Header";
import AddFiles from "./AddFiles";
import Files from "./Files";

const FilesModale = () => {
  return (
    <>
      <Header />

      <div className="row">
        <div className="col-md-8">
          <Files />
        </div>
        <div className="col-md-4">
          <AddFiles />
        </div>
      </div>
    </>
  );
};

export default FilesModale;
