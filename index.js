import express from "express";
 
// INITIALIZATION 
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({
        message: "Default Request"
    });
});


///////////////////////////////////////////////////////////// 
// MOUNTING ROUTERS ? (check if 'router' is the correct term) 
// const wh = require("./routes/worldhealth/world_health.js")
import world_health_router from "./routes/world_health.js";
app.use("/world_health", world_health_router);

import terra_router from "./routes/terra_tracker.js";
app.use("/terra", terra_router); 



app.get("/weather", (req, res) => {
    res.json({
        message: "weather information not currently available" 
    })
});

app.get("/finance", (req, res) => {
    res.json({
        message: "financial information not currently available" 
    })
});

app.get("/intp", (req, res) => {
    res.json({
        message: "international affairs information not currently available" 
    })
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});








