import Link from "next/link";
import { useState } from "react";
import { Comment } from "react-loader-spinner";

export default function Contacts() {
  const [visitor, setVisitor] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSendMessage, setIsSendingMessage] = useState(false);
  console.log(isSendMessage);
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch("/api/sendmail", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(visitor),
    })
      .then((data) => data.json())
      .then((response) => {
        setIsSendingMessage(true);
        setTimeout(() => {
          setIsSendingMessage(false);
        }, 2000);
        setVisitor({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });
  };
  const handleOnChange = (e) => {
    setVisitor({
      ...visitor,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            If you have any questions about me or my projects, please contact
            me. I&apos;m available to grab a coffee and chat! Drop a comment,
            question, concern, or Spotify playlist, and thanks for stopping by!
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-2">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <Link href="mailto:christopherodhiambo254@gmail.com">
                  <a className="mt-6 font-medium text-gray-900 underline">
                    christopherodhiambo254@gmail.com
                  </a>
                </Link>
                <p className="mt-1 capitalize text-xs">Email me</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-xl">
              <div className="p-6">
                <svg
                  className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <Link href="https://calendly.com/the-coding-montana/30min">
                  <a className="mt-6 font-medium text-gray-900 underline">
                    Calendly
                  </a>
                </Link>
                <p className="mt-1 capitalize text-xs">Schedule a Meeting</p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden bg-white rounded-xl">
            <div
              className={
                isSendMessage
                  ? "px-6 py-12 sm:p-12 opacity-25"
                  : "px-6 py-12 sm:p-12"
              }
            >
              <h3 className="text-3xl font-semibold text-center text-gray-900">
                Send me a message.
              </h3>

              <form onSubmit={handleSubmit} method="POST" className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label
                      htmlFor="visitor-name"
                      className="text-base font-medium text-gray-900"
                    >
                      Your name
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        id="visitor-name"
                        placeholder="Enter your name"
                        value={visitor.name}
                        onChange={(e) => handleOnChange(e)}
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      Email Address
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        value={visitor.email}
                        onChange={(e) => handleOnChange(e)}
                        id="email"
                        placeholder="e.g johndoe@example.com"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="text-base font-medium text-gray-900"
                    >
                      Subject
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="subject"
                        value={visitor.subject}
                        onChange={(e) => handleOnChange(e)}
                        id="subject"
                        placeholder="subject"
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-base font-medium text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="message"
                        id="message"
                        value={visitor.message}
                        onChange={(e) => handleOnChange(e)}
                        placeholder="enter your message..."
                        className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      disabled={isSendMessage}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {isSendMessage && (
              <div className="absolute top-60 left-[35%] sm:left-[45%]">
                <Comment
                  visible={true}
                  height="120"
                  width="120"
                  ariaLabel="comment-loading"
                  wrapperStyle={{}}
                  wrapperClass="comment-wrapper"
                  color="#fff"
                  backgroundColor="#0011ff"
                />
                <p className="text-primary">Sending Message</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
