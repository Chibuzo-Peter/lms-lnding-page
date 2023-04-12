import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";
import CodeCamp from "./CodeCamp";
import Footer from "../components/footer/Footer";
import logo from "../assets/Nupat LOGO blue 1.png";
import Rounded_img from "../assets/techhub.jpg";
import Sticker1 from "../assets/teacher.png";
import Sticker2 from "../assets/Group 332.png";
import Sticker3 from "../assets/cuate.png";
import Sticker4 from "../assets/rafiki.png";
import Sticker5 from "../assets/pana.png";
import logo1 from "../assets/Rectangle 88.svg";
import logo2 from "../assets/Rectangle2.svg";
import logo3 from "../assets/Rectangle3.svg";
import logo4 from "../assets/Rectangle4.svg";
import dropdown from "../assets/vector.svg";
import appzone from '../assets/Appzone.png'
import fundall from '../assets/fundall.png'
import vfd from '../assets/vfd.png'
import turog from '../assets/turog.png'

import { useEffect } from "react";
import {GiHamburgerMenu} from "react-icons/gi"

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section className="  py-4 px-5 home lg:px-20 lg:pb-36 section1">
        <div className=" flex  items-center justify-between header pt-4 px-3">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
          <div className="hidden lg:w-1/3 lg:pt-3 lg:justify-around lg:flex items-center">
            <div className=" pr-5  text-2xl flex items-center">
             <div> College</div>
              <div className="dropdown">
                <label tabIndex={0} className="btn m-1 bg-[#d0f7f80d] hover:bg-[#d0f7f80d] border-none ">
                  <img src={dropdown}/>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-1  bg-base-100 rounded-box text-[16px] w-56"
                >
                  <li>
                  <Link to="/college of engineering" > College of Engineering</Link>
                  </li>
                  <li>
                  <Link to="/college of engineering" > College of Engineering</Link>
                  </li>
                  <li>
                  <Link to="/college of engineering" > College of Engineering</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pr-5  text-2xl">
              <Link to="/">FAQ</Link>
            </div>
            <div>
              <Link to="/sign Up" className="signup text-center">
                SignUp
              </Link>
            </div>
          </div>

          <div className="lg:hidden"> 
              <GiHamburgerMenu size="40"/>
            </div>
        </div>
        <div className=" grid grid-cols-1 lg:flex lg:justify-between">
          <div>
            <h1 className="slide1 h1 text-center text-4xl py-8 lg:text-6xl  lg:py-8 font-bold lg:mt-7 lg:text-left">
              Learn a Tech Skill at your
               <span className=" text-green-700"> own Pace</span>
            </h1>
            <img
              className="slide3 round lg:hidden w-80 rounded-full mb-3 md:block mx-auto sm:hidden "
              src={Rounded_img}
              alt="Tech hub"
            />
            <p className=" slide2 text-2xl text-center lg:text-2xl lg:text-left lg:mr-5 ">
              You are about to begin a journey to discovering the innovative
              part of you in the Tech World
            </p>
            <p className="slide2 text-2xl text-center lg:text-2xl lg:text-left ">
              “ Technology gives the quitest student a Voice “ -Jerry
              Blumengarten
            </p>
            <p className="slide2 text-2xl text-center lg:text-left ">Find your Voice with Nupat </p>
            <div className="slide4 flex mt-14 items-center justify-center lg:flex lg:mt-14 lg:absolute">
              <div>
                <Link to="/" className="signup mr-5">
                  Sign Up
                </Link>
              </div>
              <div>
                <Link to="/" className="signin ">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          <div className=" techhub flex justify-center items-center mt-10">
            <img
              className="slide3 round hidden lg:block  rounded-full  w-[80%] lg:min-w-[400px] lg:ml-[20%] md:ml-[45%] mx-auto "
              src={Rounded_img}
              alt="Tech hub"
            />
          </div>
        </div>
      </section>
      <section className="Section_2 ">
        <div className=" text-center lg:text-center m-10">
          <h2 className=" text-4xl text-center mb-6 font-semibold lg:text-4xl lg:mb-10 lg:font-semibold">
            With Nupat Code Camp
          </h2>
          <p
            className=" flex justify-center text-center text-xl lg:w-8/12 lg:my-0 lg:mx-auto lg:text-xl lg:mx-98"          
          >
            Get a unique combination of remote learning, consistent live support
            and affordability to start your career today.
          </p>
        </div>
        <div className="codeCampComponenent lg:grid-cols-3 sm:grid grid-cols-1 md:grid-cols-2">
          
            <CodeCamp
              className=" border-2 border-red-800"
              sticker={Sticker1}
              title="1-1 Mentorship"
              content="You will be mentored by one of our industry experts during and after your bootcamp "
            />
            <CodeCamp
              sticker={Sticker2}
              title="Group Task"
              content="You will be mentored by one of our industry experts during and after your bootcamp "
            />
            <CodeCamp
              sticker={Sticker3}
              title="Task Based Methodology"
              content="You will be mentored by one of our industry experts during and after your bootcamp "
            />
          
        
            <CodeCamp
            
              sticker={Sticker4}
              title="Exposure to Live Projects"
              content="You will be mentored by one of our industry experts during and after your bootcamp "
            />
            <CodeCamp
              sticker={Sticker5}
              title="Masterclass"
              content="You will be mentored by one of our industry experts during and after your bootcamp "
            />
            <CodeCamp
              sticker={Sticker4}
              title="Internship"
              content="You will be mentored by one of our industry experts during and after your bootcamp "
            />
         
        </div>
      </section>
      <section className="section3 mx-auto w-10/12 mb-10">
        <div className=" text-center mb-10">
          <h1 className=" text-4xl font-semibold p-5">Our Programs</h1>
          <p className=" w-10/12 mx-auto text-xl " data-aos="fade-right">
            Nupat code camp, a home for acquiring new Tech skills , we have 3
            Major departments which includes The Engineering Department, Design
            Departments and the Data Departments.
          </p>
        </div>

        <div className=" flex1 grid grid-cols-1 lg:flex justify-between my-10 " data-aos="fade-up">
          <div className="singlebox program_border m-3">
            <div className=" bg-indigo-900 flex pl-5">
              <img src={logo1} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Engineering
              </h1>
            </div>
            <div className="w-11/12 mx-auto text-xl font-medium">
              <p className=" pt-5">
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <Link to="/college of engineering" className=" w-40 box-content ">
                
                <p className=" w-40 my-8 p-3 border-black border border-solid rounded-md text-center">
                  
                  learn more
                </p>
              </Link>
            </div>
          </div>

          <div className="singlebox program_border m-3">
            <div className=" bg-green-700 flex pl-5">
              <img src={logo2} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Data
              </h1>
            </div>
            <div className="w-11/12 mx-auto text-xl font-medium">
              <p  className=" pt-5">
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <Link to="/college of data">
                
                <p className=" w-40 p-3 my-8 border-black border border-solid rounded-md text-center">               
                  learn more
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className=" flex2 grid grid-cols-1 lg:flex  justify-between my-10" data-aos="fade-up">
          <div className="singlebox program_border m-3">
            <div className=" bg-sky-400 flex pl-5">
              <img src={logo3} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Design
              </h1>
            </div>
            <div className=" w-11/12 mx-auto text-xl font-medium">
              <p  className=" pt-5">
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <Link to="/college of design">
                <p className=" w-40 p-3 my-8 border-black border border-solid rounded-md text-center">
                  learn more
                </p>
              </Link>
            </div>
          </div>
          <div className="singlebox program_border m-3">
            <div className=" bg-orange-400 flex pl-5 ">
              <img src={logo4} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Management
              </h1>
            </div>
            <div className=" w-11/12 mx-auto text-xl font-medium">
              <p className=" pt-5"> 
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <Link to="/college of management" className=" bg-black ">
                <p className="w-40 p-3 my-8 border-black border border-solid rounded-md text-center">
                  learn more
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="  border-sky-400 border-2 border-solid p-5 border-x-neutral-50 mb-10">
          <div className="logospad flex item-center justify-between h-14 w-3/5 overflow-hidden mx-auto ">
          <img src={turog}   draggable='false' className="moving w-[200px] min-w-[200px] object-contain"/>
          <img src={vfd}     draggable='false' className="moving w-[200px] min-w-[200px] object-contain" />
          <img src={appzone} draggable='false' className="moving w-[200px] min-w-[200px] object-contain"/>
          <img src={fundall} draggable='false' className="moving w-[200px] min-w-[200px] object-contain" />
          <img src={turog}   draggable='false' className="moving w-[200px] min-w-[200px] object-contain"/>
          <img src={vfd}     draggable='false' className="moving w-[200px] min-w-[200px] object-contain" />
          <img src={appzone} draggable='false' className="moving w-[200px] min-w-[200px] object-contain"/>
          <img src={fundall} draggable='false' className="moving w-[200px] min-w-[200px] object-contain" />
        </div>
        </div>
      </section>
      <Footer /> 
    </>
  );
};

export default Home;
