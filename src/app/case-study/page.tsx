
import React from 'react'
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/case-study/Card";

const caseStudies = [
  { name: "Southern Railways", slug: "southern-railways" },
  { name: "Barron Tech", slug: "barron-tech" },
  { name: "MIPORIS", slug: "miporis" },
  { name: "Tradebot", slug: "tradebot" },
  { name: "Website Building", slug: "website-building" },
  { name: "Ed Tech", slug: "ed-tech" },
];

export default function CaseStudy() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-study/${study.slug}`}>
            <Card className="p-6 cursor-pointer hover:shadow-lg transition rounded-lg bg-white border">
              <CardContent className="text-center text-xl font-semibold">
                {study.name}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
