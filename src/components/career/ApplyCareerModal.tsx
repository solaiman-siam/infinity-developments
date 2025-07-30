"use client";

import {  Modal, Upload, UploadFile, UploadProps } from "antd";
import { CalendarDays, MapPin } from "lucide-react";
import { useState } from "react";
import { HiUser } from "react-icons/hi";
import { MdCloudUpload, MdEmail } from "react-icons/md";
import { PiPhoneCallFill, PiReadCvLogoFill } from "react-icons/pi";

const ApplyCareerModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [error, setError] = useState<string | null>(null)

  console.log(fileList[0]);

  const props : UploadProps = {
    onRemove: (file) => {
      setError(null)
      setFileList((prevList) =>
        prevList.filter((item) => item.uid !== file.uid)
      );
    },
    beforeUpload: (file) => {
      setError(null)
      // Validate file type
      const isPDF = file.type === "application/pdf";
      if (!isPDF) {
        // message.error("You can only upload PDF files!");
        setError('You can only upload PDF files!')
        return Upload.LIST_IGNORE;
      }

      // Validate file size (5MB limit)
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        // message.error("File must be smaller than 2MB!");
        setError('File must be smaller than 2MB!')
        return Upload.LIST_IGNORE;
      }

      setFileList([file]);
      return false; // Prevent automatic upload
    },
    fileList,
    accept: ".pdf",
    maxCount: 1, // Allow only one file
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="px-6 cursor-pointer py-2.5 rounded-md bg-primaryBlack text-white"
      >
        Apply Now
      </button>

      {/* modal */}
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        centered
        className="apply-career-modal"
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
      >
        <div className=" rounded-xl">
          <div className="bg-primaryBlack rounded-t-xl text-white p-6">
            <h3 className="text-2xl  text-white pb-4">
              Senior Project Manager
            </h3>
            <div className="flex items-center gap-4">
              <h4 className="flex items-center gap-1 font-thin text-sm text-[#919EAB]">
                <MapPin className="size-4" />{" "}
                <span className=" ">Zairbar, Abu dhabi</span>
              </h4>
              <h4 className="flex items-center gap-1 font-thin text-sm text-[#919EAB]">
                <CalendarDays className="size-4" />{" "}
                <span>Posted 1 week ago</span>
              </h4>
            </div>
          </div>
          <div className="p-6">
            <p className="text-black/60 text-base ">
              We are looking for an experienced Project Manager to lead our
              product development initiatives. The ideal candidate will have a
              proven track record in managing cross-functional teams and
              delivering complex projects on time.
            </p>
            <h3 className="pt-6 font-medium pb-4 text-primaryBlack text-lg">
              Apply for this position
            </h3>
          </div>
          <div className="px-6 pb-6">
            <form action="" className="space-y-5">
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-1">
                  <HiUser className="size-5 text-gray-400" />
                  <h4 className="text-primaryBlack/60 pt-0.5 ">
                    Full Name <span className="text-red-500">*</span>
                  </h4>
                </div>
                <div>
                  <input
                    className="px-3 w-full py-2.5 rounded-md border focus:outline-none border-black/10"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-1.5">
                  <MdEmail className="size-4.5 text-gray-400" />
                  <h4 className="text-primaryBlack/60 pt- ">
                    Email Address <span className="text-red-500">*</span>
                  </h4>
                </div>
                <div>
                  <input
                    className="px-3 w-full py-2.5 rounded-md border focus:outline-none border-black/10"
                    type="email"
                    name=""
                    id=""
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-1.5">
                  <PiPhoneCallFill className="size-4.5 text-gray-400" />
                  <h4 className="text-primaryBlack/60 pt- ">
                    Phone No. <span className="text-red-500">*</span>
                  </h4>
                </div>
                <div>
                  <input
                    className="px-3 w-full py-2.5 rounded-md border focus:outline-none border-black/10"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center gap-1">
                  <PiReadCvLogoFill className="size-5 text-gray-400" />
                  <h4 className="text-primaryBlack/60  ">
                    Upload CV/Resume <span className="text-red-500">*</span>
                  </h4>
                </div>
                <div className="w-full">
                  <Upload className="" {...props}>
                    <div className="border cursor-pointer flex flex-col gap-1 justify-center items-center text-primaryBlack/40 border-black/10 text-center px-4 rounded-md w-[100%] py-10">
                    <MdCloudUpload size={24} />
                      <span>Drop your file here, or browse (pdf)</span>
                    </div>
                  </Upload>
                </div>
                <p className="text-red-500 text-center text-sm  ">{ error&& error}</p>
              </div>
              <div>
                <button className="w-full bg-primaryBlack text-white py-4 rounded-md">Submit Application</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ApplyCareerModal;
