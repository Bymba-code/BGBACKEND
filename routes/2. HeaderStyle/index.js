const express = require("express")
const GET_ALL_HEADER_STYLE = require("../../controllers/2. HeaderStyle/1. GET_ALL")
const GET_SINGLE_HEADER_STYLE = require("../../controllers/2. HeaderStyle/2. GET_SINGLE")
const POST_HEADER_STYLE = require("../../controllers/2. HeaderStyle/3. POST")
const UPDATE_HEADER_STYLE = require("../../controllers/2. HeaderStyle/4. UPDATE")
const DELETE_HEADER_STYLE = require("../../controllers/2. HeaderStyle/5. DELETE")

const router = express.Router()

router.route("/header-style")
.get(GET_ALL_HEADER_STYLE)
.post(POST_HEADER_STYLE)

router.route("/header-style/:id")
.get(GET_SINGLE_HEADER_STYLE)
.put(UPDATE_HEADER_STYLE)
.delete(DELETE_HEADER_STYLE)


module.exports = router