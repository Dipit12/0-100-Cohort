"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, email, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                email,
                password,
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
;
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany();
        console.log(res);
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const updateUser = yield prisma.user.update({
            where: {
                email: "aarav@gmail.com",
            },
            data: {
                email: "aaravraina@gmail.com"
            }
        });
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedUser = yield prisma.user.delete({
            where: {
                email: "aaravraina@gmail.com"
            }
        });
    });
}
// insertUser("Dipit12", "dipit@gmail.com", "123456", "Dipit", "Madan");
// insertUser("tithi21", "tithi@gmail.com", "123456", "Tithi", "shah");
// insertUser("aarav03", "aarav@gmail.com", "123456", "Aarav", "Raina");
updateUser();
getAllUsers();
deleteUser();
getAllUsers();
