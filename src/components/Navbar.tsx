'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full bg-zinc-900 text-white py-4 px-6 shadow-md flex justify-center space-x-6">
      <Link href="/" className="hover:underline">Home</Link>
      <Link href="/projects" className="hover:underline">Projects</Link>
      <Link href="/tools" className="hover:underline">Tools</Link>
      <Link href="/gallery" className="hover:underline">Gallery</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/contact" className="hover:underline">Contact</Link>
      <Link href="/contact" className="hover:underline">Dev Notes</Link>
    </nav>
  );
};

export default Navbar;