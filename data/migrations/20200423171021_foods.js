
exports.up = function (knex) {
    return (
        knex.schema
            .createTable('foods', tbl => {
                tbl.increments();
                tbl.string('name', 128)
                    .notNullable()
                tbl.string('protein', 128)
                    .notNullable()
                tbl.string('carbs', 128)
                    .notNullable()
                tbl.string('fat', 128)
                    .notNullable()
            })
    )
};

exports.down = function (knex) {
    return(
        knex.schema
            .dropTableIfExists('foods')
    )
};
