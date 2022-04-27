const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
	res.send('<h2 style="color: teal; text-align: center">Server is running again</h2>');
});

app.listen(PORT,HOST);
console.log(`Server is running on http://${HOST}:${PORT}`);

