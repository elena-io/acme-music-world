const app = require('./app');
const path = require('path');
const express = require('express');
const { syncAndSeed } = require('./db');

const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname, './assets')));


const init = async()=> {
  await syncAndSeed();
  app.listen(port, ()=> console.log(`listening on port ${port}`));
}

init();
