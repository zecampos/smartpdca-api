"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with matrizes
 */
const Matrizes = use("App/Models/Matrize");
class MatrizeController {
  async index({ request, response, view }) {}

  async create({ request, response, view }) {}

  async store({ request, response }) {
    const data = request.only(["name"]);
    const matriz = await Matrizes.create(data);
    return response.status(200).send(matriz);
  }

  async show({ params, request, response, view }) {
    try {
      const matriz = await Matrizes.findOrFail(params.id);

      await matriz.load("file");
      return matriz;
    } catch (e) {
      return e;
    }
  }

  async edit({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = MatrizeController;
