'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express().use(bodyParser.json());

const PORT = process.env.PORT || 1337

app.listen( PORT, () => console.log(`webhook is Running on port ${PORT}`));