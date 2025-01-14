# Real-Time Tracking Application

## Project Overview
The Real-Time Tracking Application allows users to track the location of devices in real-time using web technologies. It utilizes WebSocket communication for live updates and displays the locations on an interactive map.

![alt text](image.png)

## Tech Stack
- **Node.js**: JavaScript runtime for building the server-side application.
- **Express**: Web framework for Node.js, used to handle HTTP requests and serve static files.
- **Socket.IO**: Library for real-time web applications, enabling bi-directional communication between clients and the server.
- **Leaflet**: JavaScript library for interactive maps, used to display user locations on the map.
- **EJS**: Templating engine for rendering HTML views.

## Open Source Tools
- **Express**: Simplifies server creation and routing for Node.js applications.
- **Socket.IO**: Facilitates real-time communication, allowing clients to send and receive location data instantly.
- **Leaflet**: Provides a simple way to embed maps and markers in web applications.


## Setup Instructions
1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   node app.js
   ```
   Access the application at `http://localhost:9000`.

## Usage
- Open multiple browser tabs or windows to simulate different devices.
- Allow geolocation access when prompted.
- The application will display each device's location on the map.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

## License
This project is open-source and available under the MIT License.
