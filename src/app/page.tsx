import Carousel from "@/components/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Developed by Ukkasha</h2>
    <div className="!h-[500px]">
    <Carousel />

    </div>
    </main>
  );
}
