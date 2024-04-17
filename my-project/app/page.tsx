import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-black h-full w-full">

    <div className="">
      <h1>Enter Your Name</h1>
    </div>
    <form action="">
      <input type="text" placeholder="Type Your Name..." />
    </form>
  </div>
      );
}
