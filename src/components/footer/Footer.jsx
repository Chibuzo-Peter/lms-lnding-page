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
      <div className="foot bg-primary w-4/5 p-5 flex justify-between mx-auto my-5 rounded-xl text-white">
        <div>
          <h2 className=" mb-2 text-3xl ">Subscribe</h2>
          <h3 className=" w-80 mr-2">
            Join our community and get the latest information about our products
            and services.
          </h3>
        </div>
        <div className="inputs w-6/12 flex justify-between my-auto border-white border border-solid p-5 rounded-xl">
          <div>
            <input
              className="inp-txt  max-h-20 w-4/5 "
              type="text"
              placeholder="Your email address"
            />
          </div>
          <div>
            <input type="button" value="Subscribe" className="sub-btn " />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex h-60 justify-between" style={{ width: "70%" }}>
          <div className=" h-55 mt-7  flex justify-center">
            <img
              style={{ width: "5em", height: "7em" }}
              src={Logo}
              alt="Logo"
            />
          </div>
          <div className="text-black">
            <div className="text-primary font-bold">
              <p>Quick Link</p>
            </div>
                <div className="mt-5">

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
      <div className="   h-14 w-full bg-primary"></div>
    </div>
  );
};

export default Footer;
