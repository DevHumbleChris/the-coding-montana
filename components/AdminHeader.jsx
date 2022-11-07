import Image from "next/image";
import {
  HomeModernIcon,
  ArrowRightOnRectangleIcon,
  PencilSquareIcon,
  BookmarkIcon,
  BriefcaseIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <div className="relative h-screen col-span-1 bg-[#26238a] p-2 text-white">
      <div className="mt-24">
        <div className="mx-auto hidden md:inline-block">
          <Image
            alt="montana-profile"
            src="/images/montana.jpeg"
            height={400}
            width={400}
            className="rounded-full w-12 h-12"
          />
          <h1 className="text-center">Coding Montana</h1>
        </div>
        <div className="flex flex-col space-y-6 mt-8">
          <Link href="/admin/dashboard">
          <a className="flex space-x-2 items-center hover:border-l-2 hover:border-[#514fa1] hover:px-2 hover:text-gray-400">
            <HomeModernIcon className="w-7 h-7 mx-auto md:mx-0" />
            <h2 className="hidden md:inline-block">Dashboard</h2>
          </a>
          </Link>
          <Link href="/admin/projects">
            <a className="flex space-x-2 items-center hover:border-l-2 hover:border-[#514fa1] hover:px-2 hover:text-gray-400">
              <BriefcaseIcon className="w-7 h-7 mx-auto md:mx-0" />
              <h2 className="hidden md:inline-block">Projects</h2>
            </a>
          </Link>
          <Link href="/admin/articles">
            <a className="flex space-x-2 items-center hover:border-l-2 hover:border-[#514fa1] hover:px-2 hover:text-gray-400">
              <PencilSquareIcon className="w-7 h-7 mx-auto md:mx-0" />
              <h2 className="hidden md:inline-block">Articles</h2>
            </a>
          </Link>
          <Link href="/admin/tasks">
            <a className="flex space-x-2 items-center hover:border-l-2 hover:border-[#514fa1] hover:px-2 hover:text-gray-400">
              <BookmarkIcon className="w-7 h-7 mx-auto md:mx-0" />
              <h2 className="hidden md:inline-block">Tasks</h2>
            </a>
          </Link>
        </div>
      </div>
      <button className="absolute bottom-0 m-2 hover:border-l-2 right-0 left-0 flex items-center space-x-2 hover:border-[#514fa1] hover:px-2 hover:text-gray-400">
        <ArrowRightOnRectangleIcon className="w-7 h-7 mx-auto md:mx-0" />
        <span className="hidden md:inline-block">Logout</span>
      </button>
    </div>
  );
}
