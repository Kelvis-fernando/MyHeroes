const express = require('express');
const app = express();

app.use(express.static("App")); 
app.get('/*', (req, res) => {
res.sendFile(`${__dirname}/app/index.html`);
});

app.listen(process.env.PORT);