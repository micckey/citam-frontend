import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import akazaImage from "../assets/akaza.jpeg";
import { Link, useLocation } from "react-router-dom";
import CitamLogo from "../assets/CitamLogo";

const SideBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    { text: "USER PROFILE", link: "/profile" },
    { text: "ALL CLASSES", link: "/" },
    { text: "NEWS|EVENTS", link: "/events" },
    { text: "PICKUPS|DROP", link: "/pickups" },
    { text: "SIGN OUT", link: "/signout" },
  ];

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu); // Toggle the state of the sidebar menu
  };

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      {isMobile ? (
        <div className="flex flex-auto flex-row justify-between bg-purple-300 w-full">
          <div onClick={handleToggleMenu} className="cursor-pointer">
            {toggleMenu ? (
              // -----RESPONSIVE MENU-----

              <div className="fixed top-0 left-0 w-fit h-fit bg-purple-300 z-10 duration-300">
                <AiOutlineClose
                  onClick={handleToggleMenu}
                  size={30}
                  className="absolute left-3 top-1 bottom-2 cursor-pointer text-white"
                />
                <nav className="mt-5">
                  <ul className="flex flex-col p-4 text-gray-800">
                    {menuItems.map(({ text, link }, index) => (
                      <li
                        key={index}
                        className={`text-sm flex cursor-pointer rounded-full ml-1 p-2 ${
                          location.pathname === link
                            ? "text-white bg-gray-600"
                            : "text-white"
                        }`}
                      >
                        <Link to={link}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            ) : (
              <AiOutlineMenu size={30} />
            )}
          </div>
          <CitamLogo width={"80"} height={"80"} className="ml-auto" />
        </div>
      ) : (
        // ----DEFAULT SIDEBAR-----

        <div className="fixed top-0 left-0 w-[350px] h-screen bg-purple-300 z-10 inline-block ">
          {/* ----CITAM LOGO---- */}
          <CitamLogo width={"200"} height={"200"} />
          {/* ----AVATAR---- */}
          <nav className="flex flex-col h-full mb-60">
            <div className="rounded-full w-[180px] h-[180px] bg-purple-100 p-1 mx-auto mb-6 flex justify-center items-center">
              <img
                className="w-[165px] h-[165px] rounded-full"
                src={akazaImage}
                alt=""
              />
            </div>
            {/* -----NAV LINKS----- */}
            <ul className="text-gray-800">
              {menuItems.map(({ text, link }, index) => (
                <li
                  key={index}
                  className={`text-xl lg:text-lg xl:text-xl flex cursor-pointer items-center w-[50%] rounded-full mx-auto p-4 my-2 hover:text-white hover:bg-purple-800 ${
                    location.pathname === link
                      ? "text-white bg-gray-600"
                      : "text-white"
                  }`}
                >
                  <Link to={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SideBar;
