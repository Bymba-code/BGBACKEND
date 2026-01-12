const express = require("express")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require("cookie-parser")

const headerRoute = require("./routes/1. Header")
const headerStyleRoute = require("./routes/2. HeaderStyle")
const headerMenuRoute = require("./routes/3. HeaderMenu")
const headerSubMenuRoute = require("./routes/4. HeaderSubMenus")
const headerTertiaryRoute = require("./routes/5. HeaderTertiaryMenu")

const app = express()

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174", "http://localhost:5175", "http://localhost:5176", "https://student.dlms.pro", "http://student.dlms.pro", "https://system.dlms.pro", "http://system.dlms.pro", "https://teacher.dlms.pro", "http://teacher.dlms.pro", "https://autoschools.dlms.pro", "https://spanel.dlms.pro", "http://localhost:5000"],
  credentials: true
}));

app.use(cookieParser())
app.use(express.json())

app.use(process.env.API_VERSION, headerRoute)
app.use(process.env.API_VERSION, headerStyleRoute)
app.use(process.env.API_VERSION, headerMenuRoute)
app.use(process.env.API_VERSION, headerSubMenuRoute)
app.use(process.env.API_VERSION, headerTertiaryRoute)

app.use('/uploads', express.static('uploads'));

app.listen(process.env.PORT, () => {
    console.log("APP LISTENING: " + " " + process.env.PORT)
})
