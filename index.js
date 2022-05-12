"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const xss = require("xss-clean");
const hpp_1 = __importDefault(require("hpp"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const config_1 = __importDefault(require("./config"));
const users_1 = __importDefault(require("./Routers/users"));
const admin_1 = __importDefault(require("./Routers/admin"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.default.DATA_BASE + "cb55967d22af36ac36ecd65ac373c4ad")
    .then(() => {
    console.log(`connected to ${config_1.default.DATA_BASE}`);
})
    .catch(() => {
    console.log(`cant connected to ${config_1.default.DATA_BASE}`);
});
app.use((0, express_mongo_sanitize_1.default)(), (0, helmet_1.default)(), xss(), (0, hpp_1.default)());
app.use("/admin", admin_1.default);
app.use("/", users_1.default);
app.use("/", express_1.default.static("Public"));
app.listen(config_1.default.PORT, () => {
    console.log(`app run in ${config_1.default.PORT}`);
});
