"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("./routes");
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = (0, express_1.default)();
const options = { customCssUrl: '/public/css/swagger-ui.css', customSiteTitle: "Ghibli.50 API - Swagger Documentation" };
app.use((0, cors_1.default)({
    exposedHeaders: 'x-total-count'
}));
app.use(express_1.default.json());
app.use('/public/css', express_1.default.static('public/css'));
app.use("/", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default, options));
app.use(routes_1.routes);
app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP Server Running!');
});
module.exports = app;
