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
function insertUser(email, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                password
            }
        });
        console.log(res);
    });
}
function updateUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                email: "dipit@gmail.com"
            },
            data: {
                email: "dipitmadan@gmail.com"
            }
        });
        console.log(res);
    });
}
function deleteUser() {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedUser = yield prisma.user.delete({
            where: {
                email: 'random@gmail.com'
            }
        });
        console.log(deletedUser);
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const getUsers = yield prisma.user.findMany();
        console.log(getUsers);
    });
}
// insertUser("dipit@gmail.com", "Dipit", "Madan", "123456");
// updateUser()
insertUser("random@gmail.com", "random", "Madan", "1234");
insertUser("random1@gmail.com", "random1", "Madan", "12345");
deleteUser();
getAllUsers();
