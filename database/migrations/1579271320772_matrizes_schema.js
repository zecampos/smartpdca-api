"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MatrizesSchema extends Schema {
  up() {
    this.create("matrizes", table => {
      table.increments();
      table.string("name").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("matrizes");
  }
}

module.exports = MatrizesSchema;
