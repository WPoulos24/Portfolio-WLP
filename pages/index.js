import Head from "next/head";
import React, { useState } from "react";
import "tippy.js/animations/scale.css";
import Link from "next/link";

import Image from "next/image";
import avi from "../public/avi.jpg";
import Article from "../components/Article";

export default function Home() {
  return (
    <Article className="flex flex-col items-center justify-center min-h-screen py-2 bg-bg">
      <Head>
        <title>Portfolio | WLP</title>
        <link
          rel="icon"
          href="https://img.icons8.com/color/48/null/stormtrooper.png"
        />
      </Head>

      <main>
        <div className="pt-4">
          <article>
            <div className="px-4 text-white pb-4">
              {/* <div className="box-content rounded-lg bg-gray text-white border-green h-auto w-auto p-4 mx-6 mb-6 border-4">
              Hello, I'm a full-stack developer based in the US.
            </div> */}

              <div className="text-white">
                <div className="text-left">
                  <h2 className="text-3xl">William Poulos</h2>
                  <p>Developer /</p>
                </div>
                <div className="flex justify-center mt-8 h-auto w-auto">
                  <Image
                    className="rounded-full"
                    src={avi}
                    height={72}
                    width={72}
                  />
                </div>
              </div>
              <div className="">
                <h3 className="text-2xl text-left underline my-2">Bio</h3>
                <p className="text-justify">
                  William Poulos is a software developer and freelancer working
                  in the United States. He is currently studying React along
                  with Data Structures. During his free time he enjoys working
                  on his cars.
                </p>
                <div className="my-6 align-center">
                  <Link href="/work">
                    <button className="rounded-full text-black bg-purple px-6 py-2 hover:bg-green">
                      Work
                    </button>
                  </Link>
                </div>
              </div>
              <div className="">
                <h3 className="text-2xl text-left underline my-2">Stack</h3>
                <p className="text-justify">
                  Front-end: HTML5, CSS, JavaScript, React, NextJS, TailwindCSS
                  <br />
                  Etc: Shopify, Photoshop
                </p>
              </div>
              <div className="">
                <h3 className="text-2xl text-left underline my-2">Contact</h3>
                <p className="text-justify flex justify-between">
                  Email: wpoulos24@gmail.com
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </Article>
  );
}
