import Image from "next/image";

export default function Home() {
  return (
  <div className=" h-full w-full">

    <div className="">
      <h1>Enter Your Name</h1>
    </div>
    <form action="">
      <input type="text" placeholder="Type Your Name..." />
      <button type="submit">Predict Data</button>
    </form>
  </div>
      );
}
