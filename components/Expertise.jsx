import React from "react";
import SharkLeft from "./SharkLeft";
import {
  DevicePhoneMobileIcon,
  CommandLineIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="container text-body-color text-base leading-relaxed my-5"
    >
      <div className="md:grid md:grid-cols-2 items-center">
        <div>
          <h3 className="text-primary mb-2 text-base font-semibold uppercase flex items-center">
            Expertise
            <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
          </h3>
          <h1 className="capitalize text-2xl font-bold text-primary">
            Why you should hire me?
          </h1>
          <p className="my-2">
            When buidling or cloning web projects, I strongly adhere to these
            principles which make my websites both unique and scaleable.
          </p>
          <SharkLeft />
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-2 space-y-2">
          <div className="border-dotted border-2 p-2 border-primary rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#3A52EE"
                d="M6.75 4.5A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25h6.602a4.5 4.5 0 016.148-6.148V9.75a2.25 2.25 0 00-2.25-2.25h-4.564l-2.561-2.56a1.5 1.5 0 00-1.06-.44H6.75z"
              ></path>
              <path
                fill="#3A52EE"
                fillRule="evenodd"
                d="M17.25 14.25a3 3 0 101.524 5.585l.946.945a.75.75 0 101.06-1.06l-.945-.946a3 3 0 00-2.585-4.524zm-1.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="text-primary font-medium">
              SEO (Search Engine Optimization)
            </h2>
            <p className="my-2 p-2 text-sm">
              I employ best SEO practices like &quot;Semantic HTML&quot; and
              more on websites and projects I work on to improve the site
              visibility and rankings on Google.
            </p>
          </div>
          <div className="border-dotted border-2 p-2 border-primary rounded-xl">
            <DevicePhoneMobileIcon className="text-primary w-6 h-6" />
            <h2 className="text-primary font-medium">Responsive Design</h2>
            <p className="my-2 p-2 text-sm">
              I am passionate about responsiveness and making the websites I
              build look good on different devices, browsers and cross platforms
              using both &quot;mobile first&quot; approach and desktop
              &quot;media queries&quot;
            </p>
          </div>
          <div className="border-dotted border-2 p-2 border-primary rounded-xl">
            <CommandLineIcon className="text-primary w-6 h-6" />
            <h2 className="text-primary font-medium">
              Reusable & Minimal code
            </h2>
            <p className="my-2 p-2 text-sm">
              I try my best to write as minimal code as possible by following
              the best code practises and making sure I adhere to the DRY (Dont
              Repeat Yourself) principle.
            </p>
          </div>
          <div className="border-dotted border-2 p-2 border-primary rounded-xl">
            <UserGroupIcon className="text-primary w-6 h-6" />
            <h2 className="text-primary font-medium">
              Great UI/UX & Accessibility
            </h2>
            <p className="my-2 p-2 text-sm">
              Coming from a background in design, I love creating pages where
              I&apos;m able to actually create enjoyable interactions and
              experiences for everyone!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
