import Link from "next/link";
import { motion } from "framer-motion";
import ProfileHolder from "./ProfileHolder";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto">
        <div>
          <motion.h3
            initial={{ x: -500, opacity: 0, scale: 1.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            className="text-primary mb-2 text-base font-semibold uppercase flex items-center"
          >
            Some info
            <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
          </motion.h3>
          <motion.h1
            initial={{ x: -500, opacity: 0, scale: 1.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}
            className="capitalize text-2xl font-bold text-primary"
          >
            About Me
          </motion.h1>
        </div>
        <div className="grid mx-auto lg:grid-cols-2 items-center">
          <ProfileHolder />
          <div className="max-w-xl mx-auto flex flex-col">
            <motion.p
              initial={{ x: 500, opacity: 0, scale: 1.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="text-body-color mb-3 text-base leading-relaxed"
            >
              I started a serious coding journey almost exactly a year ago. I
              love combining the worlds of logic and creative design to make
              eye-catching, accessible, user-friendly websites and applications.
              I offer both design and development services of web applications
              or websites!
            </motion.p>
            <motion.p
              initial={{ x: 500, opacity: 0, scale: 1.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="text-body-color mb-3 text-base leading-relaxed"
            >
              <span>
                Basically, am a web developer with a focus, love and passion for
                the JavaScript langauge with all its related stack. Most of the
                times, I love building projects that are of MERN
              </span>
              <span className="text-primary mx-1">
                (MongoDB, Express, React & Node)
              </span>
              and
              <span className="text-primary mx-1">
                MEVN (MongoDB, Express, Vue & Node)
              </span>
              <span>
                stack, but am still exploring other technologies and frameworks
                that catch my interest!
              </span>
            </motion.p>
            <motion.p
              initial={{ x: 500, opacity: 0, scale: 1.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.6 }}
              className="text-body-color mb-3 text-base leading-relaxed"
            >
              I am excited to make the leap and continue refining my skills with
              the right company. If you are looking for a developer to add to
              your team, I would love to hear from you!
            </motion.p>
            <motion.h1
              initial={{ x: 500, opacity: 0, scale: 1.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1.8 }}
              className="text-center my-2 text-body-color text-base leading-relaxed"
            >
              Don&apos;t be a stranger connect with me online.
            </motion.h1>
            <motion.div
              initial={{ x: 500, opacity: 0, scale: 1.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 2.0 }}
              className="flex items-center justify-center space-x-6 my-2"
            >
              <Link href="https://github.com/DevHumbleChris">
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-9 h-9"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/christopher-odhiambo-2870331aa">
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="w-9 h-9"
                    style={{ fill: "#000000" }}
                  >
                    <path
                      fill="#0078d4"
                      d="M8.421,14h0.052l0,0C11.263,14,13,12,13,9.5C12.948,6.945,11.263,5,8.526,5S4,6.945,4,9.5	C4,12,5.736,14,8.421,14z M4,17h9v26H4V17z M44,26.5c0-5.247-4.253-9.5-9.5-9.5c-3.053,0-5.762,1.446-7.5,3.684V17h-9v26h9V28l0,0	c0-2.209,1.791-4,4-4s4,1.791,4,4v15h9C44,43,44,27.955,44,26.5z"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link href="https://twitter.com/AmChrisKE?t=CuF7ruFOTdF03j7AzVpOgw&s=09">
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    className="w-9 h-9"
                    style={{ fill: "#000000" }}
                  >
                    <linearGradient
                      id="_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1"
                      x1="10.341"
                      x2="40.798"
                      y1="8.312"
                      y2="38.769"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#2aa4f4"></stop>
                      <stop offset="1" stop-color="#007ad9"></stop>
                    </linearGradient>
                    <path
                      fill="url(#_osn9zIN2f6RhTsY8WhY4a_5MQ0gPAYYx7a_gr1)"
                      d="M46.105,11.02c-1.551,0.687-3.219,1.145-4.979,1.362c1.789-1.062,3.166-2.756,3.812-4.758	c-1.674,0.981-3.529,1.702-5.502,2.082C37.86,8.036,35.612,7,33.122,7c-4.783,0-8.661,3.843-8.661,8.582	c0,0.671,0.079,1.324,0.226,1.958c-7.196-0.361-13.579-3.782-17.849-8.974c-0.75,1.269-1.172,2.754-1.172,4.322	c0,2.979,1.525,5.602,3.851,7.147c-1.42-0.043-2.756-0.438-3.926-1.072c0,0.026,0,0.064,0,0.101c0,4.163,2.986,7.63,6.944,8.419	c-0.723,0.198-1.488,0.308-2.276,0.308c-0.559,0-1.104-0.063-1.632-0.158c1.102,3.402,4.299,5.889,8.087,5.963	c-2.964,2.298-6.697,3.674-10.756,3.674c-0.701,0-1.387-0.04-2.065-0.122C7.73,39.577,12.283,41,17.171,41	c15.927,0,24.641-13.079,24.641-24.426c0-0.372-0.012-0.742-0.029-1.108C43.483,14.265,44.948,12.751,46.105,11.02"
                    ></path>
                  </svg>
                </a>
              </Link>
              <Link href="https://wa.me/message/BSLLTZE6NKUIF1">
                <a className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="96"
                    height="96"
                    viewBox="0 0 48 48"
                    className="w-10 h-10"
                    style={{ fill: "#000000" }}
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    ></path>
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    ></path>
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
