"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="bg-blue-600 text-white py-3 px-6 flex items-center justify-between">
      <div className="text-xl font-bold">My Website</div>
      <div className="space-x-6">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "text-green-500 underline"
              : "hover:text-gray-200"
          }
        >
          Home
        </Link>
        <Link
          href="/gallery"
          className={
            pathname === "/gallery"
              ? "text-green-500 underline"
              : "hover:text-gray-200"
          }
        >
          Gallery
        </Link>
        <Link
          href="/products"
          className={
            pathname === "/products"
              ? "text-green-500 underline"
              : "hover:text-gray-200"
          }
        >
          Products
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
