import React, { useEffect,  } from "react";
import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../lib/constans";

const XTerminal = () => {
  useEffect(() => {
    const term = new Terminal();
    const fitaddon = new FitAddon();
    const socket = io(SOCKET_URL, { transports: ["websocket"] });

    term.loadAddon(fitaddon);
    term.open(document.getElementById("terminal"));
    fitaddon.fit();
    term.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
    term.onData((data) => {
      socket.emit("terminal-input", data);
    });
    socket.on("terminal-output", (data) =>
    {term.write(data)})

    return () => {
      term.dispose();
      socket.disconnect();
    };
  }, []);

  return null;
};

export default XTerminal;
