"use client";
import AboutMe from "@/components/about_me";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import Services from "@/components/services";
import Work from "@/components/work";
import React, { useEffect, useState } from "react";

export default function HomePage() {
 
 
  return (
    <>
      <Navbar   />
      <Profile  />
      <AboutMe  />
      <Services  />
      <Work  />
      <Contact  />
      <Footer  />
    </>
  );
}
