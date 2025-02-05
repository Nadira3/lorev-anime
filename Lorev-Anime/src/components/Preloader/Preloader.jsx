import React from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <div
      style={{
        alignItems: "center",
        background: "#c65e1d",
        color: "#fff",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        left: 0,
        top: 0,
        width: "100vw",
      }}
    >
      <motion.p
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
        style={{ fontSize: "100px", fontWeight: "bold" }}
      >
        Welcome to Revol
      </motion.p>
    </div>
  );
};

export default Preloader;
