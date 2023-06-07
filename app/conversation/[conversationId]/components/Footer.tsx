"use client";

const Footer = () => {
  return (
    <form>
      <div className="flex">
        <input
          type="text"
          className="flex-1 p-4 bg-gray-100 outline-none"
          placeholder="Type anything"
        />
        <button className="p-4 bg-black text-white">Send</button>
      </div>
    </form>
  );
};

export default Footer;
