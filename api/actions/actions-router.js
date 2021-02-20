
const express = require('express');

const router = express.Router(); 

const actions = require('./actions-model');


router.get('/api/actions', (req, res, next) => {

    actions.get()

    .then(action => {
        return res.status(201).json(action)
    })
    .catch(error => {
        next(error)
    })
})

router.get('/api/actions/:id', (req, res, next) => {
   
    actions.get(req.params.id)

    .then(action => {
        return res.status(201).json(action)
    })
    .catch(error => {
        next(error)
    })

})

router.post('/api/actions', (req, res, next) => {

    actions.insert(req.body)

    .then(action => {
        return res.status(201).json(action)
    })
    .catch(error => {
        next(error)
    })
})

router.put('/api/actions/:id', (req, res, next) => {

    actions.update(req.params.id, req.body)

    .then(action => {
        if(action) {
            return res.status(200).json(action)
        } else {
            return res.status(400).json({
                message: "The action could not be found"
            })
        }
    })
    .catch(error => {
        next(error)
    })
})

router.delete('/api/actions/:id', (req, res, next) => {

    actions.remove(req.params.id)

    .then(action => {
        if(action > 0) {
            return res.status(200).json({
                message: "Action was deleted"
            })
        } else {
            return res.status(404).json({
                errorMessage: "There was a problem deleting the action"
            })
        }
    })
    .catch(error => {
        next(error)
    })
})


module.exports = router; 