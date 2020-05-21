
exports.up = function(knex) {
    return knex.schema.createTable('carros', function (table){
        //  table.string('id').primary();
        table.increments();
         table.string('placa').notNullable();
         table.string('chassi').notNullable();
         table.string('renavam').notNullable();
         table.string('modelo').notNullable();
         table.string('marca').notNullable();
         table.string('ano').notNullable();
   
     })
   };
   
   exports.down = function(knex) {
     return knex.dropTable('carros')
   };
   //npx knex migrate:make nome_da_tabela
   //npx knex migrate:latest cria a tabelas e as informações a cima