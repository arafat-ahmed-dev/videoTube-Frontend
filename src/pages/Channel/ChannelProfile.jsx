import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom"; // Import useNavigate and Outlet
import { FaBell } from "react-icons/fa";

const ChannelProfile = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("Videos");
  const navigate = useNavigate();

  const menuItems = [
    { name: "Videos", to: "videos" },
    { name: "Playlists", to: "playlists" },
    { name: "Tweets", to: "tweets" },
    { name: "Following", to: "following" },
  ];

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item.name);
    navigate(item.to); // Navigate to the respective nested route
  };

  return (
    <div className="flex-1 flex flex-col">
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-fit">
          <div className="md:h-[240px] h-[160px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 "></div>
          <div className="relative flex justify-between sm:mx-0 mx-2 sm:items-end sm:px-4 sm:py-3 py-4 sm:pb-4 sm:flex-row flex-col">
            <div className="relative sm:items-end sm:gap-5 gap-2 sm:flex-row flex-col">
              <div className="absolute md:-top-[5rem] -top-[4rem]">
                <img
                  src="https://picsum.photos/400/300?random=1"
                  alt="Yash Mittal"
                  className="w-[96px] md:w-[160px] h-[96px] md:h-[160px] rounded-full border-4 border-white"
                />
              </div>
              <div className="relative mt-[2rem] sm:mt-[15%] md:mt-0 md:ml-[11rem] mb-4 text-white">
                <h1 className="text-[30px] font-bold">Yash Mittal</h1>
                <p>@YashMittal</p>
                <p>600k Subscribers • 220 Subscribed</p>
              </div>
            </div>
            <button className="bg-purple-600 max-h-fit max-w-fit text-white px-4 py-2 hover:bg-purple-700 transition duration-150 ease-in-out flex items-center gap-2">
              <FaBell className="h-5 w-5" />
              Follow
            </button>
          </div>
        </div>

        <div className="md:p-6 md:px-0 pt-0">
          <div className="flex mb-3 overflow-x-auto w-full justify-around sm:gap-5 gap-3 pb-3 border-b-[1px]">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`px-4 py-2 flex-1 text-white transition-colors duration-200 font-medium ${activeMenuItem === item.name
                    ? "bg-gray-400 text-purple-600 border-purple-600 border-b-[3px]"
                    : "bg-gray-700 hover:bg-gray-600"
                  }`}
                onClick={() => handleMenuItemClick(item)}
              >
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default ChannelProfile;
