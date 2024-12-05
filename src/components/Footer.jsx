import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";

const socialLinks = [
  { href: "https://github.com/Rupak-25", icon: <BsGithub />},
  { href: "https://x.com/rupak_XXIV", icon: <BsTwitterX /> },
  { href: "https://www.instagram.com/rupak7798", icon: <LuInstagram /> },
  { href: "https://www.facebook.com/rupak.chakraborty.52643821/", icon: <FaFacebook /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          © Web Gaming 2025 <br className="lg:hidden"/> @ <span className=" cursor-pointer hover:text-white duration-500 transition-all"><a href="https://www.linkedin.com/in/rupakch16/">Rupak Chakraborty</a></span>. All rights reserved. Privacy Policy
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors text-xl duration-500 ease-in-out hover:text-white"
            >
              {link.icon} 
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-base font-normal md:text-right"
        >
          "Enjoy a splendid day ahead!" 🌟
        </a>
      </div>
    </footer>
  );
};

export default Footer;
