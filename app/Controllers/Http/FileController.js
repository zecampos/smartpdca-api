"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with files
 */
const Drive = use("Drive");
const File = use("App/Models/File");
let currentUrl = null;
let currentName = null;
let currentFile = null;
let currentType = null;
let currentSubtype = null;

class FileController {
  /**
   * Show a list of all files.
   * GET files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new file.
   * GET files/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new file.
   * POST files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params }) {
    try {
      await request.multipart
        .file("file", {}, async file => {
          const ContentType = file.headers["content-type"];
          const ACL = "public-read";
          const Key = `${(Math.random() * 100).toString(32)}-${
            file.clientName
          }`;
          const error = file.error();
          if (error.message) {
            throw new Error(error.message);
          }
          const url = await Drive.put(Key, file.stream, {
            ContentType,
            ACL
          });

          currentUrl = url;
          currentName = file.clientName;
          currentFile = Key;
          currentType = file.type;
          currentSubtype = file.subtype;
        })
        .process();

      // console.log("....", {
      //   currentUrl,
      //   currentName,
      //   currentFile,
      //   currentType,
      //   currentSubtype
      // });
      const fileCreated = await File.create({
        file: currentFile,
        name: currentName,
        url: currentUrl,
        type: currentType,
        subtype: currentSubtype,
        acoe_id: params.acoes_id
      });
      return fileCreated;
    } catch (err) {
      console.log("err", err);
      return response.status(err.status).json({
        error: {
          message: "Não foi possivel fazer upload do arquivo",
          err_message: err.message
        }
      });
    }
  }

  /**
   * Display a single file.
   * GET files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing file.
   * GET files/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update file details.
   * PUT or PATCH files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a file with id.
   * DELETE files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = FileController;
