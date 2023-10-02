import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

import { SiMdbook } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <div className=" mt-10 w-full h-[1300px] sm:h-[800px] md:h-[500px] grid items-center  bg-[#282828] mb-64  ">
        <div className="  justify-around grid h-[100px] sm:h-0 sm:grid-cols-2 ">
          <div className=" text-white grid md:grid-cols-2 justify-around ">
            <div className=" ml-3 md:ml-[30px] xl:ml-[60px] 2xl:ml-[130px] ">
              <h1 className=" text-[20px] font-bold flex items-center gap-1 ">
                <SiMdbook /> BOOKORY
              </h1>
              <p className=" mt-4 ">
                1418 River Drive, Suite 35 <br />
                Cottonhall, CA 9622
              </p>
            </div>

            <div className=" ml-3 md:ml-[15px] xl:ml-[30px] 2xl:ml-[80px]">
              <p className=" text-[18px] mt-0   md:mt-0 font-semibold ">
                Need Help
              </p>
              <p className=" md:text-[20px] xl:text-[30px] 2xl:text-[30px] mt-5 font-bold text-[#F65D4E] ">
                +(84) - 1800 - 4635
              </p>
              <p className=" mt-7 ">
                Monday – Friday: 9:00-20:00 <br />
                Saturday: 11:00 – 15:00
              </p>
              <p className=" md:text-[16px] xl:text-[20px] mt-7 font-semibold ">
                contact@example.com
              </p>
            </div>
          </div>
          <div className=" text-white grid  mt-10 sm:mt-0 grid-rows-3  sm:grid-cols-3 justify-around md:mr-0 xl:mr-10 2xl:mr-20 ">
            <div className=" ml-2 mr-[50px] md:mr-[50px] xl:mr-[50px] 2xl:mr-[100px] ">
              <p className=" text-[18px]  font-semibold ">Explore</p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">About us</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Sitemap</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Bookmarks</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Sign in/Join</a>
              </p>
            </div>
            <div className=" md:mr-[50px] xl:mr-[50px] 2xl:mr-[100px] ">
              <p className=" text-[18px] font-semibold ">Our Service</p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Help Center</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Returns</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Product Recalls</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Accessibility</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Contact Us</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Store Pickup</a>
              </p>
            </div>
            <div className=" mt-10 sm:mt-0 md:mr-[50px] xl:mr-[50px] 2xl:mr-[100px] ">
              <p className=" text-[18px] font-semibold ">Categories</p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Action</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Comedy</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Drama</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Horror</a>
              </p>
              <p className=" text-[15px] mt-3 hover:text-[#f4402f] ">
                <a href="">Kids</a>
              </p>
            </div>
          </div>
        </div>
        {/* <hr className="  w-full bg-gray-200 border  "></hr> */}
        <div className="grid mt-[950px] sm:mt-[400px] md:mt-[300px] xl:mt-[300px] 2xl:mt-[300px] ">
          <div className=" grid grid-rows-2 sm:grid-cols-2  text-white h-20 ">
            <div className=" ml-10 sm:ml-[50px] md:ml-[130px] ">
              <p>
                Copyright © 2022
                <span className=" text-[#f4402f] ">Bookory</span>. All rights
                reserved.
              </p>
            </div>

            <div className=" ml-[50px] md:ml-[100px] xl:ml-[250px] 2xl:ml-[250px] sm:mr-20 md:mr-20 xl:mr-20 2xl:mr-0 ">
              <div className=" grid grid-cols-4 mt-5  text-[24px]  md:w-[200px] ">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaPinterest />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
