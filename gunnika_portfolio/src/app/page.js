import Image from "next/image";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div style={{ width: "100%", height: "100%"}}>
      {/* <h2>Root page wrapper</h2> */}
      <HomePage />
    </div>
  );
}
