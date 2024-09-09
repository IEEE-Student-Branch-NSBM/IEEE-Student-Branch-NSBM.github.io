import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsYoutube,
} from "react-icons/bs";
import { MdEmail, MdOutlineLocationOn } from "react-icons/md";
function Footer() {
  return (
    <footer className="w-full bg-primaryDark text-white text-center mt-auto font-poppins">
      <div className="w-full lg:flex">
        <div className="w-full lg:w-1/4 flex justify-center">
          <div className="bg-primaryLight w-[250px] py-7 rounded-b-3xl mb-8 flex flex-col gap-4">
            <Image
              src={require("../assets/ieeeFooterLogo.png")}
              width={250}
              height={123}
              alt="logo"
            />
            <div className="flex p-2 justify-center text-[20px] gap-2">
              <Link href="#" className="footer-social">
                <BsFacebook />
              </Link>
              <Link href="#" className="footer-social">
                <BsLinkedin />
              </Link>
              <Link href="#" className="footer-social">
                <BsTwitterX />
              </Link>
              <Link href="#" className="footer-social">
                <BsInstagram />
              </Link>
              <Link href="#" className="footer-social">
                <BsYoutube />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/6 footer-col">
          <div className="footer-col-content">
            <h3 className="footer-col-title">Get Started</h3>
            <div className="footer-col-navs-container">
              <Link href="#">HOME</Link>
              <Link href="#">EVENTS</Link>
              <Link href="#">BLOG</Link>
              <Link href="#">EXECUTIVE COMMITTEE</Link>
              <Link href="#">MEMBERSHIP</Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 footer-col border-l border-r">
          <div className="footer-col-content">
            <h3 className="footer-col-title">Student Branch Chapters</h3>
            <div className="footer-col-navs-container">
              <Link href="#">Women in Engineering</Link>
              <Link href="#">Computer Society</Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 footer-col">
          <div className="footer-col-content">
            <h3 className="footer-col-title">Contact Us</h3>
            <div className="footer-col-navs-container">
              <Link
                href="mailto:nsbmieee@gmail.com"
                className="flex gap-6 items-center"
              >
                <MdEmail className="text-2xl" />
                <span>nsbmieee@gmail.com</span>
              </Link>
              <Link href="#" className="flex gap-6 items-center">
                <MdOutlineLocationOn className="text-2xl" />
                <address className=" ">
                  Pitipana
                  <br />
                  Thalagala Rd,
                  <br />
                  Homagama
                </address>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:flex justify-end">
        <div className="w-full lg:w-1/3 max-md:mb-2">
          © Copyright 2024 | All rights reserved
        </div>
        <div className="w-full lg:w-1/3 flex justify-end">
          <Link
            href="https://www.facebook.com/ieeecsnsbm"
            className="w-full md:w-[70%] bg-primaryLight md:rounded-tl-3xl p-4 flex justify-center items-center font-medium text-sm leading-snug"
          >
            Developed by IEEE Computer Society — NSBM
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
