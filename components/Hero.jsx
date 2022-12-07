import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <div className="container mx-auto my-6 overflow-hidden">
      <div className="-mx-2 flex flex-wrap lg:justify-between">
        <div className="w-full lg:w-1/2 xl:w-6/12">
          <div className="mb-12 max-w-[570px] lg:mb-0">
            <span className="text-primary  mb-4 block text-base font-semibold uppercase">
              Aye, Aye captain!
            </span>
            <h2 className="text-dark mb-6 text-[32px] font-bold sm:text-[40px] lg:text-[36px] xl:text-[40px]">
              <span>Hey 👋, I&apos;m a</span>
              <div className="text-primary">
                <Typewriter
                  options={{
                    strings: [
                      "Fullstack Web Developer.",
                      "UI/UX Designer.",
                      "IT Technician."
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </h2>
            <p className="text-body-color mb-9 text-base leading-relaxed">
              Am Christopher Odhiambo a tech and code enthuast from Mombasa,
              Kenya. Who enjoys the challenge of creating complex applications
              and experiences that are interactive, informative and accessible.
            </p>
            <ul className="flex flex-wrap items-center">
              <li>
                <Link href="mailto:christopherodhiambo254@gmail.com">
                  <a className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10 uppercase">
                    Hire me
                  </a>
                </Link>
              </li>
              <li>
                <a href="/images/resume.pdf" className="text-body-color hover:text-primary inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10" download>
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div className="relative rounded-lg p-8 sm:p-6">
            <Image
              alt="montana-profile"
              src="/images/montana.jpeg"
              height={400}
              width={400}
              className="rounded-b-full rounded-tl-full"
            />
            <div>
              <span className="absolute left-0 top-0 z-10">
                <svg
                  width="107"
                  height="134"
                  viewBox="0 0 107 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="104.999"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 104.999 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 104.999 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 104.999 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 104.999 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 104.999 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 104.999 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 104.999 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 104.999 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 104.999 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 104.999 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 90.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 90.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 90.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 90.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 90.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 90.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 90.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 90.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 90.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 90.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 75.6654 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 31.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 75.6654 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 31.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 75.6654 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 31.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 75.6654 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 31.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 75.6654 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 31.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 75.6654 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 31.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 75.6654 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 31.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 75.6654 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 31.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 75.6654 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 31.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 75.6654 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 31.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 60.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 17.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 60.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 17.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 60.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 17.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 60.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 17.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 60.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 17.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 60.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 17.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 60.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 17.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 60.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 17.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 60.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 17.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 60.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 17.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 46.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 2.66536 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 46.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 2.66536 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 46.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 2.66536 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 46.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 2.66536 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 46.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 2.66536 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 46.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 2.66536 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 46.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 2.66536 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 46.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 2.66536 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 46.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 2.66536 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 46.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 2.66536 1.66665)"
                    fill="#13C296"
                  />
                </svg>
              </span>
              <span className="absolute right-2 sm:right-24 bottom-3 z-10">
                <svg
                  width="107"
                  height="134"
                  viewBox="0 0 107 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="104.999"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 104.999 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 104.999 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 104.999 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 104.999 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 104.999 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 104.999 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 104.999 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 104.999 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 104.999 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="104.999"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 104.999 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 90.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 90.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 90.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 90.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 90.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 90.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 90.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 90.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 90.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="90.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 90.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 75.6654 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 31.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 75.6654 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 31.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 75.6654 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 31.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 75.6654 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 31.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 75.6654 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 31.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 75.6654 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 31.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 75.6654 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 31.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 75.6654 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 31.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 75.6654 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 31.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="75.6654"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 75.6654 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="31.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 31.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 60.9993 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 17.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 60.9993 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 17.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 60.9993 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 17.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 60.9993 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 17.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 60.9993 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 17.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 60.9993 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 17.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 60.9993 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 17.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 60.9993 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 17.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 60.9993 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 17.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="60.9993"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 60.9993 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="17.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 17.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 46.3333 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="132"
                    r="1.66667"
                    transform="rotate(180 2.66536 132)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 46.3333 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="117.333"
                    r="1.66667"
                    transform="rotate(180 2.66536 117.333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 46.3333 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="102.667"
                    r="1.66667"
                    transform="rotate(180 2.66536 102.667)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 46.3333 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="88"
                    r="1.66667"
                    transform="rotate(180 2.66536 88)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 46.3333 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="73.3333"
                    r="1.66667"
                    transform="rotate(180 2.66536 73.3333)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 46.3333 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="45"
                    r="1.66667"
                    transform="rotate(180 2.66536 45)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 46.3333 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="16"
                    r="1.66667"
                    transform="rotate(180 2.66536 16)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 46.3333 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="59"
                    r="1.66667"
                    transform="rotate(180 2.66536 59)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 46.3333 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="30.6666"
                    r="1.66667"
                    transform="rotate(180 2.66536 30.6666)"
                    fill="#13C296"
                  />
                  <circle
                    cx="46.3333"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 46.3333 1.66665)"
                    fill="#13C296"
                  />
                  <circle
                    cx="2.66536"
                    cy="1.66665"
                    r="1.66667"
                    transform="rotate(180 2.66536 1.66665)"
                    fill="#13C296"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
