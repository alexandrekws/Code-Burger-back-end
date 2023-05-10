import express from "express";
import routes from "./routes";
import { resolve } from "path";
import cors from 'cors';
import { Sequelize } from "sequelize";

import "./database";

const port = process.env.PORT || 3001;
const sequelize = new Sequelize('postgres://admin:admin@localhost:5432/mydb', {
  dialectModule: require('pg')
});

require("dotenv").config();

class App {
  constructor() {
    this.app = express();
    this.app.use(cors())

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
