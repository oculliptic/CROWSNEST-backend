/* https://earthquake.usgs.gov/fdsnws/event/1/ 
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

*/ 
import express from "express"; 
const usgs_api = express.Router(); 


// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 

// USGS Tracks earthquake data from around the WORLD 
// NUMBER OF EARTHQUAKES FROM starttime TO endtime 
usgs_api.get("/", async (req, res) => {
    try{ 
        const response = await fetch("https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=2014-01-01&endtime=2014-07-02");
        if(!response.ok) throw new Error (`API errror: ${response.status}`)
        const data = await response.json(); 
        res.json(data); 
        // WOAH! we just did a lot here.
        // let's digest. 

        // break down to... 
        // we error handle, async := how to integrate into my thinking while programming on my own? 
        // how did that respsonse work? was that the act of 3 way hand shaking?
    } catch {
        res.json({message: "error getting Earthquake - USGS data"})
    }
})
/*
Perhaps abstract this response function? 
because theres rounting, and then there are the functions right? 

YES: 
make sourses a file full of functions to communicate with external APIs 
make servies a file full of functions to call sources and organize their data for features.

*/ 






export default usgs_api; 



