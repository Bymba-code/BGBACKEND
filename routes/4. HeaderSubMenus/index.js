const express = require("express")
const GET_ALL_HEADER_SUBMENU = require("../../controllers/4. HeaderSubMenus/1. GET_ALL")
const GET_SINGLE_HEADER_SUBMENU = require("../../controllers/4. HeaderSubMenus/2. GET_SINGLE")
const POST_HEADER_SUBMENU = require("../../controllers/4. HeaderSubMenus/3. POST")
const UPDATE_HEADER_SUBMENU = require("../../controllers/4. HeaderSubMenus/4. UPDATE")
const DELETE_HEADER_SUBMENU = require("../../controllers/4. HeaderSubMenus/5. DELETE")

const router = express.Router()

router.route("/header-submenu")
.get(GET_ALL_HEADER_SUBMENU)
.post(POST_HEADER_SUBMENU)

router.route("/header-submenu/:id")
.get(GET_SINGLE_HEADER_SUBMENU)
.put(UPDATE_HEADER_SUBMENU)
.delete(DELETE_HEADER_SUBMENU)

module.exports = router