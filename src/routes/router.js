const express = require('express')
const { postAllAdvisors, getAllAdvisorsList } = require('../controllers/advisor.controller')
// const { postForget, getForget } = require('../controllers/forget.controller')
// const { postAllLoginsList, getAllLoginsList} = require('../controllers/login')
const { postAllProducers, getAllProducerList } = require('../controllers/producer.controller')
const { getAllSignups, postAllSignups } = require('../controllers/signup.controller')
const router = express.Router()


// router.get('/signup', getAllSignups)

// router.post('/signup', postAllSignups)

// router.post('/login',postAllLoginsList)

// router.get('/login',getAllLoginsList)

// router.post('/producer',postAllProducers)

// router.get('/producer',getAllProducerList)

// router.post('/advisor',postAllAdvisors)

// router.get('/advisor',getAllAdvisorsList)


// router.post('/forget-password',postForget)

// router.get('/forget-password',getForget)
module.exports = router