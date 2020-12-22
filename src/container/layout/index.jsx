import React from "react";
import Header from "../../components/header";
import Profile from "../profile";
import StackContent from "../stack-content";

const Layout = () => {
  return (
    <div>
      <Header />
      <StackContent />
      <Profile />
    </div>
  );
};
export default Layout;
