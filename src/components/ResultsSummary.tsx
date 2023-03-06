import React from "react";

const ResultsSummary = () => {
  return (
    <main className="flex justify-center  items-center h-screen font-hankenGrotesk">
      <div
        className="flex flex-col w-full h-full shadow-xl overflow-hidden sm:flex-row 
        sm:w-[620px] sm:h-auto sm:rounded-3xl"
      >
        <div
          className="flex flex-col gap-5 items-center w-full bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue 
          rounded-t-none rounded-3xl pt-6 pb-10  pl-10 pr-10 
          sm:w-1/2 sm:rounded-t-3xl"
        >
          <span className="text-lg text-lightLavender">Your Result</span>
          <div
            className="flex flex-col justify-center items-center text-white  w-32 h-32 bg-gradient-to-b from-violetBlue to-persianBlue 
            rounded-full p-10 
            sm:w-40 sm:h-40"
          >
            <span className="text-5xl font-bold sm:text-6xl">76</span>
            <span className="text-grayishBlue">of 100</span>
          </div>
          <span className="text-2xl text-white">Great</span>
          <p className="w-72 text-center text-lightLavender sm:w-auto">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full pt-6 p-10 sm:w-1/2">
          <div className="text-lg text-darkGrayBlue">Summary</div>
          <div className="flex justify-between bg-lightRed-soft  p-3 rounded-md">
            <div className="flex items-center gap-2 text-lightRed">
              <img
                className="w-5 h-5"
                src="/results-summary-component-main/assets/images/icon-reaction.svg"
                alt="reaction-icon"
              />
              <span>Reaction</span>
            </div>
            <div>
              <span className="text-darkGrayBlue">80</span>
              <span className="text-grayishBlue"> / 100</span>
            </div>
          </div>
          <div className="flex justify-between bg-orangeyYellow-soft p-3 rounded-md">
            <div className="flex items-center gap-2 text-orangeyYellow">
              <img
                className="w-5 h-5"
                src="/results-summary-component-main/assets/images/icon-memory.svg"
                alt="memory-icon"
              />
              <span>Memory</span>
            </div>
            <div>
              <span className="text-darkGrayBlue">92</span>
              <span className="text-grayishBlue"> / 100</span>
            </div>
          </div>
          <div className="flex justify-between bg-greenTeal-soft p-3 rounded-md">
            <div className="flex items-center gap-2 text-greenTeal">
              <img
                className="w-5 h-5"
                src="/results-summary-component-main/assets/images/icon-verbal.svg"
                alt="verbal-icon"
              />
              <span>Verbal</span>
            </div>

            <div>
              <span className="text-darkGrayBlue">61</span>
              <span className="text-grayishBlue"> / 100</span>
            </div>
          </div>
          <div className="flex justify-between bg-cobaltBlue-soft p-3 rounded-md">
            <div className="flex items-center gap-2 text-cobaltBlue">
              <img
                className="w-5 h-5"
                src="/results-summary-component-main/assets/images/icon-visual.svg"
                alt="visual-icon"
              />
              <span>Visual</span>
            </div>
            <div>
              <span className="text-darkGrayBlue">72</span>
              <span className="text-grayishBlue"> / 100</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full p-3 mt-4 bg-darkBlue text-white rounded-full active:bg-gradient-to-b from-lightSlateBlue to-lightRoyalBlue"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
};

export default ResultsSummary;
