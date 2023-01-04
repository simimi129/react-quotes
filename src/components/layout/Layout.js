import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout({ children }) {
  return (
    <>
      <MainNavigation />
      <main className={classes.mian}>{children}</main>
    </>
  );
}

export default Layout;
