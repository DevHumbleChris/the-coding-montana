import Head from "next/head";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false
    });
    console.log(response);
  };
  return (
    <>
      <Head>
        <title>Admin Login - The Coding Montana</title>
        <meta name="description" content="The Coding Montana - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-6 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="p-8 py-12 sm:p-16">
                <h2 className="mb-8 text-2xl font-bold text-gray-800">
                  Sign in to your account
                </h2>
                <form action="" className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-60">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="pwd" className="text-gray-600">
                        Password
                      </label>
                    </div>
                    <input
                      type="password"
                      name="pwd"
                      id="pwd"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="focus:outline-none block w-full rounded-md border border-gray-200 bg-transparent px-4 py-3 text-gray-600 transition duration-300 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-base font-semibold text-white">
                      Connect
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
