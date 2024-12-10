import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaThumbsUp, FaHistory, FaPlayCircle, FaFolderOpen, FaUsers, FaCog, FaQuestionCircle, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import AvatarImage from "../components/Material Ui/Avatar";
import { useSelector } from "react-redux";
import Logo from "../components/Logo";

const SidebarMenuItem = ({ item, isActive, onClick, loading }) => {
  if (loading) {
    return (
      <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
    );
  }
  return (
    <button
      className={`w-full flex items-center gap-2 p-3 rounded-lg transition-colors dark:text-white 
          ${isActive
          ? "bg-yellow-400 text-black dark:text-black"
          : "dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-200"
        }`}
      onClick={() => onClick(item)}
    >
     
      <span>{item.name}</span>
    </button>
  );
};

function Layout() {
  const [activeMenuItem, setActiveMenuItem] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(false); // Set back to false to render content
  const authStatus = useSelector((state) => state.auth.status);


  const navigate = useNavigate();

  let menuItems;

  if (!authStatus) {
    menuItems = [
      { name: "Home", icon: FaHome, to: "/", active: true },
      { name: "Liked Videos", icon: FaThumbsUp, to: "/liked-videos" },
      { name: "History", icon: FaHistory, to: "/history" },
      { name: "My content", icon: FaPlayCircle, to: "/my-content" },
      { name: "Collection", icon: FaFolderOpen, to: "/collection" },
      { name: "Subscribers", icon: FaUsers, to: "/subscribers" },
      { name: "Settings", icon: FaCog, to: "/settings" },
      { name: "Support", icon: FaQuestionCircle, to: "/support" },
    ];
  } else {
    menuItems = [
      { name: "Home", icon: FaHome, to: "/", active: true },
      { name: "History", icon: FaHistory, to: "/history" },
      { name: "Subscribers", icon: FaUsers, to: "/subscribers" },
      { name: "Settings", icon: FaCog, to: "/settings" },
      { name: "Support", icon: FaQuestionCircle, to: "/support" },
    ];
  }

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item.name);
    navigate(item.to);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const MobileShimmerHeader = () => (
    <div className="w-full p-4 flex flex-col gap-5">
      <div className="flex justify-between items-center w-full">
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      </div>
      <div className="w-full h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    </div>
  );

  const DesktopShimmerHeader = () => (
    <div className="w-full p-4 flex justify-between items-center gap-5">
      <div className="flex-1 max-w-xl h-10 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
    </div>
  );

  const ShimmerSidebar = () => (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
        <div className="h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen dark">
      <div className="md:grid md:grid-cols-[240px_1fr] min-h-screen dark:bg-gray-900 h-full">
        {/* Mobile Header */}
        <header className="md:hidden border-b dark:border-gray-800 bg-yellow-400 dark:bg-gray-900 p-4 flex flex-col gap-5 justify-between items-center">
          {loading ? (
            <MobileShimmerHeader />
          ) : (
            <>
              <div className="flex justify-between items-center w-full">
                <button
                  onClick={toggleSidebar}
                  className="px-2 py-1 dark:text-white text-black"
                >
                  <FaBars className="h-6 w-6" />
                </button>
                <Link to="/" className="flex gap-2 items-center">
                  <Logo />
                </Link>
                <Link to={"/auth/login"}>
                  <button className="px-4 py-2 bg-yellow-500 text-black dark:text-white rounded-md hover:bg-yellow-600">
                    Login
                  </button>
                </Link>
              </div>
              <div className="flex-1 max-w-xl relative w-full">
                <form onSubmit={handleSearch} className="flex-1 max-w-xl relative">
                  <input
                    type="search"
                    placeholder="Search posts..."
                    className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full w-full border border-black dark:text-white text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    <FaSearch className="h-4 w-4 text-gray-500" />
                  </button>
                </form>
              </div>
            </>
          )}
        </header>

        {/* Sidebar */}
        <aside
          className={`fixed md:static inset-0 z-50 bg-white dark:bg-gray-900
                    transform transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 border-r dark:border-gray-800 p-4
                    w-[240px]
                `}
        >
          {loading ? (
            <ShimmerSidebar />
          ) : (
            <>
              <Link
                to="/"
                className="hidden md:flex gap-2 mb-8 justify-left h-fit items-center"
              >
                {/* <span className="text-yellow-400 text-xl">VideoTube</span> */}
                <Logo />
              </Link>
              <div className="space-y-6">
                <section>
                  <div className="flex justify-between items-center mb-4">
                    <button
                      onClick={toggleSidebar}
                      className="md:hidden px-1 py-1 dark:text-white text-black"
                    >
                      <FaTimes className="h-5 w-5 dark:text-white text-black" />
                    </button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex flex-col justify-between h-[85vh]">
                      <div>
                        {menuItems.slice(0, -2).map((item) => (
                          <SidebarMenuItem
                            key={item.name}
                            item={item}
                            isActive={activeMenuItem === item.name}
                            onClick={handleMenuItemClick}
                            loading={loading}
                          />
                        ))}
                      </div>
                      <div className="border-t border-gray-800">
                        {menuItems.slice(-2).map((item) => (
                          <SidebarMenuItem
                            key={item.name}
                            item={item}
                            isActive={activeMenuItem === item.name}
                            onClick={handleMenuItemClick}
                            loading={loading}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex flex-col h-[calc(100vh-64px)] md:h-screen overflow-y-auto w-full">
          <header className="hidden md:flex border-b dark:border-gray-800 bg-yellow-400 dark:bg-gray-900 p-4 w-full">
            {loading ? (
              <DesktopShimmerHeader />
            ) : (
              <div className="flex justify-between items-center w-full">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center w-full max-w-xl relative"
                >
                  <input
                    type="search"
                    placeholder="Search posts..."
                    className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full w-full border border-black dark:text-white text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                  >
                    <FaSearch className="h-4 w-4 text-gray-500" />
                  </button>
                </form>
                {!authStatus ? <Link to={"/auth/login"} className="ml-4">
                  <button className="px-4 py-2 hover:bg-gray-500 text-black dark:text-white rounded-md">
                    Login
                  </button>
                </Link>
                  :
                  <AvatarImage />
                }
              </div>
            )}
          </header>
          <div className="p-4">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
