
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
        {name: 'chicken', protein: '20', carbs: '0' , fat: '5'},
        {name: 'ribeye', protein: '32', carbs: '0' , fat: '23'},
        {name: 'spaghetti', protein: '5', carbs: '35' , fat: '2'},
        {name: 'rice', protein: '2', carbs: '40' , fat: '0'},
        {name: 'butter', protein: '5', carbs: '0' , fat: '14'},
      ]);
    });
};
