const express = require("express");
const router = express.Router();

const { getUser, createUser, getUserId } = require("../controllers/User");

router.get('/',getUser)
router.get('/login',getUserId)

router.post('/register',createUser)


module.exports = router;