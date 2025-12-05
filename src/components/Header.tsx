"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Employers", link: "/employers" },
  { name: "Candidates", link: "/candidates" },
  { name: "Recruiters", link: "/recruiters" },
  { name: "Features", link: "/features" },
  { name: "Resources", link: "/resources" },
  { name: "Pricing", link: "/pricing" },
  { name: "Contact us", link: "/contact-us" },
];

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
    const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
        // 👇 user scrolling down
        setShow(false); 
      } else {
        // 👇 user scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <>
    <div className=" h-[60px] lg:h-[100px] max-h-[100px] bg-[url('/background/mobile-bg-navbar.svg')]"></div>
    <div className={` fixed top-0 left-0 z-50 flex w-full bg-[url('/background/mobile-bg-navbar.svg')] lg:bg-none- bg-cover bg-no-repeat 
    transition-transform duration-300 h-[60px] lg:h-[100px] max-h-[100px] ${
        show ? "translate-y-0 bg-white" : "-translate-y-full"
      }`}>
      
      <nav className="flex w-full items-center justify-between lg:text-[14px] xl:text-[18px] 2xl:text-[24px] px-3 lg:px-4 xl:px-6 2xl:px-8 py-6 md:py-4  bg-[#FFFFFF33] md:bg-[#FFFFFF66] border-b border-[#0668E11A] md:border-[#E5E5E5] relative z-[9999]">
        <div className="flex lg:w-1/5 items-center   ">
<Link href={"https://connectec.app/"}>
          <Image
            src="/Connect_EC_Logo.svg"
            alt="Logo"
            width={280}
            height={100}
            className="object-contain cursor-pointer w-[65%] md:w-full h-auto xl:min-w-[200px] 2xl:min-w-[280px]"
          /></Link> 
        </div>
        {!pathname.includes("login") &&
          !pathname.includes("register") &&
          !pathname.includes("reset-password") &&
          !pathname.includes("forgot-password") &&
          !pathname.includes("account-verify") && (
            <>
              <ul className="hidden lg:flex items-center justify-center lg:gap-[15px] xl:gap-[2.5%]  text-[#1B1C17] w-4/5">
                {navItems.map((item) => {
                  const isActive =
                    item.name === "Home"
                      ? pathname === "/" || pathname.startsWith("/home")
                      : pathname.startsWith(item.link);

                  return (
                    <li
                      key={item.name}
                      className={`${
                        isActive
                          ? "text-[#0668E1]  font-semibold"
                          : "font-medium"
                      }  cursor-pointer flex flex-col justify-center items-center`}
                      onClick={() => router.push(item.link)}
                    >
                      {item.name}
                      {isActive ? (
                        <div className="mt-1 lg:h-[4px]  2xl:h-[6px] lg:w-[40px] xl:w-[50px]- bg-[#0668E1] rounded-[4px]" />
                      ) : (
                        <div className="mt-1 lg:h-[4px]  2xl:h-[6px] w-[85%] " />
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className=" flex w-[50%] md:w-auto justify-end items-center gap-3 lg:gap-3 xl:gap-4">
               <Link
               target="_blank" 
                  href="https://employer.connectec.app/login"
                  className="hidden lg:block lg:py-2 xl:py-3 lg:px-6 xl:px-10 cursor-pointer font-semibold text-center text-[#0668E1] border border-[#0668E1]  rounded-[16px]"
                >
                  Login
                </Link>
                 <Link
                  target="_blank"
                  href="https://employer.connectec.app/register"
                  className="hidden lg:block lg:py-2 xl:py-3 lg:px-6  xl:px-8 cursor-pointer font-semibold bg-[#0668E1] hover:bg-[#0560D0] text-white  rounded-[16px] border"
                >
                  Register
                </Link>
                <Link
                  target="_blank"
                  href="https://employer.connectec.app/register"
                  className="lg:hidden  py-1 md:py-2 px-3 md:px-5  text-[14px] md:text-[15px]  cursor-pointer font-medium bg-[#0668E1] hover:bg-[#0560D0] text-white  rounded-[6px] md:rounded-[8px]"
                >
                  Sign up
                </Link>
                <MobileMenu />
              </div>
            </>
          )}
      </nav>
    </div>
    </>
  );
};
