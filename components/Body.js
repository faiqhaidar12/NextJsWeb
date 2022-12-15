import React from "react";

export default function Body() {
  return (
    <div className="scroll-smooth">
      <div className="flex justify-center font-light text-5xl py-8">
        <h1>GET HELP</h1>
      </div>
      <div className="flex justify-center ">
        <input
          className="border border-black rounded-lg px-20 py-5"
          placeholder="What can we help you ?"
          type="text"
        ></input>
      </div>
      <div className="flex pb-10">
        {/* LEFT */}
        <div className="flex flex-col border-r-2 border-black py-2 px-24">
          <h1 className="text-2xl">
            WHEN ARE NIKE'S HOLIDAY SHIPPING DEADLINES?
          </h1>
          <p className="py-4">
            During checkout, we’ll provide an estimated delivery date for every
            item in your bag based on your shipping selection, the delivery
            address, and where the item(s) ship from.
          </p>
          <p className="py-2">
            Order by these deadlines* for delivery by December 24—your loved
            ones will thank you.
          </p>
          <div className="px-5 py-2">
            <li className="py-1">
              No Rush Shipping:Order by 6pm PST on December 13
            </li>
            <li className="py-1">
              Standard Shipping: Order by 6pm PST on December 14
            </li>
            <li className="py-1">
              Expedited Shipping: Order by 6am PST on December 20
            </li>
          </div>
          <p className="italic py-5">
            Please note, expedited shipping may not be available for your order.
          </p>
          <div className="py-5">
            <button className="border border-black bg-black text-white rounded-xl px-5 py-1">
              SHOP NIKE
            </button>
          </div>
          Give the gift that always fits with Nike Gift Cards. And digital gift
          cards always arrive on time—they're usually emailed in two hours or
          <p>less.</p>
          <div className="py-5">
            <button className="border border-black bg-black text-white rounded-xl px-5 py-2">
              SHOP NIKE GIFT CARDS
            </button>
          </div>
          <p>
            *Holiday shipping deadlines do not apply to custom Nike By You or
            Converse Custom orders.
          </p>
          <div className="py-10">
            <p>Help Us Improve </p>
            <p>Was this page helpful?</p>
          </div>
          <div className="flex justify-center gap-5">
            <h1 className="border  border-black px-5 py-5">ICON</h1>
            <h1 className="border border-black px-5 py-5">ICON</h1>
          </div>
          <div className="flex justify-center gap-20">
            <h1>YES</h1>
            <h1>NO</h1>
          </div>
          <div>
            <h1>RELATED </h1>
            <div className="px-5 py-2">
              <li>WHAT ARE NIKE'S SHIPPING OPTIONS? </li>
              <li>HOW DO I GET FREE SHIPPING ON NIKE ORDERS?</li>
              <li>WHAT IS NIKE’S RETURN POLICY?</li>
              <li>WHERE IS MY NIKE ORDER?</li>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="justify-center px-28">
          <div className="font-medium text-4xl pb-10">
            <h1 className="text-center">CONTACT US</h1>
          </div>
          <div className="text-center border border-black py-10 px-5">
            <h1>ICON</h1>
          </div>
          <div className="py-5 text-center">
            <h1>PRODUCTS & ORDERS</h1>
            <h1>1-800-806-6453</h1>
            <h1>4 am - 11 pm PT</h1>
            <h1>7 days a week</h1>
          </div>
          <div className="text-center border border-black py-10 px-5">
            <h1>ICON</h1>
          </div>
          <div className="py-5 text-center">
            <h1>PRODUCTS & ORDERS </h1>
            <h1>Chat with us </h1>
            <h1>4 am - 11 pm PT </h1>
            <h1>7 days a week</h1>
          </div>
          <div className="text-center border border-black py-10 px-5">
            <h1>ICON</h1>
          </div>
          <div className="py-5 text-center">
            <h1>STORE LOCATOR</h1>
            <h1>Find Nike retail stores near you</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
