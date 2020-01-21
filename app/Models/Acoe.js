"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Acoe extends Model {
  file() {
    return this.hasMany("App/Models/File");
  }
}

module.exports = Acoe;
