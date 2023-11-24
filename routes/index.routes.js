const router = require("express").Router();
const Robot = require("../models/Robot.model");

router.get("/all-robots", (req, res, next) => {
  Robot.find()
    .then((allRobots) => res.json(allRobots))
    .catch((err) => next(err));
});

router.post("/create-robot", (req, res, next) => {
  Robot.create(req.body)
    .then((newRobot) => res.json(newRobot))
    .catch((err) => next(err));
});

module.exports = router;
