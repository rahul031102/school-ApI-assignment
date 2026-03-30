const express = require("express");
const router = express.Router();

const { addSchool, getSchools } = require("../models/school");
const getDistance = require("../utils/distance");

// ➤ Add School
router.post("/addSchool", (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).send("All fields required");
  }

  addSchool({ name, address, latitude, longitude }, (err, result) => {
    if (err) return res.status(500).json({ error: "All fields are required" });
    res.json({ "message": "School added successfully" });
  });
});

// ➤ List Schools
router.get("/listSchools", (req, res) => {
  const { latitude, longitude } = req.query;

  const userLat = parseFloat(latitude);
  const userLon = parseFloat(longitude);

  // validation
  if (userLat == null || userLon == null || isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: "Latitude & Longitude required" });
  }

  if (userLat < -90 || userLat > 90) {
    return res.status(400).json({ error: "Invalid latitude" });
  }

  if (userLon < -180 || userLon > 180) {
    return res.status(400).json({ error: "Invalid longitude" });
  }

  getSchools((err, schools) => {
    if (err) return res.status(500).json({ error: "Error fetching schools" });

    const sorted = schools
      .map((school) => {
        const distance = getDistance(
          userLat,
          userLon,
          school.latitude,
          school.longitude
        );
        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json({
      count: sorted.length,
      schools: sorted,
    });
  });
});

module.exports = router;