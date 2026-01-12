const express = require("express")
const GET_ALL_HEADER = require("../../controllers/1. Header/1. GET_ALL")
const GET_SINGLE_HEADER = require("../../controllers/1. Header/2. GET_SINGLE")
const { upload } = require("../../services/uploadService")
const POST_HEADER = require("../../controllers/1. Header/3. POST")
const UPDATE_HEADER = require("../../controllers/1. Header/4. UPDATE")
const DELETE_HEADER = require("../../controllers/1. Header/5. DELETE")

const router = express.Router()

router.route("/header")
.get(GET_ALL_HEADER)
.post(upload.single(`file`), POST_HEADER)

router.route("/header/:id")
.get(GET_SINGLE_HEADER)
.put(upload.single(`file`), UPDATE_HEADER)
.delete(DELETE_HEADER)

module.exports = router