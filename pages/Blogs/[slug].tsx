import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";
import Head from "next/head";

const BlogPost = ({ title, body, postImage, dateTime }) => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "wyn4tiio",
      dataset: "production",
    });

    setImageURL(imgBuilder.image(postImage).url());
  }, [postImage]);
  console.log(imageURL);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className=" p-2 md:p-3 flex flex-col justify-center items-center selection:bg-indigo-400">
        <div className="md:w-3/4 p-5 bg-gray-100 flex flex-col justify-center items-center rounded-lg">
          <h1 className="font-bold text-2xl md:text-4xl">{title}</h1>
          {imageURL ? (
            <Image
              src={imageURL}
              className="rounded-lg"
              alt={`main Image of  blog "${title}" on TradeVeer.com`}
              width={500}
              height={200}
              layout="intrinsic"
            />
          ) : (
            <div></div>
          )}
          <BlockContent
            blocks={body}
            {...{ projectId: "wyn4tiio", dataset: "production" }}
            imageOptions={{ w: 500, h: 350, fit: "max" }}
            className="flex flex-col justify-center items-start"
          />
        </div>
        <h2>{dateTime}</h2>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const postSlug = pageContext.query.slug;

  if (!postSlug) {
    return {
      notFound: true,
    };
  }

  const postQuery = encodeURIComponent(
    `*[_type=="post" && slug.current=="${postSlug}"]`
  );
  const sanityURL = `https://wyn4tiio.api.sanity.io/v1/data/query/production?query=${postQuery}`;

  const postResult = await fetch(sanityURL).then((res) => res.json());
  const posts = postResult.result[0];

  if (!posts) {
    return { notFound: true };
  } else {
    return {
      props: {
        body: posts.body,
        title: posts.title,
        postImage: posts.mainImage,
        dateTime: posts._createdAt || null,
      },
    };
  }
};

export default BlogPost;
