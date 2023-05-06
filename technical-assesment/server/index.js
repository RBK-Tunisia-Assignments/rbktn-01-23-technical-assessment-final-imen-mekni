const express = require("express");
const app = express();
const PORT = 4000;
const cors = require('cors')
app.use(cors())

// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
