"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const bson_1 = require("bson");
class Movie {
    constructor(props, id) {
        var _a;
        this._id = id !== null && id !== void 0 ? id : new bson_1.ObjectId().toString();
        this.props = Object.assign(Object.assign({}, props), { created_at: (_a = props.created_at) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    get ghibli_id() {
        return this.props.ghibli_id;
    }
    set ghibli_id(ghibli_id) {
        this.props.ghibli_id = ghibli_id;
    }
    get title() {
        return this.props.title;
    }
    set title(title) {
        this.props.title = title;
    }
    get banner() {
        return this.props.banner;
    }
    set banner(banner) {
        this.props.banner = banner;
    }
    get description() {
        return this.props.description;
    }
    set description(description) {
        this.props.description = description;
    }
    get director() {
        return this.props.director;
    }
    set director(director) {
        this.props.director = director;
    }
    get producer() {
        return this.props.producer;
    }
    set producer(producer) {
        this.props.producer = producer;
    }
    get created_at() {
        return this.props.created_at;
    }
}
exports.Movie = Movie;
//# sourceMappingURL=movie.js.map