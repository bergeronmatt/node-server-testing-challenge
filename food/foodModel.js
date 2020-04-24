const db = require('../data/dbConfig');

function getFoods () {
    return db('foods');
}

function findFood (id) {
    return db('foods').where({id}).first();
}

function addFood(food){
    return db('foods')
        .insert(food, 'id')
        .then(([id]) => {
            return findFood(id)
        })
}

function deleteFood(id) {
    return db('foods')
        .where('id', Number(id))
        .del();
}

module.exports = {
    findFood,
    getFoods,
    addFood,
    deleteFood
}