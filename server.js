require('dotenv').config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const connection = require("./config/db")
const app = express()

const userRouter = require("./routes/user")
const memberRouter = require("./routes/member")
const contentRouter = require("./routes/content")
const eventsRouter = require("./routes/events")
const commentRouter = require("./routes/comment")
const adminRouter = require("./routes/admin")
const artikelRouter = require("./routes/artikel")

const PORT = process.env.PORT || 3999

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
});

app.get("/", function(req,res){
    res.send("Hello World !");
})
app.use("/user", userRouter);
app.use("/member", memberRouter);
app.use("/content", contentRouter);
app.use("/events", eventsRouter);
app.use("/comments", commentRouter);
app.use("/admin", adminRouter);
app.use("/artikel", artikelRouter);
app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});