import "font-awesome/css/font-awesome.min.css";
import "./TestPage.css";

import React from "react";
import { book } from "../../../constants/url";
import { checklist } from "../../../constants/url";
import { idea } from "../../../constants/url";

const TestHeader = () => {
  return (
    <>
      <div className="head">
        <h1 className="h1">Free Reading Assessment</h1>
        <p>HyggeX Assessment Explorer &reg;</p>
      </div>

      <div className="box1">
        <img src={checklist} alt="" />
        <div className="one bg-[#e3f0f4]">
          <h6>Complete the Assessment</h6>
          <p>
            Engage sincerely and respond accurately to unveil your reading
            profile.
          </p>
        </div>
      </div>
      <div className="box2">
        <img src={idea} alt="" />
        <div className="one bg-[#fbf3e1]">
          <h6>View Detailed Insights</h6>
          <p>
            Explore the impact of comprehension, speed, retention, anxiety,
            focus, and fatigue on your reading.
          </p>
        </div>
      </div>
      <div className="box3">
        <img src={book} alt="" />
        <div className="one #e6e2e8">
          <h6>Unlock Your Reading Potential</h6>
          <p>
            Advance into the proficient reader you aim to be with your optional
            Premium Suite.
          </p>
        </div>
      </div>
    </>
  );
};
export default TestHeader;
