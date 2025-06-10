import Image from "next/image";
import convexityLogo from "@/assets/convexity_logo_thumb.png";
import JoinWaitlist from "@/components/join-waitlist";

export default function Home() {
  return (
    <main className="flex h-[calc(100vh-80px)] flex-col items-center place-items-center px-6 md:px-24 py-20">
      <div className="mt-[20vh]" />
      <div className="relative md:mt-0 mt-20 z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-10 after:w-10 md:after:w-[280px] md:after:h-[280px] after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-[#EE4751] after:dark:via-[#EDF128] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="sm:text-6xl text-[2.5em] leading-tight text-center font-semibold">
          API-first Infrastructure for
          <br className="hidden md:block" /> Stablecoins
        </h1>
      </div>

      <div className="flex place-items-center mt-5">
        <span className="text-center font-light text-[1.2rem] md:text-lg">
          Focus on your solutions and faster market entry, supported by{" "}
          <br className="hidden md:block" /> reliable and highly efficient
          infrastructure.
        </span>
      </div>

      <div className="flex place-items-center mt-8">
        <JoinWaitlist />
      </div>

      <div className="flex-1" />
      <div className="flex place-items-center flex-1 md:flex-none">
        <span className="font-light flex items-center text-sm gap-2">
          Backed by{" "}
          <a
            href="https://withconvexity.com"
            rel="noopener noreferer"
            target="_blank"
            className="text-[#2853BB] flex items-center gap-1 font-normal"
          >
            <Image
              src={convexityLogo}
              height={20}
              width={20}
              alt="Convexity logo thumb"
            />
            Convexity
          </a>
        </span>
      </div>
    </main>
  );
}
