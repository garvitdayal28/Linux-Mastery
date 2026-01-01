import React from "react";
import { motion } from "motion/react";
import XTerminal from "../terminal/XTerminal";
import AppProvider from "../terminal/AppProvider.jsx";
import { DataContext } from "../terminal/DataProvider";

const Terminal = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="w-[61vw] h-[48vh] bg-[#350A28] rounded-xl"
    >
      <div
        className="pl-4 bg-[#4F4E49] rounded-t-xl h-8 flex
         items-center"
      >
        Terminal
      </div>

      <div id="terminal">
        <DataContext.Provider value={{}}>
          {/* <AppProvider> */}
          <XTerminal />
          {/* </AppProvider> */}
        </DataContext.Provider>
      </div>
    </motion.div>
  );
};

export default Terminal;
