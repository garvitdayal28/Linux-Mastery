import React, { useEffect, useRef } from "react";
import { Navbar } from "../reusable/Navbar";
import Terminal from "./Terminal";
import { io } from "socket.io-client";
import { motion } from "motion/react";

const LandingPage = () => {
  return (
    <div>
      <Navbar />

      {/* hero */}

      <div className="flex justify-evenly mt-30">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Master Linux
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            from Basic to Advance
          </motion.h2>
        </div>
        <Terminal />
      </div>
    </div>
  );
};

export default LandingPage;
