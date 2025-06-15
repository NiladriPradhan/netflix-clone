import { Bell, Search } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);


  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        isScrolled
          ? "bg-black/90"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        {/* Left Logo */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-red-600">NETFLIX</h1>
          <ul className="hidden md:flex space-x-6 text-sm text-white">
            <li className="cursor-pointer hover:text-gray-400">Home</li>
            <li className="cursor-pointer hover:text-gray-400">TV Shows</li>
            <li className="cursor-pointer hover:text-gray-400">Movies</li>
            <li className="cursor-pointer hover:text-gray-400">Latest</li>
            <li className="cursor-pointer hover:text-gray-400">My List</li>
          </ul>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-white text-xl">
          <Search className="cursor-pointer hover:text-gray-400" />
          <Bell className="cursor-pointer hover:text-gray-400" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="profile"
            className="w-8 h-8 rounded cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
