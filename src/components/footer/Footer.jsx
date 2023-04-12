import React from "react";
import Logo from "../../assets/Nupat LOGO blue 1.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.jpg";
import Instagram from "../../assets/instagram.png";
import Twitter from "../../assets/twitter.png";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="foot bg-primary p-5 block  lg:flex justify-between mx-auto my-5 rounded-xl text-white w-[95%] md:w-[90%] ">
        <div>
          <h2 className=" mb-2 text-3xl ">Subscribe</h2>
          <h3 className="  mr-2 mb-3">
            Join our community and get the latest information about our products
            and services.
          </h3>
        </div>
        <div className="inputs flex justify-between mx-auto border-white border border-solid items-center lg:p-5 p-3 rounded-xl lg:w-[50%]">
          <div>
            <input
              className=" bg-inherit border-0  lg:pr-32 md:pr-3 p-3 "
              type="email"
              placeholder="Your email address"
            />
          </div>
          <div>
            <input
              type="button"
              value="Subscribe"
              className="text-black bg-white p-2 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex lg:justify-between ml-[6%]">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-36 md:gap-y-5  lg:flex lg:justify-between gap-2">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          <div className="text-black" >

            <div className="text-primary font-bold">
              Quick Link
            </div>

            <div>
              <Link to="/">
                <h2 className="font-medium">FAQ</h2>
              </Link>
              <Link to="/">
                <h2 className="font-medium">NEWS</h2>
              </Link>
            </div>
          </div>

          <div className="text-black">
            <div className="text-primary font-bold">
              <p>Colleges</p>
            </div>
            <Link to="/">
              <h2 className="font-medium">Data</h2>
            </Link>
            <Link to="/">
              <h2 className="font-medium">Design</h2>
            </Link>
            <Link to="/">
              <h2 className="font-medium">Engineering</h2>
            </Link>
            <Link to="/">
              <h2 className="font-medium">Management</h2>
            </Link>
          </div>

          <div className=" text-black ">
            <div className="text-primary font-bold">
              <p>About</p>
            </div>
            <Link to="/">
              <h2 className="font-medium">About US</h2>
            </Link>
            <Link to="/">
              <h2 className="font-medium">Career</h2>
            </Link>
            <Link to="/">
              <h2 className="font-medium">Contact us</h2>
            </Link>
          </div>

          <div>
            <div className="text-black font-bold">
              <p>48, Community Road,Akoka Lagos</p>
            </div>
            <div className="flex justify-between p-3 ">
              <img src={Facebook} alt="Facebook" />
              <img src={Linkedin} alt="Linkedin" />
              <img src={Instagram} alt="Instagram" />
              <img src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="   h-14 w-full bg-primary mt-5"></div>
    </div>
  );
};

export default Footer;
