<p align="center">
  <h1 align="center">Loja Virtual</h1>
  <p align="center"><strong>O Restaurante do futuro</strong></p>
</p>

## Sobre o Projeto
Uma breve descrição sobre o que esse projeto faz e para quem ele é

<!--
npm install -D nodemon 

npx prisma init 

npm install bcrypt

Inicializar os dados do projeto
npx prisma db seed

Comando OPCIONAL! 
npm run clear: Feito para limpar o banco de dados
-->


## Equipe

- [Danilo Sena Santos](https://github.com/SenaNilo)
- [Gabriel Eringer de Oliveira](https://github.com/GEdO23)


## Funcionalidades

- 🍕 Autenticação com login
- 🍔 Criptografia de senhas
- 🍟 Visualize o cardápio completo do restaurante
- 🌭 Veja mais detalhes sobre um prato específico
- 🥓 Crie e adicione um novo prato ao cardápio
- 🥞 Coloque pratos desejados no carrinho de compras
- 🥪 Aumente a quantidade que deseja de um prato no carrinho de compras
- 🥨 Remova um prato do carrinho de compras


## Ferramentas
Estas são as ferramentas que utilizamos para desenvolver este projeto:

- **Backend**
  - Node.js (JavaScript)
  - SQLite
  - Prisma ORM

- **Frontend**
  - AngularJS
  - Sass

- **Testes de API**
  - Postman


## Rodando Localmente
Para rodar este projeto em sua máquina, siga estas etapas:

### Pré-requisitos
O que você precisa para executar a Loja Virtual em seu computador:

- Node.js

### Configurações

1. Clone o repositório:
```sh
git clone https://github.com/SenaNilo/DesafioFullStack-LojaVirtual
```

2. Vá para a pasta do projeto
```sh
cd DesafioFullStack-LojaVirtual
```

3. Instale as dependências do projeto com npm
```sh
npm install
```

4. Configure seu arquivo `.env`
```
DATABASE_URL="file:./dev.db"
ACCESS_KEY="chavedpscolocar"
```

5. Gere o Prisma Client
```sh
npx prisma generate
```

6. Inicie o servidor na sua máquina
```sh
npm run dev
```

7. Inicie o Prisma Studio na sua máquina _(opcional)_
```sh
npx prisma studio
```


<!-- 
TODO: Adicione a licença do projeto 
## Licença
[MIT](https://choosealicense.com/licenses/mit/) -->
