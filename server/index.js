const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 4444;
app.listen(port, () => {
    console.log(`[SUCCESS] Port ${port} active`);
});
