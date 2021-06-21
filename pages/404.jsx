import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
const NotFound = () => {
  return (
    <>
      <Head>
        <title>TradeVeer | Page Not Found</title>
      </Head>
      <div className="h-auto w-screen bg-gray-100 ">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="font-bold text-6xl">Oooooooops</h1>
          <br />
          <h3 className="font-semibold text-4xl">Page Not Found</h3>
          <br />
          <Link href="/">
            <Image
              src="/vercel.svg"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
