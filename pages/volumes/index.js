import React from "react";

import Link from "next/link";

import { introduction, volumes } from "../../lib/data";

const Volumes = () => {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Volumes;
