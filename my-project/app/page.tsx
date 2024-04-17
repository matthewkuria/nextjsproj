"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";

export default function Home() {
  const [inputVal, setInputVal] = useState("")
  console.log(inputVal)
  const handleSubmit = (e: FormEvent) =>{
    e.preventDefault();
  }
  return (
  <div className=" h-full w-full">

    <div className="">
      <h1>Enter Your Name</h1>
    </div>
    <form action="" onSubmit={handleSubmit}>
      <input type="text"
       placeholder="Type Your Name..."
       value={inputVal}
       onChange={(e)=> setInputVal(e.target.value)}
       />
      <button type="submit">Predict Data</button>
    </form>
  </div>
      );
}
