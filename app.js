const express = require("express"); 
const http = require("http"); 
const app = express(); // Create an instance of the Express application
const path = require('path'); // Import the path module

const socket = require("socket.io"); 

// Create an HTTP server using the Express application
const server = http.createServer(app);

// Upgrade the HTTP server to support WebSocket connections with Socket.IO
const io = socket(server);

//! set up the veiw engine 
app.set("view engine" ,"ejs"); 

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));


// handle the socket connection 
io.on("connection" , ( socket)=>{
   // if the connection is their 
   socket.on("send-location", (location_Data) => {
      console.log("Location sent:", location_Data); // Log the location data
      io.emit("recived-location", { id: socket.id, ...location_Data });
   });
   
   // accepting the location from the frontend send by script 

     //!to deconnect 
      socket.on("disconnect", (id)=>{
         io.emit("user-disconnected", socket.id);
      })
})
// Define a route for the root URL
app.get("/", (req, res) => {
   res.render("index");  // so when someone comes i render the index.ejs 
});


server.listen(9000, () => {
   console.log("Server is listening on port 3000");
});
