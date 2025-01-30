import arrow from "../assets/Arrow_4.png";
import newsletter_pic from "../assets/newsletter_pic.png";
import article1 from "../assets/article_1.png";
import article2 from "../assets/article_2.png";
import article3 from "../assets/article_3.png";
import avatar1 from "../assets/avatar.png";
import right from "../assets/ar-right.png";
import left from "../assets/ar-left.png";
import footer_logo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-black  ">
        {/* newsletter */}
        <div className="flex justify-center">
          <div className="w-[80%] bg-white rounded-[10px] justify-between flex mt-[4rem] ">
            <div className="w-1/2 h-full flex flex-col justify-center align-middle gap-5 p-4">
              <div className="flex justify-center">
                <h2 className="uppercase text-[58px] font-[900]  bg-gradient-to-b from-[#262626] to-[#B8C2CE] text-transparent bg-clip-text">
                  Subscribe to our <br /> newsletter
                </h2>
              </div>

              <div className="flex justify-center w-full">
                <input
                  type="email"
                  placeholder="shovon.khan0099@gmail.com"
                  className="pt-4 pb-4 pl-4 pr-18 border-[#262626] border-[1px] rounded-tl-[8px] rounded-bl-[8px] w-[80%]"
                />

                <div className="bg-[#262626] items-center flex p-4 rounded-tr-[8px] rounded-br-[8px]">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[30%] h-full ml-[7rem]">
              <img src={newsletter_pic} alt="" />
            </div>
          </div>
        </div>

        {/* ARTICLES */}
        <div className="">
          <div className="text-center mt-[5rem] ">
            <h2 className="uppercase text-[42px] font-[700] text-white mb-[15px] font-beVietnam ">
              our <span className="text-[#A2DF00]">articles</span>
            </h2>
            <p className="text-[#FFFFFFCC] text-opacity-80 text-[22px] font-[400] w-[100%] mt-[2rem]">
              View the articles curated by our users.
            </p>
          </div>
          <div className="flex w-[100%] justify-center align-middle mt-[2rem] ">
            <div className="w-[70%] flex justify-center gap-7 mb-[5rem]">
              {" "}
              {/* article 1 */}
              <div className="flex flex-col w-[24rem] gap-2 ">
                {/* article img */}
                <div>
                  <img src={article1} alt="" className=" w-full" />
                </div>
                {/* avatar and name */}
                <div className="flex gap-6 font-beVietnam mt-[15px]">
                  <div>
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="flex justify-center items-center text-white ">
                    <p>Jake Will.</p>
                  </div>
                </div>
                {/* date */}
                <div className="text-white text-[12px] mt-[15px]">
                  04 June 2023
                </div>
                {/* text */}
                <div className="text-white mt-[15px] ">
                  <h3 className="text-[19px] font-[400] mb-[15px]">
                    5 Exercises Basketball Players Should Be Using To Develop
                    Strength
                  </h3>
                  <p className="text-[#B5B5B5] text-[12px] text-justify">
                    This article was written by Jake Willhoite from
                    Healthlisted.com Strength in basketball isn’t all about a
                    massive body mass or ripped muscles.
                  </p>
                </div>
              </div>
              {/* article2 2 */}
              <div className="flex flex-col w-[24rem] gap-2">
                {/* article img */}
                <div>
                  <img src={article2} alt="" className="w-full" />
                </div>
                {/* avatar and name */}
                <div className="flex gap-6 font-beVietnam mt-[15px]">
                  <div>
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="flex justify-center items-center text-white ">
                    <p>Jake Will.</p>
                  </div>
                </div>
                {/* date */}
                <div className="text-white text-[12px] mt-[15px]">
                  04 June 2023
                </div>
                {/* text */}
                <div className="text-white mt-[15px]">
                  <h3 className="text-[19px] font-[400] mb-[15px]">
                    5 Exercises Basketball Players Should Be Using To Develop
                    Strength
                  </h3>
                  <p className="text-[#B5B5B5] text-[12px] text-justify">
                    This article was written by Jake Willhoite from
                    Healthlisted.com Strength in basketball isn’t all about a
                    massive body mass or ripped muscles.
                  </p>
                </div>
              </div>
              {/* article 3 */}
              <div className="flex flex-col w-[24rem] gap-2">
                {/* article img */}
                <div>
                  <img src={article3} alt="" className="w-full" />
                </div>
                {/* avatar and name */}
                <div className="flex gap-6 font-beVietnam mt-[15px]">
                  <div>
                    <img src={avatar1} alt="" />
                  </div>
                  <div className="flex justify-center items-center text-white ">
                    <p>Jake Will.</p>
                  </div>
                </div>
                {/* date */}
                <div className="text-white text-[12px] mt-[15px]">
                  04 June 2023
                </div>
                {/* text */}
                <div className="text-white mt-[15px]">
                  <h3 className="text-[19px] font-[400] mb-[15px]">
                    5 Exercises Basketball Players Should Be Using To Develop
                    Strength
                  </h3>
                  <p className="text-[#B5B5B5] text-[12px] text-justify">
                    This article was written by Jake Willhoite from
                    Healthlisted.com Strength in basketball isn’t all about a
                    massive body mass or ripped muscles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4  pb-[4rem]">
            <div className="bg-inherit border border-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3 text-[#A2DF00]">
              <img src={left} alt="" />
            </div>
            <div className="bg-[#A2DF00] font-beVietnam text-[18px] font-[500] p-3">
              <img src={right} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] h-[40vh] flex items-center justify-center pt-[5rem]">
        <div className="flex w-[90%] max-w-[1500px]  gap-8 justify-between">
          {/* Section 1 - Footer Logo */}
          <div className="w-[15rem] h-[7rem] flex ">
            <img src={footer_logo} alt="Footer Logo" className="w-full" />
          </div>

          {/* Section 2 - Home */}
          <div className="flex-1">
            <h3 className="font-bold text-lg">Home</h3>
            <ul className="mt-2 space-y-1 list-disc">
              <li>Courtsite Platform</li>
              <li>Courtsite For Business</li>
            </ul>
          </div>

          {/* Section 3 - About Us */}
          <div className="flex-1">
            <h3 className="font-bold text-lg">About Us</h3>
            <ul className="mt-2 space-y-1 list-disc">
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Like Courtsite?</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Section 4 - Help Centre */}
          <div className="flex-1">
            <h3 className="font-bold text-lg">HELP CENTRE</h3>
            <ul className="mt-2 space-y-1 list-disc ">
              <li>Frequently Asked Questions (FAQs)</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Section 5 - Our Partner Centres */}
          <div className="flex-1">
            <h3 className="font-bold text-lg">OUR PARTNER CENTRES</h3>
            <ul className="mt-2 space-y-1">
              <li>Forum Optimum Badminton Centre</li>
              <li>X Park PJ South</li>
              <li>Sportizza - Home of Sports Petaling Jaya</li>
              <li>and more</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
