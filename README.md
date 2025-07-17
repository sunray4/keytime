# Keytime

Keytime is a coding time tracker that helps you monitor and analyze your programming activity. It consists of two main components:

- **keytime-main**: The command line interface (CLI) and server, built with Node.js. This tool manages your account, tracks your coding time, and stores data locally using a Prisma SQLite database. It provides commands to view stats, control the background server, and manage your user profile.
- **keytime-ext**: A VSCode extension that monitors your coding activity and sends heartbeats (activity pings) to the keytime server for accurate time tracking.

## How It Works

1. **Install and set up the CLI** (`keytime-main`):
   - Handles user setup, project/language/editor tracking, and runs a background server to receive activity data.
2. **Install the VSCode extension** (`keytime-ext`):
   - Automatically detects your coding activity and reports it to the Keytime server.
3. **Analyze your stats**:
   - Use the CLI to view time spent per project, language, and editor.

---

### User account setup

![Keytime Account Setup](assets/create_account.png)

### Displays all projects and respective coding time

![Keytime](assets/projects.png)

### Displays user information

![Keytime](assets/user.png)

### Extension communicating with server

![Keytime](assets/heartbeats.png)
