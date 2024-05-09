# Gerenciamento de usuários - CRUD

O desafio consiste em um CRUD para gerir usuários ficticios.
Dentre as funcionalidades além das criar/editar/apagar um usuário, há login e validação do acesso para rota privada e rotas válidas.

## Instruções
#### Para obter o projeto e usar localmente é necessário clonar o projeto por um dos seguintes métodos:

- HTTPS
```
git clone https://github.com/brasfx/manage-users-CRUD.git
````
- SSH
```
git@github.com:brasfx/manage-users-CRUD.git
```
- GitHub CLI
```
gh repo clone brasfx/manage-users-CRUD
```

#### Para usar o projeto localmente, siga os seguintes passos:

1° Instalar as dependencias do projeto
```
npm install
```
2° Inciar o projeto
```
npm run dev
```
3° Iniciar o servidor do JSON Server
```
npm run server
```
#### As rotas de acessos são:
- Aplicação
```
http://localhost:5173/
```
- Servidor

Index:
```js
http://localhost:3001/
```
Endpoints:
```
http://localhost:3001/users
```
A aplicação também pode ser acessada remotamente pelo link: https://manage-users-crud.vercel.app/

## Tecnologias
 - React
 - TypeScript
 - JSON Server
 - Material UI
 - Vite
 - React Router
 - Formik
 - yup
 - Axios
 - Notistack
