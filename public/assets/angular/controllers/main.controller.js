// @ts-nocheck

window.app.controller('MainController', function ($scope) {
    $scope.tools = [
        {
            name: "Node.js",
            description: "Ambiente de execução JavaScript.",
            cover: "./assets/img/node-cover.png"
        },
        {
            name: "SQLite",
            description: "Biblioteca que implementa um mecanismo de banco de dados SQL.",
            cover: "./assets/img/sqlite-cover.png"
        },
        {
            name: "Prisma ORM",
            description: "Ferramenta de mapeamento objeto-relacional para Node.js e TypeScript.",
            cover: "./assets/img/prisma-cover.png"
        },
        {
            name: "AngularJS",
            description: "Superheroic JavaScript MVW Framework.",
            cover: "./assets/img/angular-cover.png"
        }
    ]
});