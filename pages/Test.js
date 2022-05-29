import React from "react";
import Image from "next/image";
import test from "../assets/test.png";



export default function Test() {
  return (
    <>
      
        <div>
          <Image src={test} alt="Picture of the author" />
        </div>
      
    </>
  );
}