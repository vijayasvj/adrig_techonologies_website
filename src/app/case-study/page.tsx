import React from "react";
import Link from "next/link";

interface ContentCardPropsType {
  title: string;
  link: string;
  index: number;
}

const bgColors = [
  "bg-gradient-to-tr from-blue-400 to-purple-500",
  "bg-gradient-to-tr from-green-400 to-teal-500",
  "bg-gradient-to-tr from-red-400 to-orange-500",
  "bg-gradient-to-br from-indigo-400 to-blue-500",
  "bg-gradient-to-br from-yellow-400 to-amber-500",
  "bg-gradient-to-br from-pink-400 to-rose-500",
  "bg-gradient-to-t from-cyan-400 to-sky-500",
  "bg-gradient-to-b from-lime-400 to-green-500"
];

function ContentCard({ title, link, index }: ContentCardPropsType) {
  return (
    <Link href={link}>
      <div
        className={`relative grid min-h-[20rem] cursor-pointer items-center justify-center overflow-hidden rounded-xl px-6 text-center text-white shadow-lg transition-transform duration-300 hover:scale-105 ${bgColors[index % bgColors.length]}`}
      >
        <h4 className="text-2xl font-semibold drop-shadow-md">{title}</h4>
      </div>
    </Link>
  );
}

const contents = [
  { title: "Southern Railways", link: "/case-study/southern-railways" },
  { title: "Barron Tech", link: "/case-study/barron-tech" },
  { title: "MIPORIS", link: "/case-study/miporis" },
  { title: "Tradebot", link: "/case-study/tradebot" },
  { title: "Website Building", link: "/case-study/website-building" },
  { title: "Ed Tech", link: "/case-study/ed-tech" },
  { title: "ArivuBot", link: "" },
  { title: "EYEQ", link: "" }
];

export function BlogSection11() {
  return (
    <section className="container mx-auto px-8 py-16 lg:py-24">
      <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl">Case Studies</h2>
      <p className="mt-2 max-w-lg text-gray-600">
        Explore our case studies and see how we’ve helped businesses grow.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {contents.map(({ title, link }, index) => (
          <ContentCard key={title} title={title} link={link} index={index} />
        ))}
      </div>
    </section>
  );
}

export default BlogSection11;
