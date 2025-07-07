"use client";

import { usePathname } from "next/navigation";

export default function Preloader() {
  const pathname = usePathname();


  return (
    <>{pathname === "/" ? 
            <div className="preloader-wrap" data-centerline="Loading">
      <div className="percentage-wrapper">
        <div className="percentage" id="precent">
          {/* <span className="number number_2">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
          </span>
          <span className="number number_3">
            <span>0</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>0</span>
          </span> */}
        </div>
        <div className="percentage-first">
          <span>기다려주세요</span>
        </div>
        <div className="percentage-last">
          <span>반엣에 어서오세요</span>
        </div>
      </div>
    </div> :            ""
    }</>

  );
}
