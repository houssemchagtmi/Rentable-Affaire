import React from "react";
import Header from "../Header";
import { GetOnlyTheSecretary } from "./GetOnlyTheSecretary";
import "./Profile.css";
import SidebarSecretary from "./SidebarSecretary";
const ProfileSec = () => {

  return (
    <>
      <Header />
      <SidebarSecretary/>
     <GetOnlyTheSecretary/>
    </>
  );
};

export default ProfileSec;
