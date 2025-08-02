"use client";

import { Checkbox, Select } from "antd";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import PhoneInput from "react-phone-number-input/input";
const onCheckboxChange = () => {};

const ContactForm = () => {
  const [value, setValue] = useState();

  return (
    <div className="**:text-white/80 p-6  border  backdrop:blur-xl backdrop-blur-lg border-white/20 rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-3xl text-center font-medium pb-2">
          Start Your Journey With Infinity
        </h3>
        <p className="text-[15px] w-8/12 text-center">
          Fill out the form below and our team will be in touch shortly.Whether
          it is a project inquiry, partnership, or just a question — we’re here
          for you.
        </p>
      </div>
      <div className="pt-8">
        <form action="" className="space-y-5">
          <div className="flex flex-col gap-2">
            <label className="text-primaryBlack font-thin" htmlFor="">
              Full name
            </label>
            <input
              placeholder="Full name"
              className="px-3 bg-white/20 focus:border-white/60 transition-all duration-20 placeholder:text-sm py-2.5 text-[15px] font-thin rounded-md border focus:outline-none border-white/40"
              type="text"
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primaryBlack font-thin" htmlFor="">
              Email
            </label>
            <input
              placeholder="Email address"
              className="px-3 focus:border-white/60 transition-all duration-200 bg-white/20 placeholder:text-sm py-2.5 text-[15px] font-thin rounded-md border focus:outline-none border-white/40"
              type="email"
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primaryBlack font-thin" htmlFor="">
              Phone no
            </label>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={() => setValue}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-primaryBlack font-thin" htmlFor="">
              Additional Notes
            </label>
            <textarea
              placeholder="Write here..."
              className="px-3 h-40 placeholder:text-sm focus:border-white/60 transition-all duration-20 bg-white/20 py-2.5 text-[15px] font-thin rounded-md border focus:outline-none border-white/40"
              id=""
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-primaryBlack font-thin" htmlFor="">
                Select Project
              </label>
              <div>
                <Select
                  placeholder="Project"
                  className="custom-select"
                  options={[
                    { value: "jack", label: "Jack" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-primaryBlack font-thin" htmlFor="">
                Select Unit Type
              </label>
              <div>
                <Select
                  placeholder="Unit type"
                  className="custom-select"
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Checkbox
              className="!size-6 text-nowrap !text-[15px] !font-thin"
              onChange={onCheckboxChange}
            >
              I have read and agree to the privacy policy.*
            </Checkbox>
          </div>

          <div className="flex justify-center mt-8">
            <button className="flex items-center gap-3 group rounded-lg cursor-pointer justify-center bg-primaryBlack text-white w-96 h-12">
              Send Message{" "}
              <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
