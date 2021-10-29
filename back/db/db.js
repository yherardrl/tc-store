const mongoose = require("mongoose")
const chalk = require ("chalk")

mongoose.connect("mongodb+srv://tcstore:tcstore@cluster0.ggmgr.mongodb.net/tcstore?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection

db.on("error", console.error.bind(console, chalk.red("connection error:")));
db.once("open", () => console.log(chalk.magenta("Database connected")));