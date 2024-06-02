import Image from "next/image";
import React from "react";

function SvgBlob({
  src,
  cssClass,
  name,
}: {
  src: string;
  cssClass: string;
  name?: string;
}) {
  return (
    <Image
      src={src}
      width={Math.floor(Math.random() * 101) + 300}
      height={Math.floor(Math.random() * 101) + 300}
      alt={name || "background-svg"}
      className={cssClass}
    />
  );
}

export default SvgBlob;
