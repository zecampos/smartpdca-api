"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with acoes
 */
const Acoes = use("App/Models/Acoe");
class AcoeController {
  /**
   * Show a list of all acoes.
   * GET acoes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index({ request, response, view }) {
    const acoes = await Acoes.query()
      .with("file")
      .fetch();
    // await acoes.load("file");
    return acoes;
  }

  async store({ request, response }) {
    try {
      const data = request.all();
      console.log("data", data);
      const acoes = await Acoes.create(data);
      return response.status(200).send(acoes);
    } catch (err) {
      return response.status(500).send(err);
    }
  }

  async show({ params, request, response, view }) {
    try {
      const acao = await Acoes.find(params.id);
      await acao.load("file");
      return acao;
    } catch (err) {
      console.log(err);
      return response.status(err.status).send(err.message);
    }
  }

  async edit({ params, request, response, view }) {}

  /**
   * Update acoe details.
   * PUT or PATCH acoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a acoe with id.
   * DELETE acoes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = AcoeController;
