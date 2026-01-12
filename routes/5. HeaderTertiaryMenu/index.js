const express = require("express")
const GET_ALL_HEADER_TERTIARY = require("../../controllers/5. HeaderTertiaryMenu/1. GET_ALL")
const GET_SINGLE_HEADER_TERTIARY = require("../../controllers/5. HeaderTertiaryMenu/2. GET_SINGLE")
const POST_HEADER_TERTIARY = require("../../controllers/5. HeaderTertiaryMenu/3. POST")
const UPDATE_HEADER_TERTIARY = require("../../controllers/5. HeaderTertiaryMenu/4. UPDATE")
const DELETE_HEADER_TERTIARY = require("../../controllers/5. HeaderTertiaryMenu/5. DELETE")


const router = express.Router()

router.route("/header-tertiary")
.get(GET_ALL_HEADER_TERTIARY)
.post(POST_HEADER_TERTIARY)

router.route("/header-tertiary/:id")
.get(GET_SINGLE_HEADER_TERTIARY)
.put(UPDATE_HEADER_TERTIARY)
.delete(DELETE_HEADER_TERTIARY)

module.exports = router