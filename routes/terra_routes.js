/*
The Motion of the Terra, Our Earth. 

Tectonic plate tracking. 
Motion of the Ocean.
All the ways the Wind blows.
Rain Humidity and aridity. 
Weather or not, (/j) 
the Ice Caps are melting and what not.

A story told through slow, quiet monolithic motions 
climaxing with uncontrollable natural disasters- 
only for Terra to continue it's path.
*/
import express from "express"; 
const terra_router = express.Router();

terra_router.get("/", (req, res) => {
    res.json({
        message: "welcome to the Terra Channel",
    })
})



////////////////////////////////////////////////////  
// General Statistics 
import { usgs_earthquake_count } from "../sources/usgs-gov.js"; 
terra_router.get("/earthquakes", async (req, res) => usgs_earthquake_count(req,res))




// terra_router.get("earthquakes", (req, res) => {
//     try{
//     }
// })


export default terra_router; 









//////////////////////////////////////////////////// 
//// old method 
// import usgs_api from "../sources/usgs-gov.js";
// terra_router.use("/earthquakes", usgs_api)







