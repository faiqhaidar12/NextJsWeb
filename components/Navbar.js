import React from "react";

export default function Navbar() {
  return (
    <div className="scroll-smooth">
      <div className="flex justify-between bg-gray-100 px-10 py-1">
        <h1>Logo</h1>
        <div className="flex gap-5 cursor-pointer">
          <h3 className="underline">Find a Store</h3>
          <h3 className="underline">Help</h3>
          <h3 className="underline">Join Us</h3>
          <h3 className="underline">Sign In</h3>
        </div>
      </div>
      <div className="flex justify-between px-10 py-5">
        <h1>Logo</h1>
        <div className="flex gap-5 cursor-pointer">
          <h1>New & Featured</h1>
          <h1>Men</h1>
          <h1>Women</h1>
          <h1>Kids</h1>
          <h1>Sale</h1>
          <h1>Gift</h1>
        </div>
        <div className="flex gap-3">
          <button className="border border-black rounded-lg px-10 bg-gray-100">
            Cari
          </button>
          <h1>Icon</h1>
          <h1>Cart</h1>
        </div>
      </div>
      <div className="flex justify-center bg-gray-100 py-5 space-x-1">
        <p>Place your order before our</p>
        <p className="underline cursor-pointer">holiday shipping deadlines</p>
        <p>to make sure you get your gifts on time.</p>
      </div>
    </div>
  );
}
