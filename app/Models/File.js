"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class File extends Model {
  acao() {
    return this.belongsTo("App/Models/Acoe");
  }
}

module.exports = File;
