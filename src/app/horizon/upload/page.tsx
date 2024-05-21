"use client";

import Img from "next/image";
import {
  UploadDropzone
} from "../../../utils/uploadthing";

import Navbar from "../../../components/Navbar";

export default function Upload() {
  // give the user the file url to share by creating a list item

  return (
    <main>
      <Navbar />

      <div className="relative min-h-screen flex items-center justify-center">
        <Img
          src="/heroBG.png"
          alt="Hero Image"
          fill={true}
          loading="eager"
          className="z-0"
         />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-96 text-center relative z-10 text-white">
          <UploadDropzone
            className="bg-orange-200 bg-opacity-20 ut-button:bg-orange-500 ut-button:ut-uploading:bg-gray-500 ut-button:ut-uploading:after:bg-gray-300 ut-label:text-orange-300 ut-label:text-lg ut-allowed-content:text-orange-200 ut-allowed-content:ut-uploading:text-red-400"
            endpoint="things"
            onClientUploadComplete={() => {
              alert("Upload Completed");
            }}
          />
        </div>
      </div>
    </main>
  );
}