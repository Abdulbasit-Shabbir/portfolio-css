import Image from "next/image";
import Header from "./component/header";
import React from "react";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import basit from "@/public/basit.jpg";
import Head from "next/head"; 
export default function Home() {
  return (
    <>
    
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>

      <div>
     
        <section className="home">
          <div className="home-info">
            <h1>Abdul Basit</h1>
            <h2>I'm a Frontend Developer</h2>
            <p>
              As a frontend developer, my expertise spans HTML, CSS,
              JavaScript/TypeScript, and NextJs. I’m passionate about crafting pixel-perfect designs and constantly exploring new technologies to enhance my skillset and deliver impactful solutions."
            </p>
            <div className="btn-sci">
              <a href="#" className="btn">
                Download
              </a>
              <div className="sci">
              
              <FaFacebookF className="icons" />
            <FaGithub className="icons" />
            <FaLinkedinIn className="icons" />
            <FaTwitter className="icons" />


                {/* <a href="#">
                  <i className="bx bxl-github"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="#">
                  <i className="bx bxl-facebookF"></i>
                </a> */}
              </div>
            </div>
          </div>

          <div className="home-img">
            <div className="img-box">
              <div className="img-item">
                <Image
                  src={basit}
                  alt="Abdul Basit"
                  className="profile-img"
                  width={300} 
                  height={300}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
