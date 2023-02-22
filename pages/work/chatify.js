import React from "react";
import Section from "../../components/Section";
import Image from "next/image";
import chatifyGif from "../../public/chatify.gif";

function chatify() {
  return (
    <div className="w-full">
      <Section title="Chatify">
        <p className="text-justify">
          Full featured social music discovery app. Chatify uses your current
          song playing on Spotify to place you in an anonymous web IRC chat with
          other users listening to the same artist. It also has real-time typing
          where users can see what other users type at the exact moment every
          key is pressed. UI allows for seamless switching between rooms/music.
          While the app works efficiently, we are constantly adding new
          features. It is still in active development.
        </p>
        <ul className=" text-justify my-6">
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
              Website:
            </span>
            <a
              target={"_blank"}
              className="text-gray-light underline"
              href="https://chatifymono.vercel.app/"
            >
              https://chatifymono.vercel.app/
            </a>
          </li>
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">Stack:</span>
            <a className="text-red-300">
              Next.js, Express, NodeJS, SocketIO, Spotify API
            </a>
          </li>
        </ul>

        <div className=" mb-8">
          <Image src={chatifyGif} />
        </div>
      </Section>
      <Section title="Involvement">
        <p className="text-justify">
          I built this app alongside a friend who is a software developer. While
          I may have many other smaller projects, nothing compares to Chatify
          when it comes to how much knowledge I've gained doing a project.
          Working alongside someone who shares the same passion really helped me
          want to learn more and work harder. I did most of the front-end
          development for the app. Additionally, I learned so much about the
          backend and how servers work from watching my friend and helping him
          solve problems that we came across. Chatify was a great experience
          that helped me learn how building a full-stack app with a partner
          really is.
        </p>
      </Section>
    </div>
  );
}

export default chatify;
