import React from "react";
import style from "./footer.module.css";
import { FaHouseUser } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { CgMoreO } from "react-icons/cg";

function Home() {
  const menu = [
    { id: 1, icon: <FaHouseUser /> },
    { id: 2, icon: <VscBellDot /> },
    { id: 3, icon: <BsPerson /> },
    { id: 4, icon: <CgMoreO /> },
  ];

  return (
    <div className={style.Main}>
      <div className={style.middleContainer}>
        <div className={style.icons}>
          {menu.map((menu, index) => {
            return (
              <div key={index}>
                <h2>{menu.icon}</h2>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
