import React from "react";
import Header from "../Header";
import SideBarLawyer from "./SideBarLawyer";
import "./Profile.css";
import ProfileLawyer from "./ProfileLawyer";
const Profile = () => {

  return (
    <>
      <Header />
      <div className="flex-profile">
        <section className="sidebarlawyer">
          <SideBarLawyer />
        </section>
        <main className="profile-lawyer">
        <ProfileLawyer/>
        </main>
      </div>
    </>
  );
};

export default Profile;
