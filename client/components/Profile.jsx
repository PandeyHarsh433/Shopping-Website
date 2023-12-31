import React, { useState, useEffect } from "react";
import { logout } from "./../utils/auth";
import { useRouter } from "next/router";

const Profile = ({ user }) => {
  const [username, setUsername] = useState("");
  const [photo, setPhoto] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(JSON.parse(storedUsername));
    }

    // Set other user data from props if available
    if (user) {
      setPhoto(user.photo);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center max-w-xxs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 my-10 mt:lg-20 mb-[22vh] mt-[12vh] p-10">
      <img
        src={photo || "https://source.unsplash.com/150x150/?portrait?3"}
        alt=""
        className="w-35 h-35 mx-auto rounded-full dark:bg-gray-500 aspect-square"
      />
      <div className="space-y-4 text-center divide-y divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-3xl pt-5">
            {username.toUpperCase()}
          </h2>
        </div>
        <div className="flex justify-center pt-2 space-x-4 align-center mt-3">
          <button
            className="w-full py-3 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center mt-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
