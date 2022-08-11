import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/blindBoard/Navbar";
import List from "../components/mainPage/List";
import Modal from "../components/mainPage/Modal";
//css
import styles from "../css/routers/mainPage.module.css";

const MainPage = () => {
  const [istoggle, setIsToggle] = useState(false);
  const admin = useSelector(state => state.signReducer.current_user?.admin);

  // console.log(admin);

  const addCamp = () => {
    setIsToggle(true);
  };

  return (
    <div className={styles.layout}>
      <h2 className={styles.title}>캠프 목록</h2>
      <hr className={styles.bar}></hr>
      <List />
      { admin 
        ? <button className='addbtn' onClick={addCamp}>
          + 
          </button>
        : <></>
      }
      {istoggle && <Modal toggle={setIsToggle} />}
    </div>
  );
};

export default MainPage;
