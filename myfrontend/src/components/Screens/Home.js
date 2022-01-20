import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import Header from "../Header";
import { GetLawyers } from "./exportsLawyer";
import './Home.css'
const Home = () => {
  return (
    <div>
      <Header />
      <section className="flexhome">
        <div className='sidebarhome'>
      <GetLawyers  />
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d809708.9436021512!2d9.90478025!3d37.556817550000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sfr!2stn!4v1642466011343!5m2!1sfr!2stn" width={1520} height={900} style={{"border":"0"}} allowFullScreen loading="lazy" />
            </section>
     
    </div>
  );
};
  
export default Home;
