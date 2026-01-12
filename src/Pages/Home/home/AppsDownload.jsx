import React from "react";
import Chef from "../../../assets/chef.png";
import Reveal from "../../../components/Reveal";

const AppsDownload = () => {
  return (
    <Reveal>
    <div className="flex flex-col-reverse md:flex-row items-center justify-around mx-auto text-sm border border-gray-300 rounded-lg my-7 p-2 max-w-5xl w-full bg-white">
      <div className="flex flex-col text-center md:text-left items-center md:items-start pt-14 md:p-10">
        <h2 className="md:text-4xl text-2xl font-semibold text-gray-800">
          Download Mobile App
        </h2>
        <p className="text-gray-700 mt-2 w-3/4">
          Mobile banking app for iOS & Android to manage your online money.
        </p>

        <div className="flex items-center gap-4 mt-6">
          <a
            href="https://play.google.com/store/games?device=windows"
            target="blank"
            aria-label="googlePlayBtn"
            className="active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <img
              className="md:w-44 w-28"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/googlePlayBtn.svg"
              alt="googlePlayBtn"
            />
          </a>
          <a
            href="https://www.apple.com/store"
            target="blank"
            aria-label="appleStoreBtn"
            className="active:scale-95 transition-all cursor-pointer"
            type="button"
          >
            <img
              className="md:w-44 w-28"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/appleStoreBtn.svg"
              alt="appleStoreBtn"
            />
          </a>
        </div>
      </div>

      <img className="w-[200px] pt-10 md:p-0" src={Chef} alt="Chef" />
    </div>
    </Reveal>
  );
};

export default AppsDownload;
