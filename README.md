Markdown

# 🚀 Personal API — HNG DevOps Stage 1

A lightweight REST API built with **Node.js** and **Express**, deployed on an **AWS EC2** instance running Ubuntu 24.04. Traffic is served through an **Nginx reverse proxy** and the service is kept alive persistently using **systemd**.

---

## 📌 Project Overview

This project is part of the **HNG DevOps Internship Stage 1** task. The goal is to:
- Write a minimal API with three endpoints
- Deploy it on a Linux VPS
- Configure Nginx as a reverse proxy
- Ensure the service runs persistently without manual restarts

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | Node.js 20 |
| Framework | Express.js |
| Web Server | Nginx 1.24 |
| Process Manager | systemd |
| Cloud Provider | AWS EC2 |
| OS | Ubuntu 24.04 LTS |

---

## 📂 Project Structure
Hng-devops-task1/
├── index.js # Main application entry point
├── package.json # Project metadata and dependencies
├── package-lock.json # Locked dependency versions
└── README.md # Project documentation

text


---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js 18+ installed → [Download here](https://nodejs.org)
- npm (comes with Node.js)

### Steps

**1. Clone the repository**
```bash
git clone https://github.com/OB-Peter/Hng-devops-task1.git
cd Hng-devops-task1
2. Install dependencies

Bash

npm install
3. Start the server

Bash

node index.js
4. Test the endpoints

Bash

curl http://localhost:8000/
curl http://localhost:8000/health
curl http://localhost:8000/me
The server runs on port 8000 by default.

🔗 API Endpoints
GET /
Returns a confirmation that the API is running.

Request:

Bash

curl http://localhost:8000/
Response:

JSON

{
  "message": "API is running"
}
GET /health
Returns the health status of the API.

Request:

Bash

curl http://localhost:8000/health
Response:

JSON

{
  "message": "healthy"
}
GET /me
Returns personal information about the developer.

Request:

Bash

curl http://localhost:8000/me
Response:

JSON

{
  "name": "Oluyemi Boluwatife Peter",
  "email": "obpeterapp@gmail.com",
  "github": "https://github.com/OB-Peter"
}
📋 Endpoints Summary
Method	Endpoint	Description	Status Code
GET	/	API status check	200
GET	/health	Health check	200
GET	/me	Developer info	200
All endpoints return:

✅ Content-Type: application/json
✅ HTTP Status 200
✅ Response time < 500ms
🌍 Live Deployment
🔗 Base URL	http://13.60.99.178
🏠 Root	http://13.60.99.178/
💚 Health	http://13.60.99.178/health
👤 Me	http://13.60.99.178/me
🏗️ Deployment Architecture
text

Internet
    │
    ▼
 Port 80
    │
 Nginx (Reverse Proxy)
    │
    ▼
 Port 8000 (localhost only)
    │
 Express App (Node.js)
    │
 systemd (keeps it alive)
How It's Deployed
EC2 Instance — AWS Ubuntu 24.04 server provisioned
App runs locally — Express binds to 127.0.0.1:8000 (not exposed publicly)
Nginx proxies traffic — Listens on port 80, forwards to port 8000
systemd service — Automatically starts the app on boot and restarts it on failure
UFW Firewall — Port 8000 is blocked externally; only ports 22, 80, and 443 are open
🔒 Security
The Express app is not exposed directly to the internet
Port 8000 is blocked by UFW firewall
All public traffic goes through Nginx only
SSH access is restricted to port 22
🔄 systemd Service
The API runs as a systemd service for persistent uptime:

ini

[Unit]
Description=Personal API Service
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/Hng-devops-task1
ExecStart=/usr/bin/node index.js
Restart=always
RestartSec=3
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
Useful commands:

Bash

# Check service status
sudo systemctl status personal-api

# Restart the service
sudo systemctl restart personal-api

# View live logs
journalctl -u personal-api -f
