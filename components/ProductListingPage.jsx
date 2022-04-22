// @flow
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ReactTooltip from "react-tooltip";
import fallBackSrc from "./../public/not-found.jpg"

const PLP = (data) => {
  const [imageError, setImageError] = React.useState(false);

  const router = useRouter();
  const { title, image, price, id, description } = data;
  const src = image;

  const checkNameLength = () => {
    let titleUpdated;
    if (title.length > 30) {
      return `${title.slice(0, 30)}...`;
    }
    return title;
  };

  return (
    <div className="plp">
      <p>
        <Image
          loader={() => src}
          src={!imageError ? fallBackSrc : src }
          width={300}
          height={300}
          onError={() => setImageError(true)}
        />
      </p>
      <div>
        <span>
          {" "}
          <strong> ${price}</strong>{" "}
        </span>
        <span className="title" data-tip data-for="happyFace">
          {" "}
          <Link href={`products/${id}`}>{checkNameLength()}</Link>
        </span>
        {/* <ReactTooltip id="happyFace" type="error">
          <span>{title}</span>
        </ReactTooltip> */}
      </div>
    </div>
  );
};

export default PLP;
