"use client";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center justify-between w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              Learned<span className="text-teal-500">.log</span>
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
