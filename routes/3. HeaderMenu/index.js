const express = require("express")
const GET_ALL_HEADER_MENU = require("../../controllers/3. HeaderMenu/1. GET_ALL")
const GET_SINGLE_HEADER_MENU = require("../../controllers/3. HeaderMenu/2. GET_SINGLE")
const POST_HEADER_MENU = require("../../controllers/3. HeaderMenu/3. POST")
const UPDATE_HEADER_MENU = require("../../controllers/3. HeaderMenu/4. UPDATE")
const DELETE_HEADER_MENU = require("../../controllers/3. HeaderMenu/5. DELETE")

const router = express.Router()

router.route("/header-menu")
.get(GET_ALL_HEADER_MENU)
.post(POST_HEADER_MENU)

router.route("/header-menu/:id")
.get(GET_SINGLE_HEADER_MENU)
.put(UPDATE_HEADER_MENU)
.delete(DELETE_HEADER_MENU)

module.exports = router