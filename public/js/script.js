const socket = io(); 
console.log("Socket ID:", socket.id); // Add this line in your script.js after initializing socket

if(navigator.geolocation){
   navigator.geolocation.watchPosition((position)=>{
      const { latitude, longitude } = position.coords;
      console.log("Current Position:", { latitude, longitude }); // Log the current position
      socket.emit("send-location", { latitude, longitude });
   
   }, (error)=>{
      console.error(" this is  bug here " +error);
   },
   {
      enableHighAccuracy:true,
      timeout:5000, 
      maximumAge:0
   }
)
}

const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
   attribution:"Your current location"
}).addTo(map);

// Changed to store markers by socket ID
const markers = {};

socket.on("recived-location",(data)=>{ 
   const {id, latitude, longitude} = data;
   
   map.setView([latitude, longitude], 16);
   
   // Create or update marker position
   if(markers[id]){
      markers[id].setLatLng([latitude, longitude]);
   } else {
      markers[id] = L.marker([latitude, longitude]).addTo(map);
   }
});

socket.on("user-disconnected", (id)=>{
   if(markers[id]){
      // Fixed: Correct method name and reference
      map.removeLayer(markers[id]);
      delete markers[id];
   }
});