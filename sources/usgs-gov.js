/* https://earthquake.usgs.gov/fdsnws/event/1/ 
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

*/ 
// import express from "express"; 
// const usgs_api = express.Router(); 


// https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 

// USGS Tracks earthquake data from around the WORLD 
// NUMBER OF EARTHQUAKES FROM starttime TO endtime 
// usgs_api.get("/", async (req, res) => count(req,res))

// CACHING 
let cache = {
    data: null,
    fetchedAt: null
};
const cache_TIME = 60 * 60 * 1000; // to be imported later 


export async function usgs_earthquake_count(req, res){ 
    try{ 
        const now = Date.now();

        // Check if cache got anything in it 
        if (cache.data && now - cache.fetchedAt < cache_TIME){
            return res.json(cache.data);} 

        // Takes in these parameters, because the count API of USGS accepts these parameters. 
        const startTime = "2014-01-01"; 
        const endTime = "2014-07-02"; 
        const resp = await fetch(`https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${startTime}&endtime=${endTime}`); 
        if(!resp.ok) throw new Error (`API Error: ${resp.status}`); 
        cache = {
            data: resp,
            fetchedAt: now
        };

        const data = await resp.json(); 
        return res.json(data); 
    } catch (e) { // Any error thrown is caught in parameter e 
        res.status(500).json({message: e.message})
        // error status 500: General INternal server error. 
        // so not that specific.
    }
}














//export default usgs_api; 



