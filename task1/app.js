const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello mentor!'));


app.listen('3001', () => console.log(`Listening on port 3001, try: http://localhost:3001`));

