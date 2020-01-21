"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Matriz = use("App/Models/Matriz");
class MatrizController {
  async index({ request, response, view }) {}

  async store({ request, response }) {
    // try {
    const data = request.only(["nome"]);
    const matriz = await Matriz.create(data);
    return response.status(200).send(matriz);
    // } catch (err) {
    //   return response.status(err.status).json({
    //     error: {
    //       message: "Erro ao Criar Matriz",
    //       err_message: err.message
    //     }
    //   });
    // }
  }

  async show({ params, request, response, view }) {}

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = MatrizController;
