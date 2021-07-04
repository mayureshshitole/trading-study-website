import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";

const BlogsHome = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>TradeVeer | Blogs</title>
      </Head>
      <div className="p-2 md:p-5">
        {posts && (
          <div className="p-5 bg-gray-100 border-2 border-gray-200 shadow-lg rounded-lg flex flex-col justify-items-start   space-y-5">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold md:font-bold">
                Recently Added
              </h2>
            </div>
            <div className="py-5 md:px-20 flex justify-evenly md:justify-around items-center flex-col md:flex-row ">
              {posts.map((post, index) => (
                <Link key={posts._id} href={`/Blogs/${post.slug.current}`}>
                  <a>
                    <div>
                      <article className="bg-gray-200 border-2 border-white shadow-md p-2 flex flex-col rounded-md  transform hover:scale-105 transition duration-500 ease-in-out hover:ring-4">
                        <Image
                          className="rounded-md"
                          src={urlFor(post.mainImage).url()}
                          width={300}
                          height={300}
                          alt={`Main blog Image for the blog ${post.title} on www.tradeveer.com.`}
                          
                        />
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <time>{new Date(post._createdAt).toDateString()}</time>
                        
                      </article>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}

          {posts && (
          <div className="p-5 bg-gray-100 border-2 border-gray-200 shadow-lg rounded-lg flex flex-col justify-items-start space-y-5 mt-10">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold md:font-bold">
                Most Popular till now.
              </h2>
            </div>
            <div className="py-5 md:px-20 flex justify-evenly md:justify-around items-center flex-col md:flex-wrap ">
              {posts.map((post, index) => (
                <Link key={posts._id} href={`/Blogs/${post.slug.current}`}>
                  <a>
                    <div>
                      <article className="bg-gray-200 border-2 border-white shadow-md p-2 flex flex-col rounded-md  transform hover:scale-105 transition duration-500 ease-in-out hover:ring-4">
                        <Image
                          className="rounded-md"
                          src={urlFor(post.mainImage).url()}
                          width={300}
                          height={300}
                          alt={`Main blog Image for the blog ${post.title} on www.tradeveer.com.`}
                         
                        />
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <time>{new Date(post._createdAt).toDateString()}</time>
                        
                      </article>
                    </div>
                  </a>
                </Link>
              ))}
              {posts.map((post, index) => (
                <Link key={posts._id} href={`/Blogs/${post.slug.current}`}>
                  <a>
                    <div>
                      <article className="bg-gray-200 border-2 border-white shadow-md p-2 flex flex-col rounded-md hover:ring-4 transform group-hover:scale-125 transition duration-500 ease-in-out">
                        <Image
                          className="rounded-md"
                          src={urlFor(post.mainImage).url()}
                          width={300}
                          height={300}
                          alt={`Main blog Image for the blog ${post.title} on www.tradeveer.com.`}
                          
                        />
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <time>{new Date(post._createdAt).toDateString()}</time>
                        
                      </article>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const postQuery = `*[ _type == "post"]`;
  // const sanityURL = `https://wyn4tiio.api.sanity.io/v1/data/query/production?query=${postQuery}`;

  const postResults = await sanityClient.fetch(postQuery);

  if (!postResults.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts: postResults,
      },
    };
  }
};

export default BlogsHome;
