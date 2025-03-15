"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={"w-full px-5 lg:px-8 z-99"}>
      <div className="max-w-container h-full mx-auto py-4 flex items-center justify-between">
        <Link
          href={"/"}
          className="text-xl font-bold text-teal-600 dark:text-teal-400"
        >
          {"<Loveleet/>"}
        </Link>
        <a href="/resume.pdf" download>
          <button className="px-4 py-2 rounded-md border text-sm text-teal-600 dark:text-teal-400 border-teal-600 dark:border-teal-400">
            Resume
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
