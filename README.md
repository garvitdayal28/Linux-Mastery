# Linux-Mastery

**Linux Mastery Frontend**

---

## 🐧 Linux Mastery - Virtual Linux Lab

A full-stack web application designed for students to learn Linux commands through a real-time, browser-based terminal. Each user session spawns an isolated Ubuntu Docker container, providing a safe and authentic playground for learning.

---

## 🚀 Features

- **Authentic Terminal**: Powered by xterm.js, providing a professional terminal look and feel.

- **Isolated Sandboxing**: Uses Docker containers to ensure student actions do not affect the host system.

- **Real-Time Interaction**: Zero-latency communication using WebSockets (socket.io).

- **Resource Management**: Automatically cleans up containers on disconnect using the `--rm` flag and explicit cleanup logic.

- **Responsive UI**: Styled with Tailwind CSS v4 and Framer Motion.

---

## 🛠️ Tech Stack

### Frontend

- React 19 (Vite)
- Tailwind CSS v4
- xterm.js (Terminal Engine)
- Socket.io-client

### Backend

- Node.js (Express)
- Socket.io (WebSockets)
- node-pty (Pseudo-terminal handler)
- Docker (Containerization)