const express = require('express');

const Foods = require('./foodModel');

const router = express.Router();



router.get('/', (req, res) => {
    Foods.getFoods()
    .then(foods => {
        res.status(201).json({message: 'Rendering food list: ', foods})
    })
    .catch(err => {
        res.statu(500).json({errorMessage: 'Server error, food list not found.', err})
    })
})

router.post('/', (req, res) => {
    const newFood = req.body
    Foods.addFood(newFood)
        .then(food => {
            res.status(201).json({message: 'New food added.', food})
        })
        .catch(err => {
            res.status(500).json({errorMessage: 'The project could not be saved to the database.', err})
        })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    Foods.deleteFood(id)
    .then(deleted => {
        res.status(200).json({message: "Food item deleted"})
    })
    .catch(err => {
        res.status(500).json({errorMessage: 'Server error the food item could not be deleted.', err})
    })
})

module.exports = router;