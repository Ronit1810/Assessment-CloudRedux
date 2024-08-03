
const express = require('express');
const controllers = require('../controllers/event.js')

const route = express.Router();

route.post('/post', controllers.eventDetail)
route.get('/get', controllers.getDetail)
route.get('/get/:id',controllers.getEventById) 
route.put('/:id',controllers.updateEvent)


module.exports = route