"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3100;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
app.use(express_1.default.json());
app.use("/api/contacts", contactRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.default = app;
