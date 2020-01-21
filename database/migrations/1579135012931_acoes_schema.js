"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AcoesSchema extends Schema {
  up() {
    this.create("acoes", table => {
      table.increments();
      table
        .integer("matrizes_id")
        .unsigned()
        .references("id")
        .inTable("matrize")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table.string("conjunto").notNullable();
      table.string("fase").notNullable();
      table.string("descricao").notNullable();
      table.string("link_principal");
      table.string("nome_responsavel");
      table.integer("situacao_responsavel").notNullable();
      table.string("observacao_responsavel");
      table.timestamp("data_conclusao_responsavel");
      table.string("nome_contador");
      table.integer("situacao_contador").notNullable();
      table.string("observacao_contador");
      table.timestamp("data_conclusao_contador");
      table.string("nome_informado");
      table.string("observacao_informado");
      table.integer("receita_prevista");
      table.integer("despesa_prevista");
      table.integer("saldo_previsto");
      table.integer("receita_realizada");
      table.integer("despesa_realizada");
      table.integer("saldo_realizado");
      table.timestamps();
    });
  }

  down() {
    this.drop("acoes");
  }
}

module.exports = AcoesSchema;
