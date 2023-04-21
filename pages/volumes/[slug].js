import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { volumes } from "../../lib/data";

function findVolumeIndex(slug) {
  return volumes.findIndex((volume) => volume.slug === slug);
}

function findVolume(slug) {
  return volumes[findVolumeIndex(slug)];
}

function prevVolume(slug) {
  const index = findVolumeIndex(slug);
  const prevIndex = index - 1;
  if (prevIndex < 0) {
    return undefined;
  }
  return volumes[prevIndex];
}

function nextVolume(slug) {
  const index = findVolumeIndex(slug);
  const nextIndex = index + 1;
  if (nextIndex >= volumes.length) {
    return undefined;
  }
  return volumes[nextIndex];
}

function LinkToVolume({ volume, title }) {
  if (!volume) {
    return <span>{title}</span>;
  }
  return <Link href={`/volumes/${volume.slug}`}>{title}</Link>;
}

const Volume = () => {
  const {
    query: { slug },
  } = useRouter();

  const volume = findVolume(slug);

  const { title, description, books } = volume;

  return (
    <div>
      <div>
        <Link href="/volumes">Back to All Volumes</Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
          {books.map((book) => {
            return (
              <li key={book.title}>
                {book.ordinal} {book.title}
              </li>
            );
          })}
        </ul>
        <div>
          <Image
            src={`/images/${slug}.png`}
            alt="cover for"
            width="140"
            height="230"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LinkToVolume title="Prev" volume={prevVolume(slug)} />
          <LinkToVolume title="Next" volume={nextVolume(slug)} />
        </div>
      </div>
    </div>
  );
};

export default Volume;
