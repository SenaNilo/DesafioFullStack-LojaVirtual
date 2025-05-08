// @ts-nocheck

window.app.controller('MainController', function ($scope) {
    $scope.tools = [
        {
            name: "Node.js",
            description: "Ambiente de execução JavaScript.",
            cover: "./assets/img/node-cover.png",
            redirect: "https://nodejs.org/pt"
        },
        {
            name: "SQLite",
            description: "Biblioteca que implementa um mecanismo de banco de dados SQL.",
            cover: "./assets/img/sqlite-cover.png",
            redirect: "https://www.sqlite.org/"
        },
        {
            name: "Prisma ORM",
            description: "Ferramenta de mapeamento objeto-relacional para Node.js e TypeScript.",
            cover: "./assets/img/prisma-cover.png",
            redirect: "https://www.prisma.io/"
        },
        {
            name: "AngularJS",
            description: "Superheroic JavaScript MVW Framework.",
            cover: "./assets/img/angular-cover.png",
            redirect: "https://angularjs.org/"
        },
        {
            name: "Sass",
            description: "CSS com super poderes",
            cover: "./assets/img/sass-cover.png",
            redirect: "https://sass-lang.com/"
        }
    ]
});