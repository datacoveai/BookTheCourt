import React from "react";
import ReactPlayer from "react-player";
import video from "../assets/home-video.webm";
import Navbar from "../components/Navbar";
import court from "../assets/book_the_court.png";
import drop from "../assets/drop-down.png";
import lockin from "../assets/lockin.png";
import about from "../assets/About-us.png";
import football from "../assets/football.png";
import basketball from "../assets/basketball.png";
import cricket from "../assets/cricket.png";
import table from "../assets/table_tennis.png";
import plaza from "../assets/plaza.png";
import asset from "../assets/per_asset.png";
import cricket_bg from "../assets/cricket-bg.png";
import quick from "../assets/quick.png";
import top_rated from "../assets/top_rated.png";
import weather from "../assets/weather.png";
import b_complex from "../assets/basket_complex.png";
import b_cricket from "../assets/cricket_abc.png";
import b_football from "../assets/b_football.png";
import heart from "../assets/heart.png";
import share from "../assets/share.png";
import go from "../assets/go.png";
import jacob from "../assets/jacob.png";
import ryan from "../assets/ryan.png";
import right from "../assets/ar-right.png";
import left from "../assets/ar-left.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="w-[100vw] h-full">
        <ReactPlayer
          url={video} // The video URL
          playing={true} // Automatically play the video
          loop={true} // Loop the video
          muted={true} // Mute the video
          width="100%" // Full width
          height="100vh" // Full height
          className="video-player"
        />
        {/* Transparent black overlay */}
        <div className="overlay">
          <Navbar />
          {/* Hero Content */}
          <div className="flex flex-col justify-center align-middle items-center mt-18 mb-20">
            <div className="mb-8">
              <img src={court} alt="" />
            </div>
            <div className="text-white font-beVietnam">
              <h3 className="text-[25px] font-[600] font-beVietnam text-center">
                {" "}
                World’s first AI based facility management <br />
                software
              </h3>
            </div>

            <div className="flex bg-white w-[55%] p-4 rounded-[15px] justify-center mt-14">
              <div className="flex justify-between w-[80%] text-[20px] font-[500]">
                <div className="flex items-center gap-4">
                  Categories
                  <div className=" flex items-center">
                    <img src={drop} alt="" className="mt-1" />
                  </div>
                </div>
                <div className="hidden sm:flex justify-center items-center">
                  <div className="border-[.1px] h-[80%] border-[#34343499] border-opacity-60"></div>
                </div>
                <div className="flex items-center gap-4">
                  Choose Sports{" "}
                  <div className=" flex items-center">
                    <img src={drop} alt="" className="mt-1" />
                  </div>{" "}
                </div>
                <div className="hidden sm:flex justify-center items-center">
                  <div className="border-[.1px] h-[80%] border-[#34343499] border-opacity-60"></div>
                </div>
                <div className="flex items-center gap-4">
                  Enter Location{" "}
                  <div className=" flex items-center">
                    <img src={drop} alt="" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="text-[19px] text-[#A2E000] font-[900] font-beVietnam flex justify-center items-center border-[1px] border-[#FFFFFF99] border-opacity-60 rounded-[15px] p-2 gap-4 mt-20">
                <img src={lockin} alt="" className="w-7 h-8" />
                <div className="mb-1 pr-4">Lock It In!</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About us */}
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "80vh", // Adjust this as needed
          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center items-center align-middle ">
          <div className=" flex justify-center items-center flex-col mt-8">
            <h2 className="uppercase text-white text-[42px] font-[700]">
              Smarter <span className="text-[#A2DF00]">Scheduling</span> ,
              Maximum <span className="text-[#A2DF00]">Efficiency</span>
            </h2>
            <p className="text-[22px] font-[500] text-center font-beVietnam text-white mt-8 mb-8">
              AI-powered dynamic scheduling that adapts to your facility’s needs
              in <br /> real-time and Effortlessly manage court bookings.
            </p>
          </div>
          <div className="h-[96] flex gap-6 pl-8 pr-8 mt-14">
            {/* Football */}
            <div className="flex flex-col gap-4 justify-between">
              <div
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
                className="h-32 rounded-[10px] flex text-center justify-center items-center"
              >
                <h2 className="text-[42px] font-[700] p-4">FOOTBALL</h2>
              </div>
              <div>
                <img src={football} alt="" />
              </div>
            </div>
            {/* BasketBall */}
            <div className="flex flex-col gap-4 justify-between">
              <div>
                <img src={basketball} alt="" />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
                className="h-44 rounded-[10px] flex text-center justify-center items-center"
              >
                {" "}
                <h2 className="text-[42px] font-[700] p-4">
                  BASKET <br />
                  BALL
                </h2>
              </div>
            </div>
            {/* Cricket */}
            <div className="flex flex-col gap-4">
              <div
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
                className="h-32 rounded-[10px] flex text-center justify-center items-center"
              >
                {" "}
                <h2 className="text-[42px] font-[700] p-4">CRICKET</h2>
              </div>
              <div>
                <img src={cricket} alt="" />
              </div>
            </div>
            {/* Table Tennis */}
            <div className="flex flex-col gap-4">
              <div className="h-auto">
                <img src={table} alt="" />
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(151.42deg, #A2DF00 15.43%, #EEFFC0 115.27%)",
                }}
                className="h-32 rounded-[10px] flex text-center justify-center items-center"
              >
                {" "}
                <h2 className="text-[42px] font-[700] p-4">
                  TABLE <br /> TENNNIS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Member Experience */}
      <div className="h-[70vh] bg-black flex justify-center align-middle items-center ">
        <div className=" pl-[14rem] pr-[14rem] flex gap-8">
          <div className="p-6 w-1/2">
            <img src={plaza} alt="" className="w-full" />
          </div>
          <div className="p-4 w-1/2">
            <div className="flex  flex-col justify-between">
              <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px]">
                <span className="text-[#A2DF00]">Personalized</span> Member{" "}
                <br /> Experiences
              </h2>
              <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[500] w-[100%] mb-[15px]">
                AI will Engage and retain members with insights, activity
                tracking, and tailored recommendations by <br /> advanced
                analytics.
              </p>
              <img src={asset} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* DATA DRIVEN DECISIONS AT YOUR FINGERTIPS */}
      <div
        style={{
          backgroundImage: `url(${cricket_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90vh", // Adjust this as needed
          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center items-center align-middle">
          <div className="text-center mt-[5rem] ">
            <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam">
              <span className="text-[#A2DF00]">Data-Driven</span> Decisions at
              Your Fingertips
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
              Unleash the power of dashboards—get actionable analytics
            </p>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mb-[15px]">
              for members and clubs, from performance metrics to revenue
              insights.
            </p>
          </div>
          <div className="flex gap-4 w-[80%] justify-between align-middle items-center mt-[5rem]">
            <div>
              <img src={quick} alt="" />
            </div>
            <div>
              <img src={top_rated} alt="" />
            </div>
            <div>
              <img src={weather} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* SEAMLESS EVENT MANAGEMENT */}
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "110vh", // Adjust this as needed
          width: "100%",
        }}
      >
        <div>
          <div className="text-center pt-[3rem]">
            <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam mt=[5rem]">
              seamless
              <span className="text-[#A2DF00]">event</span> management
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
              Plan tournaments like a pro—AI-driven scheduling, team formation,
              and
            </p>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mb-[15px]">
              live performance analytics for a next-level experience.
            </p>
          </div>
          <div className="parent-container flex flex-wrap gap-12 pl-[8rem] pr-[8rem] mt-[4rem]">
            {/* Top Row */}
            <div className="flex w-full gap-12 justify-center">
              {/* Top Left Div */}
              <div className="flex-2 bg-inherit">
                <div className="w-full">
                  <img src={b_complex} alt="" className="w-full mb-[15px]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] font-beVietnam text-white">
                    BasketBall Sports Complex
                  </h3>
                  <p className="text-[#98989A] font-[400]">Ontario</p>
                </div>
                <div className="flex flex-row mt-[1rem]">
                  <div className="flex w-1/2 gap-6">
                    <div className="flex bg-[#262626] pt-1 pl-3 pr-3 pb-1 rounded-[14px] gap-2 justify-center items-center align-middle border-[1px] border-opacity-10 border-white">
                      <img src={heart} alt="" />
                      <p className="text-[#98989A]">2.2k</p>
                    </div>
                    <div className="flex justify-center items-center align-middle gap-2 pt-1 pl-3 pr-3 pb-1 rounded-[14px] bg-[#262626] border-[1px] border-opacity-10 border-white">
                      <img src={share} alt="" />
                      <p className="text-[#98989A]">60</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 bg-[#262626] pt-2 pl-3 pr-3 pb-2 rounded-[10px] justify-center items-center align-middle gap-2 border-[1px] border-opacity-10 border-white">
                    <button>Book Now</button>{" "}
                    <img src={go} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* Top Middle Div */}{" "}
              <div className="flex-2 bg-inherit">
                <div className="w-full">
                  <img src={b_cricket} alt="" className="w-full mb-[15px]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] font-beVietnam text-white">
                    BasketBall Sports Complex
                  </h3>
                  <p className="text-[#98989A] font-[400]">Ontario</p>
                </div>
                <div className="flex flex-row mt-[1rem]">
                  <div className="flex w-1/2 gap-6">
                    <div className="flex bg-[#262626] pt-1 pl-3 pr-3 pb-1 rounded-[14px] gap-2 justify-center items-center align-middle border-[1px] border-opacity-10 border-white">
                      <img src={heart} alt="" />
                      <p className="text-[#98989A]">2.2k</p>
                    </div>
                    <div className="flex justify-center items-center align-middle gap-2 pt-1 pl-3 pr-3 pb-1 rounded-[14px] bg-[#262626] border-[1px] border-opacity-10 border-white">
                      <img src={share} alt="" />
                      <p className="text-[#98989A]">60</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 bg-[#262626] pt-2 pl-3 pr-3 pb-2 rounded-[10px] justify-center items-center align-middle gap-2 border-[1px] border-opacity-10 border-white">
                    <button>Book Now</button>{" "}
                    <img src={go} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* Top Right Div */}{" "}
              <div className="flex-2 bg-inherit">
                <div className="w-full">
                  <img src={b_football} alt="" className="w-full mb-[15px]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] font-beVietnam text-white">
                    BasketBall Sports Complex
                  </h3>
                  <p className="text-[#98989A] font-[400]">Ontario</p>
                </div>
                <div className="flex flex-row mt-[1rem]">
                  <div className="flex w-1/2 gap-6">
                    <div className="flex bg-[#262626] pt-1 pl-3 pr-3 pb-1 rounded-[14px] gap-2 justify-center items-center align-middle border-[1px] border-opacity-10 border-white">
                      <img src={heart} alt="" />
                      <p className="text-[#98989A]">2.2k</p>
                    </div>
                    <div className="flex justify-center items-center align-middle gap-2 pt-1 pl-3 pr-3 pb-1 rounded-[14px] bg-[#262626] border-[1px] border-opacity-10 border-white">
                      <img src={share} alt="" />
                      <p className="text-[#98989A]">60</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 bg-[#262626] pt-2 pl-3 pr-3 pb-2 rounded-[10px] justify-center items-center align-middle gap-2 border-[1px] border-opacity-10 border-white">
                    <button>Book Now</button>{" "}
                    <img src={go} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex w-full gap-12 justify-center">
              {/* Top Left Div */}
              <div className="flex-2 bg-inherit">
                <div className="w-full">
                  <img src={b_complex} alt="" className="w-full mb-[15px]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] font-beVietnam text-white">
                    BasketBall Sports Complex
                  </h3>
                  <p className="text-[#98989A] font-[400]">Ontario</p>
                </div>
                <div className="flex flex-row mt-[1rem]">
                  <div className="flex w-1/2 gap-6">
                    <div className="flex bg-[#262626] pt-1 pl-3 pr-3 pb-1 rounded-[14px] gap-2 justify-center items-center align-middle border-[1px] border-opacity-10 border-white">
                      <img src={heart} alt="" />
                      <p className="text-[#98989A]">2.2k</p>
                    </div>
                    <div className="flex justify-center items-center align-middle gap-2 pt-1 pl-3 pr-3 pb-1 rounded-[14px] bg-[#262626] border-[1px] border-opacity-10 border-white">
                      <img src={share} alt="" />
                      <p className="text-[#98989A]">60</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 bg-[#262626] pt-2 pl-3 pr-3 pb-2 rounded-[10px] justify-center items-center align-middle gap-2 border-[1px] border-opacity-10 border-white">
                    <button>Book Now</button>{" "}
                    <img src={go} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* Top Middle Div */}{" "}
              <div className="flex-2 bg-inherit">
                <div className="w-full">
                  <img src={b_cricket} alt="" className="w-full mb-[15px]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] font-beVietnam text-white">
                    BasketBall Sports Complex
                  </h3>
                  <p className="text-[#98989A] font-[400]">Ontario</p>
                </div>
                <div className="flex flex-row mt-[1rem]">
                  <div className="flex w-1/2 gap-6">
                    <div className="flex bg-[#262626] pt-1 pl-3 pr-3 pb-1 rounded-[14px] gap-2 justify-center items-center align-middle border-[1px] border-opacity-10 border-white">
                      <img src={heart} alt="" />
                      <p className="text-[#98989A]">2.2k</p>
                    </div>
                    <div className="flex justify-center items-center align-middle gap-2 pt-1 pl-3 pr-3 pb-1 rounded-[14px] bg-[#262626] border-[1px] border-opacity-10 border-white">
                      <img src={share} alt="" />
                      <p className="text-[#98989A]">60</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 bg-[#262626] pt-2 pl-3 pr-3 pb-2 rounded-[10px] justify-center items-center align-middle gap-2 border-[1px] border-opacity-10 border-white">
                    <button>Book Now</button>{" "}
                    <img src={go} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
              {/* Top Right Div */}{" "}
              <div className="flex-2 bg-inherit">
                <div className="w-full">
                  <img src={b_football} alt="" className="w-full mb-[15px]" />
                </div>
                <div>
                  <h3 className="text-[16px] font-[600] font-beVietnam text-white">
                    BasketBall Sports Complex
                  </h3>
                  <p className="text-[#98989A] font-[400]">Ontario</p>
                </div>
                <div className="flex flex-row mt-[1rem]">
                  <div className="flex w-1/2 gap-6">
                    <div className="flex bg-[#262626] pt-1 pl-3 pr-3 pb-1 rounded-[14px] gap-2 justify-center items-center align-middle border-[1px] border-opacity-10 border-white">
                      <img src={heart} alt="" />
                      <p className="text-[#98989A]">2.2k</p>
                    </div>
                    <div className="flex justify-center items-center align-middle gap-2 pt-1 pl-3 pr-3 pb-1 rounded-[14px] bg-[#262626] border-[1px] border-opacity-10 border-white">
                      <img src={share} alt="" />
                      <p className="text-[#98989A]">60</p>
                    </div>
                  </div>
                  <div className="flex w-1/2 bg-[#262626] pt-2 pl-3 pr-3 pb-2 rounded-[10px] justify-center items-center align-middle gap-2 border-[1px] border-opacity-10 border-white">
                    <button>Book Now</button>{" "}
                    <img src={go} alt="" className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center align-middle mt-[4rem] mb-[2rem]  ">
            <div className="bg-black flex pt-1 pb-1  pl-6 pr-6 rounded-[2.5rem] gap-4 border-[1px] border-white border-opacity-30">
              <img src={lockin} alt="" />
              <button className="text-[#A2E000] font-[900] text-[19px] text-center">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div className="h-[70vh] bg-black">
        <div className="text-center pt-[3rem]">
          <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam mt=[5rem]">
            our <span className="text-[#A2DF00]">Testimonials</span>
          </h2>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
            Here are some of the testimonials of our users.
          </p>
        </div>
        <div className="pl-[6rem] pr-[6rem] mt-[2rem] flex flex-col justify-center items-center w-[100vw] ">
          <div className="flex gap-8 w-full max-w-7xl justify-between">
            {/* First Box */}
            <div className="w-1/2 flex gap-1 h-[18rem]">
              <div className="w-[30%] p-6">
                <img src={jacob} alt="Jacob" />
              </div>
              <div className="w-[70%] text-white p-6">
                <h4 className="text-[22px] mb-[15px]">Jacob</h4>
                <p className="w-full text-[12px] font-[400] text-[#9C9C9C] mb-[15px]">
                  Ontario, Canada
                </p>
                <p className="text-[16px] font-[300] mb-[15px]">
                  Lorem ipsum dolor sit amet consectetur. Bibendum quis
                  fringilla odio maecenas magna eu ultrices aliquam egestas.
                </p>
              </div>
            </div>

            {/* Second Box */}
            <div className="w-1/2 flex gap-1 h-[18rem]">
              <div className="w-[30%] p-6">
                <img src={ryan} alt="Jacob" />
              </div>
              <div className="w-[70%] text-white p-6">
                <h4 className="text-[22px] mb-[15px]">Ryan</h4>
                <p className="w-full text-[12px] font-[400] text-[#9C9C9C] mb-[15px]">
                  Ontario, Canada
                </p>
                <p className="text-[16px] font-[300] mb-[15px]">
                  Lorem ipsum dolor sit amet consectetur. Bibendum quis
                  fringilla odio maecenas magna eu ultrices aliquam egestas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex  gap-4">
            <div className="bg-inherit border border-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md text-[#A2DF00]">
              <img src={left} alt="" />
            </div>
            <div className="bg-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 pl-6 pr-6 rounded-md">
              <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
