"use client";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
const AuthSocial = () => {
  return (
    <div className="flex gap-5 items-center justify-center text-gray-700 text-xl ">
      <button>
        <FaFacebook />
      </button>
      <button>
        <FaGoogle />
      </button>
      <button>
        <FaTwitter />
      </button>
    </div>
  );
};

export default AuthSocial;
