"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profileImage: { type: String, },
    role: { type: String, default: 'user' }
});
// Define the collection name as 'users' instead of 'Users'
const Users = mongoose_1.default.model('User', userSchema, 'users');
exports.default = Users;
//# sourceMappingURL=user.model.js.map