import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";
import background from "../src/images/background.jpg";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt=""></img>
        <Avatar className="sidebar__avatar" />
        <h2>Apurva Jain</h2>
        <h4>apurvjain28@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">90</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">300</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software")}
        {recentItem("fullstack")}
        {recentItem("nodejs")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
