import React from "react";
import Section from "../../components/Section";
import Image from "next/image";
import loggen from "../../public/loggen.gif";

function logGenerator() {
  return (
    <div className="w-full">
      <Section title="Log Template Generator">
        <p className="text-justify">
          A generator that creates log templates for my coworkers and I to use.
          This app is built with React. When the app is started, it prompts a
          user to pick what type of log they need. Once completed, 1-4 questions
          are asked depending on what log they have chosen. The answers are
          stored into a variable and after all questions are answered, the log
          template is displayed to the user. The user is prompted with a copy
          button in order to easily paste the log into the software we use at
          the job. I have provided a fake version for confidentiality reasons.
          The app is identical except all names are fake.
        </p>
        <ul className=" text-justify my-6">
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">
              Website:
            </span>
            <a
              className="text-gray-light underline"
              target={"_blank"}
              href="https://log-template-generator.vercel.app/"
            >
              https://log-template-generator.vercel.app/
            </a>
          </li>
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">Stack:</span>
            <a className="text-red-300">React, HTML, CSS</a>
          </li>
          <li>
            <span className="mr-2 bg-purple px-0.5 bg-opacity-50">Github:</span>
            <a
              className="underline text-gray-light"
              target={"_blank"}
              href="https://github.com/WPoulos24/Log-Template-Generator-Fake"
            >
              https://github.com/WPoulos24/Log-Template-Generator-Fake
            </a>
          </li>
        </ul>

        <div className=" mb-8">
          <Image src={loggen} />
        </div>
      </Section>
      <Section title="The Story">
        <p className="text-justify">
          While I was working as a Surveillance Operator, all day I would be
          typing these repetitive logs over and over. I decided to use my
          programming skills to try and create an app to make it much easier.
          Once completed, I used it for a couple of weeks and decided to show it
          to one of my coworkers. He instantly loved it. I ended up showing my
          Supervisor and he was very impressed. He presented it to our Manager
          and my Manager told everyone to start using it. Some of my coworkers
          gave me ideas to make it even better. I was constantly updating it to
          their likings. The app also works as a great tool for new hires to
          learn the log system. In all, it was a great experience, creating an
          app that has a real life use along with real users.
        </p>
      </Section>
    </div>
  );
}

export default logGenerator;
