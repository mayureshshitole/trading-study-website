import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const defaultCryptoURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
const globalCryptoData = "https://api.coingecko.com/api/v3/global";
const trendingCoins = "https://api.coingecko.com/api/v3/search/trending";

export async function getStaticProps() {
  const res = await fetch(defaultCryptoURL);
  const globalRes = await fetch(globalCryptoData);
  const trendingRes = await fetch(trendingCoins);

  const data = await res.json();
  const globalData = await globalRes.json();
  const trendingData = await trendingRes.json();

  if (!data && !globalData && !trendingData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
      globalData,
      trendingData,
    },
  };
}

const CryptoHome = ({ data, globalData, trendingData }) => {
  const [coinData, setCoinData] = useState([]);
  const [globalCryptoData, setGlobalCryptoData] = useState([]);
  const [trendingCryptoData, setTrendingCryptoData] = useState([]);
  useEffect(() => {
    try {
      setCoinData(data);
      setGlobalCryptoData(globalData.data);
      setTrendingCryptoData(trendingData.coins);
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(trendingData.coins[0].item.name);

  return (
    <>
      <Head>
        <title>TradeVeer | Crypto Market</title>
      </Head>
      <div className=" bg-black text-white py-2">
        <marquee behavior="" direction="">
          <p className="flex space-x-3">
            <p className="bg-gray-500 flex rounded-3xl px-2 ">
              {globalCryptoData.active_cryptocurrencies}
            </p>
            <p className="bg-gray-500 flex rounded-3xl px-2 ">
              {globalCryptoData.active_cryptocurrencies}
            </p>
            <p className="bg-gray-500 flex rounded-3xl px-2 ">
              {globalCryptoData.active_cryptocurrencies}
            </p>
          </p>
        </marquee>
      </div>
      <div className="p-5">
        <p className="text-xl md:text-3xl font-bold">
          Cryptocurrency Prices by Market Cap
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 w-3/4 ">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden sm:rounded-lg border-2 border-blue-100">
              <table className="min-w-full divide-y divide-gray-200 table-auto ">
                <thead className="bg-gray-50" id="CryptoDataTable">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Coin
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Current Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Change in Last 24h
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Market Cap
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {coinData.map((res) => (
                    <tr key={res.id} className="hover:bg-gray-100 ">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Link href={"/Crypto/" + res.id}>
                          <div className="flex items-center group">
                            <div className="flex-shrink-0 h-10 w-10 cursor-pointer">
                              <Image
                                className="h-10 w-10 rounded-full transform group-hover:scale-125 transition duration-700 ease-in-out"
                                src={res.image}
                                alt={res.name}
                                layout="intrinsic"
                                width="50"
                                height="50"
                              />
                            </div>
                            <div className="ml-4 cursor-pointer">
                              <div className="text-sm font-medium text-gray-900 transform group-hover:scale-125 transition duration-700 ease-in-out">
                                {res.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {res.symbol}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-bold text-gray-900">
                          ${res.current_price}
                        </div>
                        <div className="text-sm text-gray-500">
                          {res.department}
                        </div>
                      </td>

                      <td className="flex flex-col px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <p className="font-bold ">
                          {" "}
                          {res.price_change_24h.toFixed(4)}
                        </p>
                        {res.price_change_percentage_24h > 0 ? (
                          <p className="text-green-500 text-left font-thin">
                            {res.price_change_percentage_24h.toFixed(2)}%
                          </p>
                        ) : (
                          <p className="text-red-500 text-left font-thin">
                            {res.price_change_percentage_24h.toFixed(2)}%
                          </p>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${res.market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoHome;
