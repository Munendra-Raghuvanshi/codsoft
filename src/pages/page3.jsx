import React from "react";
import Navbar from "../components/Navbar";

const Certificate = () => {
  return (
    <div>
      <Navbar />
      <div className="flix text-left text-xl py-10">
        <p>CERTIFICATE VERIFICATION SYSTEM</p>
      </div>
      <div className="flex justify-center py-10">
        <div
          className="w-8/12  bg-gray-100 border-3 border-gray-300 rounded-lg shadow-md"
          style={{
            background: "#f7f8fd",
            border: "3px solid #eceefb",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <form className="  items-center w-">
            <input
              type="text"
              placeholder="Enter the code"
              required
              className="cf-field border border-black p-3 rounded-md   w-3/5 "
              style={{
                height: "43px",
                lineHeight: "19px",
                fontSize: "16px",
                color: "rgba(0, 0, 0, 0.7)",
                backgroundColor: "#ffffff",
                borderRadius: "3px",
              }}
            />
            <button className="cf-field border border-black p-2 rounded-md  bg-black w-40  text-white text-xl ">
              search
            </button>
          </form>
        </div>
      </div>
      <div className="text-center pt-8 pb-5 text-5xl">Certificate Result</div>
      <div className=" rounded-lg  ">
        <div className="  m-10  rounded-lg shadow-md ">
          <div className=" flex rounded-lg justify-between bg-gray-100 w-full  py-2 border-b">
            <div className=" text-xl  ">Student Name: Jay Singh</div>
          </div>
          <div className="flex justify-between py-2 border-b">
            <div className="font-semibold p-2 text-xl ">Domain: App Davlopment </div>
            
          </div>
          <div className="flex justify-between py-2  bg-gray-100  border-b">
            <div className="font-semibold p-2 text-xl ">Duration: 8 weeks</div>
           
          </div>
          <div className="flex justify-between py-2 border-b">
            <div className="font-semibold p-2 text-xl  ">Certification No: 5a456</div>
            
          </div>
          <div className="flex justify-between py-2  bg-gray-100  border-b">
            <div className="font-semibold p-2 text-xl ">Starting Date: 15/july/2024 </div>
            <div></div>
          </div>
          <div className="flex justify-between py-2">
            <div className="font-semibold p-2 text-xl">Award Date: 15/Sep/2024</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
