import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center items-center px-16 md:px-24 py-10">

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-orange-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-orange-700 before:dark:opacity-10 after:dark:from-[#EE4751] after:dark:via-[#EDF128] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <h1 className="sm:text-6xl text-[2.5em] leading-tight text-center font-semibold">API Infrastructure tools for<br className="hidden md:block" /> nextgen builders</h1>
      </div>


      <div className="flex place-items-center mt-5">
        <span className="text-center font-light text-[1.2rem] md:text-lg">Focus on solutions and reducing time to market, with the confidence <br className="hidden md:block"/> of building on reliable and highly available infrastructure.</span>
      </div>


      <div className="flex-1" />
      <div className="flex place-items-center flex-1 md:flex-none">
        <span className="font-light">Backed by <a href="https://withconvexity.com" rel="noopener noreferer" target="_blank" className="text-sky-500">Convexity</a></span>
      </div>

    </main>
  );
}
