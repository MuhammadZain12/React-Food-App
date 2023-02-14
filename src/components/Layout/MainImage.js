import React from "react";
import Image from "../UI/Image";
import mainPic from "../../Images/Main-pic.jpg";
import mainPic2 from "../../Images/Main-pic2.jpg";
import mainPic3 from "../../Images/Main-pic3.jpg";

function MainImage(props) {
  return (
    <div className="">
      <Image src={mainPic2} />
      {/* <Image src={mainPic3} /> */}
      <Image src={mainPic} />
    </div>
  );
}

export default MainImage;
