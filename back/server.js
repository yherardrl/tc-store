require("./db/db");
const app = require("./app");
const chalk = require("chalk");


const PORT = 1337;
app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);
