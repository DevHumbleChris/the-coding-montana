import React from "react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="container text-body-color text-base leading-relaxed my-5"
    >
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-primary mb-2 text-base font-semibold uppercase flex items-center">
            Check out my
            <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
          </h3>
          <h1 className="capitalize text-2xl font-bold text-primary">Skills</h1>
          <p className="py-2">
            Here you can see my skills, one of the fascinations of the computer
            world is the momentary changes of technologies, but I try to update
            my knowledge every day and experience new technologies.
          </p>
          <div className="grid grid-cols-5 justify-center">
            <div className="px-2 mx-auto border-2 rounded-xl p-2 border-dotted border-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 48 48"
                className="w-12 h-12"
              >
                <path
                  fill="#E65100"
                  d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                ></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path
                  fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                ></path>
                <path
                  fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                ></path>
              </svg>
              <h4 className="text-center text-sm">HTML 5</h4>
            </div>
            <div className="px-2 mx-auto border-2 rounded-xl p-2 border-dotted border-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 48 48"
                className="w-12 h-12"
              >
                <path
                  fill="#E65100"
                  d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                ></path>
                <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                <path
                  fill="#FFF"
                  d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                ></path>
                <path
                  fill="#EEE"
                  d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                ></path>
              </svg>
              <h4 className="text-center text-sm">HTML 5</h4>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
