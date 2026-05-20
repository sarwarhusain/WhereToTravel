"use client";

import { authClient } from "@/lib/auth-client";
import { Bars, XmarkShape } from "@gravity-ui/icons";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user; //
  // console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <nav>
      {/* Light Glass Navbar */}
      <div className="bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <div className="">
            <Image
              src={"/assets/Wanderlast.png"}
              width={150}
              height={150}
              alt="logo"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex  gap-8">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/add-destination"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              Add-Destination
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/destination"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              Destination
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/booking"
              className="relative text-gray-700 hover:text-cyan-600 transition group font-medium"
            >
              Booking
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-cyan-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* login and logout */}
          <ul className="hidden md:flex items-center gap-3">
            <Link href="/">
              <button>Profile</button>
            </Link>
            {user ? (
              <>
                <Avatar>
                  <Avatar.Image alt="John Doe" src={user?.image} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button
                  onClick={handleSignOut}
                  className={"rounded-none "}
                  variant="danger"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <button>SignUp</button>
                </Link>
                <Link href="/login">
                  <button>Login</button>
                </Link>
              </>
            )}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 hover:text-cyan-600 transition hover:scale-110"
          >
            {open ? <XmarkShape size={30} /> : <Bars size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 px-6 py-5 space-y-4 overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div>
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Home
          </Link>
          <Link
            href="/add-destination"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Add Destination
          </Link>
          <Link
            href="/destination"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Destination
          </Link>
          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Booking
          </Link>
          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-gray-700 hover:text-cyan-600 text-lg transition font-medium"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
