import plus from "../Icons/plus.png";
import bag from "../Icons/bag.png";
import dot from "../Icons/3 dot.png";
import calender from "../Icons/calendar_today.png";
import shareButton from "../Icons/shareButton.png";
import singlePeople from "../Icons/singlePeople.png";
import twoPeople from "../Icons/twoPeople.png";
import threePeople from "../Icons/threePeople.png";
import cross from "../Icons/cut.png";
import drop from "../Icons/keyboard_arrow_down.png";
import skills from "../Icons/skills.png";
import mobileView from "../Icons/mobileView.png";
import "./style.scss";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import Button from "@mui/material/Button";
import useIsMobile from "../useIsMobile";

const Card = (props) => {
  const isMobile = useIsMobile();

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const renderPeople = (people) => {
    if (people === 1) {
      return (
        <img className="people-image" src={singlePeople} alt="single people" />
      );
    } else if (people === 2) {
      return (
        <img
          style={{ width: "45px" }}
          className="people-image"
          src={twoPeople}
          alt="single people"
        />
      );
    } else if (people === 3) {
      return (
        <img
          style={{ width: "60px" }}
          className="people-image"
          src={threePeople}
          alt="single people"
        />
      );
    } else {
      return (
        <img className="people-image" src={singlePeople} alt="single people" />
      );
    }
  };

  const handlePlusClick = () => {
    console.log("buttonClicked");
    props?.setOpen(true);
  };

  const handleOnClose = () => {
    props?.setOpen(false);
  };

  return props?.isPlus ? (
    <div>
      <div className="plus-card">
        <img onClick={handlePlusClick} src={plus} alt="plusImage" />
        <h2>New Assessment</h2>
        <p>
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </div>
      {props?.open && <Dialog
        className="main-dialog"
        keepMounted
        open={props?.open}
        onClose={handleOnClose}
        TransitionComponent={Transition}
        classes={{ paper: "custom-paper" }}
      >
        <DialogTitle className="title">
          {isMobile?'Sub-Section Details':'Create new Assessment'}
          <img
            style={{ height: "30px", width: "30px", cursor:'pointer' }}
            onClick={handleOnClose}
            src={cross}
            alt="crossImage"
          />
        </DialogTitle>
        <DialogContent className="content">
          <div className="name">
            <h2>Name of assessment</h2>
            <input type="text" placeholder="Type Here" />
          </div>
          <div className="name">
            <h2>Purpose of the test is</h2>
            <input type="text" placeholder="Select" />
            <img src={drop} alt="dropImage" />
          </div>
          <div className="name">
            <h2>Description</h2>
            <input type="text" placeholder="Select" />
            <img src={drop} alt="dropImage" />
          </div>
          <div className="name">
            <h2>Skills</h2>
            {isMobile?<img style={{height: '142px',width: '104%', position: 'static', marginTop: '10px'}} src={mobileView} alt='skillIMage'/>:<img
              style={{
                width: "531px",
                height: "102px",
                position: "static",
                marginTop: "10px",
              }}
              src={skills}
              alt="skillsImage"
            />}
            <input
              style={{
                marginTop: "-5px",
                borderRadius: "0",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
              type="text"
              placeholder="Type Here"
            />
          </div>
          <div className="name">
            <h2>Description</h2>
            <input type="text" placeholder="HH:MM:SS" />
          </div>
        </DialogContent>
        <div className="dialog-footer" style={{ boxShadow: "0px -4px 50px 0px rgba(0, 0, 0, 0.09)" }}>
          <Button
            className="button"
            variant="contained"
          >
            Save
          </Button>
        </div>
      </Dialog>}
    </div>
  ) : (
    <div className="simple-card">
      <div className="bag-dot">
        <img className="bag" src={bag} alt="bagImage" />
        <img className="dot" src={dot} alt="dotImage" />
      </div>
      <h1 style={{ marginTop: "10px" }}>Math Assessment</h1>
      <div className="text-calender">
        <h3>Job</h3>
        <div className="line"></div>
        <img src={calender} alt="calenderImage" />
        <span>20 Apr 2023</span>
      </div>
      <hr className="hr-line"></hr>
      <div className="card-footer">
        <div style={{ display: "flex" }}>
          <div>
            <h3 style={{ margin: "0" }}>00</h3>
            <label>Duration</label>
          </div>
          <div style={{ marginLeft: "14px" }}>
            <h3 style={{ margin: "0" }}>00</h3>
            <label>Questions</label>
          </div>
        </div>
        <div className="right-footer">
          <img src={shareButton} alt="shareButtonImage" />
          {renderPeople(props?.people)}
        </div>
      </div>
    </div>
  );
};

export default Card;
