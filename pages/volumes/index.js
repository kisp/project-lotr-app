import React from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import { introduction, volumes } from "../../lib/data";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function handleRandomVolume(router) {
  return () => {
    const volume = getRandomElement(volumes);
    router.push(`/volumes/${volume.slug}`);
  };
}

const Volumes = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <div>
        <button onClick={handleRandomVolume(router)}>Random volume</button>
      </div>
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
