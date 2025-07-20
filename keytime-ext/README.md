# Keytime

**Keytime** is a VS Code extension that automatically tracks your coding time and activity. It monitors your development activity in real-time and sends heartbeat data to a local server for comprehensive time tracking across projects and programming languages.

## Features

### **Automatic Time Tracking**

- Tracks coding time automatically without manual intervention
- Monitors file changes, editor switches, and window focus events
- Intelligent activity detection with configurable timeout intervals

### **Real-time Status Display**

- Shows your daily coding time in the VS Code status bar
- Updates live as you code with formatted time display (e.g., "2h 15m" or "45m 30s")
- Timeline icon indicator for quick visual reference

### **Smart Heartbeat System**

- Sends periodic "heartbeats" containing activity data to a local server
- Tracks active file, programming language, project folder, and timestamp
- Configurable maximum interval to prevent over-counting idle time
- Default 2-minute heartbeat interval with 10-minute maximum gap

### **Local Server Integration**

- Connects to local WebSocket server for real-time data exchange
- Secure, privacy-focused approach - all data stays on your machine
- Automatic reconnection handling with graceful error recovery
- Warning notifications when server connection is lost

### **Multi-Project Support**

- Automatically detects and tracks time across different workspace folders
- Associates activity with the project folder and programming language
- Handles workspace folder changes dynamically

### **Persistent Data Storage**

- Daily time tracking with automatic date rollover
- Uses VS Code's global state for local data persistence
- Maintains accurate daily totals across VS Code sessions

## Requirements

### Server Setup

This extension requires a local Keytime server to be running for full functionality. The server is automatically set up when you initialize your keytime account using the Keytime CLI.

## Known Issues

- **Server Dependency**: Extension requires a local server to be running. Without it, time tracking data cannot be persisted beyond local VS Code state

## Release Notes

### 0.0.1

Initial release of Keytime extension featuring:

- Automatic coding time tracking
- Real-time status bar display
- WebSocket-based heartbeat system
- Multi-project workspace support
- Local data persistence with daily rollover

---
