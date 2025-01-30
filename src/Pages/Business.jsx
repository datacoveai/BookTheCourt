import React, { useState } from "react";
import Navbar from "../components/Navbar";
import hero_1 from "../assets/business/hero-1.png";
import hero_2 from "../assets/business/hero-2.png";
import about from "../assets/About-us.png";
import lockin from "../assets/lockin.png";
import field from "../assets/business/court.png";
import trophy from "../assets/business/trophy.png";
import icon from "../assets/business/icon.png";
import tennis from "../assets/business/tennis.png";
import explore from "../assets/business/explore.png";
import tick from "../assets/business/tick.png";
import court from "../assets/book_the_court.png";
import image1 from "../assets/business/img-1.png";
import cricket_bg from "../assets/cricket-bg.png";
import image2 from "../assets/business/img-2.png";
import plaza from "../assets/plaza.png";
import asset from "../assets/per_asset.png";
import open from "../assets/business/open.png";
import safer from "../assets/business/Safer.png";
import cloud from "../assets/business/cloud.png";
import faster from "../assets/business/Faster.png";
import Footer from "../components/Footer";
import location from "../assets/business/location.png";
import mobile from "../assets/business/mobile.png";
import mail from "../assets/business/mail.png";
import contact_name from "../assets/business/contact_name.png";
import contact_mail from "../assets/business/contact_mail.png";
import contact_messege from "../assets/business/contact_messege.png";
import contact_pen from "../assets/business/contact_pen.png";
import contact_phone from "../assets/business/contact_phone.png";

const Business = () => {
  const [openSections, setOpenSections] = useState([false, false]);

  const toggleSection = (index) => {
    setOpenSections((prevSections) => {
      const newSections = [...prevSections];
      newSections[index] = !newSections[index];
      return newSections;
    });
  };
  return (
    <div>
      <div className="bg-black">
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* hero */}
        <div className="flex w-full h-auto gap-5">
          {/* Left Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src={hero_2} alt="" className="w-full h-auto object-cover" />
          </div>

          {/* Middle Colored Section (Auto-adjusting width) */}
          <div className="flex-1 bg-[#A2DF00] ">
            <div className="flex flex-col justify-center items-center h-full ">
              {/* Image Section */}
              <div className="flex justify-center mb-[4rem]">
                <img src={court} alt="" className="w-[60%]" />
              </div>

              {/* Heading */}
              <div className="mb-[4rem]">
                <h2 className="text-[58px] font-[700] text-center">
                  CUSTOMISED <br /> USER PRICING
                </h2>
              </div>

              {/* Description */}
              <div className="w-[60%]">
                <p className="text-[21px] font-[600] text-[#494949] text-center">
                  You can now create Custom Pricing <br /> for your preferred or
                  special customers!
                </p>
              </div>

              {/* Button Section */}
              <div className="flex justify-center items-center mt-[4rem] mb-[2rem]">
                <div className="bg-black flex pt-1 pb-1 pl-6 pr-6 rounded-[2.5rem] gap-4 border-[1px] border-white border-opacity-30">
                  <img src={lockin} alt="" />
                  <button className="text-[#A2E000] font-[900] text-[19px] text-center">
                    Book A Call
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center items-center">
            <img src={hero_1} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
        {/* sale */}
        <div className="h-14 bg-[#A2DF00] flex mt-[4rem]">
          <div className=" flex justify-between gap-6 w-full p-2 text-[21px] font-[600]">
            <div className="flex justify-center items-center">
              <h2>Exclusive Offers upto 500$ Discount till 31st December.</h2>
            </div>
            <div className="flex justify-center items-center">
              <h2>Exclusive Offers upto 500$ Discount till 31st December.</h2>
            </div>
            <div className="flex justify-center items-center">
              <h2>Exclusive Offers upto 500$ Discount till 31st December.</h2>
            </div>
          </div>
        </div>
      </div>
      {/* what we offer */}
      <div
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[80vh]"
      >
        <div className="p-[9rem]">
          <div className="text-white text-[14px] font-[700]">WHAT WE OFFER</div>
          <div className="flex justify-between mt-[2rem]">
            <div>
              {" "}
              <h2 className="uppercase text-white text-[42px] font-[700]">
                our{" "}
                <span className="text-[#A2DF00]">
                  top <br /> membership <br />
                </span>{" "}
                service for you
              </h2>
            </div>
            <div className="w-[60%] flex justify-center align-middle items-center">
              <p className="text[#D4D4D4] text-white w-[40%] text-opacity-60">
                Book The Court is a comprehensive platform for court
                reservations and club management, designed to help you operate
                your club effortlessly and with confidence.
              </p>
            </div>
          </div>
          <div className="flex mt-[4rem] w-full gap-4 justify-between">
            {/* section 1 */}
            <div className=" flex flex-col gap-8">
              <div className="w-full">
                <img src={tennis} alt="" />
              </div>

              <h3 className="uppercase text-[#CDCFCC] font-[600]">
                Premium tools
              </h3>
              <div className="flex gap-2 text-[#CDCFCC]">
                EXPLORE{" "}
                <div className="flex justify-center items-center align-middle">
                  <img src={explore} alt="" />
                </div>
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-[.1px] h-[95%] border-[#CDCFCC] border-opacity-60"></div>
            </div>
            {/* section 2 */}
            <div className=" flex flex-col gap-8">
              <div>
                <img src={trophy} alt="" />
              </div>

              <h3 className="uppercase text-[#CDCFCC] font-[600]">
                top tournaments
              </h3>
              <div className="flex gap-2 text-[#CDCFCC]">
                EXPLORE{" "}
                <div className="flex justify-center items-center align-middle">
                  <img src={explore} alt="" />
                </div>
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-[.1px] h-[95%] border-[#CDCFCC] border-opacity-60"></div>
            </div>
            {/* section 3 */}
            <div className=" flex flex-col gap-8">
              <div>
                <img src={field} alt="" />
              </div>

              <h3 className="uppercase text-[#CDCFCC] font-[600]">
                lockers & showers
              </h3>
              <div className="flex gap-2 text-[#CDCFCC]">
                EXPLORE{" "}
                <div className="flex justify-center items-center align-middle">
                  <img src={explore} alt="" />
                </div>
              </div>
            </div>
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-[.1px] h-[95%] border-[#CDCFCC] border-opacity-60"></div>
            </div>
            {/* section 4 */}
            <div className=" flex flex-col gap-8">
              <div>
                {" "}
                <img src={icon} alt="" />
              </div>

              <h3 className="uppercase text-[#CDCFCC] font-[600]">
                expert supervision
              </h3>
              <div className="flex gap-2 text-[#CDCFCC]">
                EXPLORE{" "}
                <div className="flex justify-center items-center align-middle">
                  <img src={explore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BOOK COURTS */}
      <div className="bg-black h-[75vh] flex">
        <div className="flex items-center align-middle justify-between w-full">
          <div className="w-[45rem] h-[700px] bg-[#A2DF00] flex justify-center items-center">
            <div className="-ml-18">
              <img src={image2} alt="" className=" w-[20rem] h-[40rem]" />
            </div>
          </div>
          <div className="p-4 -ml-[25rem]">
            <img src={image1} alt="" className=" w-[20rem] h-[30rem]" />
          </div>
          <div className="w-[40%]">
            {" "}
            <h2 className="uppercase text-white text-[42px] font-[600]">
              let players <br /> effortlessly{" "}
              <span className="text-[#A2DF00]">
                book <br /> courts <br />
              </span>{" "}
            </h2>
            <div>
              <div className="flex items-center gap-4">
                <div>
                  <img src={tick} alt="" className="w-4 h-8" />
                </div>

                <p className="text-white">Simple Mobile Bookings</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img src={tick} alt="" className="w-4 h-8" />
                </div>

                <p className="text-white">Get Paid Faster</p>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <img src={tick} alt="" className="w-4 h-8" />
                </div>

                <p className="text-white">Optimize Court Usage</p>
              </div>
            </div>
            <div className="flex  items-center mt-4">
              <div className="bg-black flex p-2  rounded-[1rem] gap-2 border-[1px] border-white border-opacity-30">
                <div>
                  <img src={lockin} alt="" className="w-6 h-8" />
                </div>

                <button className="text-[#A2E000] font-[900] text-[12px] text-center">
                  Book A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Member experience */}
      <div className="h-[70vh] bg-black bg-opacity-96 flex justify-center align-middle items-center ">
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
      {/* OUR SERVICES */}
      <div
        className="w-full h-[auto] flex flex-col  align-middle "
        style={{
          background:
            "radial-gradient(50% 72.36% at 0% 0%, #1E1E1E 0%, #121212 100%)",
        }}
      >
        <div className="text-center pt-[3rem]">
          <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam mt=[5rem]">
            our
            <span className="text-[#A2DF00]">features</span>
          </h2>
          <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
            Explore our exclusive features that help you run your club smoothly.
          </p>
        </div>
        <div className="w-[80%] mx-auto mt-[7rem] gap-7 flex flex-col">
          {/* 1st row */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-[28px] text-white">01</h2>
            </div>
            <div>
              <h2 className="text-[36px] font-[500]">
                Program and Event Management
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className="cursor-pointer"
                onClick={() => toggleSection(0)} // Toggle the 1st section
              />
            </div>
          </div>
          {openSections[0] && (
            <div className="mt-6 flex">
              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[0] ? "mt-6" : "mt-4"}`}
          />

          {/* 2nd row */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-[28px] text-white">02</h2>
            </div>
            <div>
              <h2 className="text-[36px] font-[500]">Membership Management</h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className="cursor-pointer"
                onClick={() => toggleSection(1)} // Toggle the 2nd section
              />
            </div>
          </div>
          {openSections[1] && (
            <div className="mt-6 flex">
              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[1] ? "mt-6" : "mt-4"}`}
          />

          {/* 3rd row */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-[28px] text-white">03</h2>
            </div>
            <div>
              <h2 className="text-[36px] font-[500]">
                Court Reservation and Scheduling
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className="cursor-pointer"
                onClick={() => toggleSection(2)} // Toggle the 3rd section
              />
            </div>
          </div>
          {openSections[2] && (
            <div className="mt-6 flex">
              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[2] ? "mt-6" : "mt-4"}`}
          />

          {/* 4th row */}
          <div className="text-white flex items-center justify-between">
            <div className="flex justify-center items-center">
              <h2 className="text-[28px] text-white">04</h2>
            </div>
            <div>
              <h2 className="text-[36px] font-[500]">
                Pro and Lesson Management
              </h2>
            </div>
            <div className="flex">
              <img
                src={open}
                alt="toggle"
                className="cursor-pointer"
                onClick={() => toggleSection(3)} // Toggle the 4th section
              />
            </div>
          </div>
          {openSections[3] && (
            <div className="mt-6 flex">
              <div className="flex flex-col gap-4">
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    PAINPOINT
                  </h3>
                  <p className="text-white opacity-80">
                    Rid yourself of the messy membership tasks of paper forms,
                    expired memberships,
                  </p>
                  <p className="text-white opacity-80">
                    chasing down paper checks, and no retention data.
                  </p>
                </div>
                <div className="border-l-2 border-[#9C9C9C] border-opacity-50 pl-3">
                  <h3 className="text-[18px] font-[600] text-[#A2DF00]">
                    SOLUTION
                  </h3>
                  <p className="text-white opacity-80">
                    Our Membership management tools give you a quick and easy
                    way to promote
                  </p>
                  <p className="text-white opacity-80">
                    memberships, manage signups and renewals, collect on dues,
                    and report on retention.
                  </p>
                </div>
              </div>
            </div>
          )}
          <hr
            className={`opacity-20 mt-4 ${openSections[3] ? "mt-6" : "mt-4"}`}
          />
        </div>
      </div>
      {/* WHY CHOOSE US */}
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
              why choose <span className="text-[#A2DF00]">us ?</span>
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
              Dive Into our exclusive features and join with us and <br />{" "}
              elevate your sporting experience
            </p>
          </div>
          <div className="flex gap-4 w-[80%] justify-between align-middle items-center mt-[5rem]">
            <div>
              <img src={safer} alt="" />
            </div>
            <div>
              <img src={cloud} alt="" />
            </div>
            <div>
              <img src={faster} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* GET IN TOUCH */}
      <div className="bg-black h-[60vh]">
        <div className="p-[5rem] flex flex-col mx-4">
          <div className="uppercase text-white text-[14px] font-[700]">
            contact us
          </div>
          <div className="flex justify-between">
            <div className=" w-1/2 ">
              <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam">
                get in touch with <br />
                <span className="text-[#A2DF00]">us ?</span>
              </h2>
              <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[80%] mt-[2rem]">
                Have questions? Get in touch with us and our team will answer
                your queries within 48 hours.
              </p>
              <div className="flex align-middle items-center gap-4 mt-[4rem]">
                <img src={location} alt="" />
                <p className="text-white ">
                  11792 London Rd, Derby, OH 43117, US
                </p>
              </div>
              <div className="flex align-middle items-center gap-4 mt-[2rem]">
                <img src={mobile} alt="" />
                <p className="text-white ">+1 940 365 46 73</p>
              </div>
              <div className="flex align-middle  gap-4 mt-[2rem]">
                <div className="-ml-[5px]">
                  <img src={mail} alt="" />
                </div>

                <p className="text-white ">info@bookthecourt.com</p>
              </div>
            </div>
            <div className="w-[40%] flex flex-col gap-10">
              {/* Name And Email Row */}
              <div className="flex justify-between gap-4">
                {/* name */}
                <div className="w-1/2">
                  <div className="flex items-center gap-4">
                    <img src={contact_name} alt="" />
                    <label className="text-white font-[400] text-[16px]">
                      Name
                    </label>
                  </div>
                  <input
                    type="text"
                    className="bg-inherit border-b border-opacity-30 border-white w-[80%]"
                  />
                </div>
                {/* email */}
                <div className="w-1/2">
                  <div className="flex items-center gap-4">
                    <img src={contact_mail} alt="" />
                    <label className="text-white font-[400] text-[16px]">
                      Email
                    </label>
                  </div>
                  <input
                    type="text"
                    className="bg-inherit border-b border-opacity-30 border-white w-[80%]"
                  />
                </div>
              </div>
              {/* Phone and Subject Row */}
              <div className="flex justify-between gap-4">
                {/* name */}
                <div className="w-1/2">
                  <div className="flex items-center gap-4">
                    <img src={contact_phone} alt="" />
                    <label className="text-white font-[400] text-[16px]">
                      Phone
                    </label>
                  </div>
                  <input
                    type="number"
                    className="bg-inherit border-b border-opacity-30 border-white w-[80%]"
                  />
                </div>
                {/* email */}
                <div className="w-1/2">
                  <div className="flex items-center gap-4">
                    <img src={contact_messege} alt="" />
                    <label className="text-white font-[400] text-[16px]">
                      Subject
                    </label>
                  </div>
                  <input
                    type="text"
                    className="bg-inherit border-b border-opacity-30 border-white w-[80%]"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="flex justify-between gap-4 mt-[2rem]">
                <div className="w-full">
                  <div className="flex items-center gap-4">
                    <img src={contact_pen} alt="" />
                    <label className="text-white font-[400] text-[16px]">
                      How can we help you? Feel free to get in touch!
                    </label>
                  </div>
                  <input
                    type="text"
                    className="bg-inherit border-b border-opacity-30 mt-[2rem] border-white w-[91%]"
                  />
                </div>
              </div>

              {/* Button and aggree */}
              <div className="flex justify-between items-center mt-4">
                <div className="bg-black flex p-2  rounded-[1rem] gap-2 border-[1px] border-white border-opacity-30">
                  <div>
                    <img src={lockin} alt="" className="w-6 h-8" />
                  </div>

                  <button className="text-[#A2E000] font-[900] text-[12px] text-center">
                    Book A Call
                  </button>
                </div>
                <div className="flex w-[60%] items-center gap-3 align-middle">
                  <div className="items-center">
                    <input type="checkbox" className="border-white " />
                  </div>

                  <div className="flex w-full">
                    <p className="text-white">I agree that my data is </p>
                    <span className="underline text-white ml-1">
                      {" "}
                      collected and stored
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Business;
