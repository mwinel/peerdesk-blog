import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/peerdesk.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <p className="text-center">
        Thank you for visiting our website! We're currently making some updates
        and improvements to better serve you. We apologize for any inconvenience
        this may cause and appreciate your patience as we work to bring you a
        better browsing experience. Please check back soon for our new and
        improved website.
      </p>
      <small className="text-gray-600">Copyright &#64; 2023. Peerdesk</small>
    </main>
  );
}
