
// PRE: /world_health 
import express from "express"; 
const world_health_router = express.Router(); 

world_health_router.get("/", (req, res) => {
    res.json({
        message: "more info required"
    })
})
///////////////////////////////////////////


world_health_router.get("/outbreaks", (req, res) => {
    res.json({
        message: "get outbreaks.js"
    })
})

world_health_router.get("/diseases", (req, res) => {
    res.json({
        message: "statistics on each disease. Which diseases are most prominent? taking the most lives within the decade, etc. so this would have to take a cause of death statistics and then filter from there."
    })
})

world_health_router.get("/death", (req, res) => {
    res.json({
        message: "number of deaths per day? per hour? causes?"
    })
})



world_health_router.get("/population", (req, res) => {
    res.json({
        message: "population in each country"
    })
})






export default world_health_router;










