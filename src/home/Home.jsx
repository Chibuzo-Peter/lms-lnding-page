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
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <section className=" lg:home px-24 py-4 pb-36 section1">
        <div className=" flex justify-between header pt-4">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className=" w-1/3 pt-3 justify-around flex">
            <div className=" pr-5  text-2xl flex">
              College
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
        </div>
        <div className=" flex justify-between">
          <div>
            <h1 className="slide1 h1 text-6xl font-bold mt-7 mr-1">
              Learn a Tech Skill at your
              <span className=" text-green-700"> own Pace</span>
            </h1>
            <p className=" slide2 text-2xl mr-5 ">
              You are about to begin a journey to discovering the innovative
              part of you in the Tech World
            </p>
            <p className="slide2 text-2xl ">
              “ Technology gives the quitest student a Voice “ -Jerry
              Blumengarten
            </p>
            <p className="slide2 text-2xl ">Find your Voice with Nupat </p>
            <div className="slide4 flex mt-14 absolute">
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
          <div className=" techhub mt-10">
            <img
              className="slide3 rounded-full "
              src={Rounded_img}
              alt="Tech hub"
            />
          </div>
        </div>
      </section>
      <section className="Section_2 m-28">
        <div className=" text-center ">
          <h2 className=" text-4xl mb-10 font-semibold">
            With Nupat Code Camp
          </h2>
          <p
            className=" w-8/12 my-0 mx-auto text-xl mx-98"
            data-aos="fade-right"
          >
            Get a unique combination of remote learning, consistent live support
            and affordability to start your career today.
          </p>
        </div>
        <div className="codeCampComponenent overflow-x-scroll overflow-y-hidden">
          <div className=" flex justify-between">
            <CodeCamp
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
          </div>
          <div className=" flex justify-between">
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
        </div>
      </section>
      <section className="section3 mx-auto w-10/12 mb-10">
        <div className=" text-center mb-10">
          <h1 className=" text-4xl font-semibold">Our Programs</h1>
          <p className=" w-10/12 mx-auto text-xl " data-aos="fade-right">
            Nupat code camp, a home for acquiring new Tech skills , we have 3
            Major departments which includes The Engineering Department, Design
            Departments and the Data Departments.
          </p>
        </div>

        <div className=" flex1 flex justify-between my-10 " data-aos="fade-up">
          <div className="singlebox program_border m-3">
            <div className=" bg-indigo-900 flex pl-5">
              <img src={logo1} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Engineering
              </h1>
            </div>
            <div className="w-11/12 mx-auto text-xl font-medium">
              <p>
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
              <p>
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

        <div className=" flex2 flex justify-between my-10" data-aos="fade-up">
          <div className="singlebox program_border m-3">
            <div className=" bg-sky-400 flex pl-5">
              <img src={logo3} alt="icon" />
              <h1 className=" font-semibold text-3xl p-5 text-white">
                College of Design
              </h1>
            </div>
            <div className=" w-11/12 mx-auto text-xl font-medium">
              <p>
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
              <p>
                Gain the knowledge, skills, tools and experience you need to
                develop computer software. Our tracks include : Frontend
                software development, backend software development, Fullstack
                software development, blockchain development, mobile software
                development….
              </p>
              <Link to="/college of management" className="  bg-black ">
                <p className="w-40 p-3 my-8 border-black border border-solid rounded-md text-center">
                  learn more
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className=" border-sky-400 border-2 border-solid p-5 border-x-neutral-50 mb-10"></div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
