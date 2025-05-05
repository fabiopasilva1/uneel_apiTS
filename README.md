# uneel_apiTS

## Descrição

**uneel_apiTS** é uma API desenvolvida em TypeScript utilizando Express, com integração a RabbitMQ, MSSQL e autenticação via Strapi.
A aplicação segue princípios de orientação a objetos, possui testes automatizados com Jest e compressão de respostas HTTP.

---

## Funcionalidades

- Envio de mensagens para RabbitMQ via endpoint REST.
- Consultas a banco de dados MSSQL através de rotas HTTP.
- Autenticação de usuários utilizando o Strapi (JWT).
- Proteção de rotas privadas com middleware de verificação de token.
- Compressão automática das respostas HTTP.
- Cobertura de testes automatizada com Jest.

---

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/fabiopasilva1/uneel_apiTS.git
   cd uneel_apiTS
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure o arquivo `.env`:**

   ```env
   # RabbitMQ
   RABBITMQ_HOST=localhost
   RABBITMQ_PORT=5672
   RABBITMQ_USER=seu_usuario
   RABBITMQ_PASS=sua_senha

   # MSSQL
   MSSQL_USER=sa
   MSSQL_PASSWORD=sua_senha
   MSSQL_SERVER=localhost
   MSSQL_DATABASE=master

   # Strapi
   STRAPI_URL=http://localhost:1337

   # Porta do servidor
   PORT=3000
   ```

---

## Uso

### Iniciar em modo desenvolvimento

```bash
npm run dev
```

### Build para produção

```bash
npm run build
npm start
```

---

## Endpoints

### Autenticação

- **POST** `/api/strapi/login`
  - **Body:**
    ```json
    {
      "identifier": "usuario",
      "password": "senha"
    }
    ```
  - **Resposta:**
    ```json
    {
      "success": true,
      "token": "JWT"
    }
    ```

### Envio para RabbitMQ

- **POST** `/api/rabbitmq/send`
  - **Body:**
    ```json
    {
      "queue": "nome_da_fila",
      "message": "mensagem"
    }
    ```
  - **Resposta:**
    ```json
    {
      "success": true,
      "message": "Mensagem enviada ao RabbitMQ"
    }
    ```

### Consulta MSSQL

- **GET** `/api/mssql/query?sql=SELECT+1+AS+teste`
  - **Resposta:**
    ```json
    {
      "success": true,
      "result": [...]
    }
    ```

### Rota Privada (exemplo de proteção)

- **GET** `/api/private`
  - **Header:**
    ```
    Authorization: Bearer <token>
    ```
  - **Resposta:**
    ```json
    {
      "Authenticate": true
    }
    ```

---

## Testes

- **Executar todos os testes:**
  ```bash
  npm test
  ```
- **Cobertura de testes:**
  ```bash
  npm test -- --coverage
  ```

---

## Estrutura de Pastas

src/
controllers/
routes/
services/
utils/
app.ts
.env

---

## Tecnologias

- Node.js
- TypeScript
- Express
- RabbitMQ (amqplib)
- MSSQL (mssql)
- Strapi (autenticação)
- Jest (testes)
- Supertest (testes de integração)
- Compression (gzip)

---

## Observações

- As respostas JSON são automaticamente comprimidas.
- O código segue boas práticas de POO e separação de responsabilidades.
- O projeto está pronto para deploy em ambientes Docker e cloud.

---

[![CI](https://github.com/fabiopasilva1/uneel_apiTS/actions/workflows/ci.yml/badge.svg)](https://github.com/fabiopasilva1/uneel_apiTS/actions/workflows/ci.yml)

---

## Docker

Este projeto está pronto para execução em ambiente Docker, utilizando Docker Compose para orquestração dos serviços necessários.

### Requisitos

- **Docker** e **Docker Compose** instalados
- Node.js versão `22.13.1` (definida no Dockerfile)

> **Obs:** O arquivo `docker-compose.yml` já referencia as variáveis de ambiente necessárias para cada serviço. Ajuste os valores conforme sua necessidade.

### Build e Execução

Para construir e iniciar todos os serviços (API, RabbitMQ, MSSQL e Strapi), execute:

```bash
docker compose up --build
```

Isso irá:

- Construir a imagem da API TypeScript (`uneel-api`) com base no Dockerfile (Node.js 22.13.1-slim)
- Subir os containers de:
  - **uneel-api** (porta `3000`)
  - **RabbitMQ** (portas `5672` e `15672`)
  - **MSSQL** (porta `1433`)
  - **Strapi** (porta `1337`)
- Criar volumes persistentes para dados do RabbitMQ, MSSQL e Strapi

### Portas Expostas

- **API (uneel-api):** `3000`

### Observações Específicas

- O build da API utiliza duas etapas para otimizar o tamanho da imagem e garantir que apenas dependências de produção estejam presentes no ambiente final.
- Os serviços dependem uns dos outros conforme configurado em `docker-compose.yml` (ex: a API só inicia após RabbitMQ, MSSQL e Strapi estarem disponíveis).
- Os dados dos serviços são persistidos em volumes Docker nomeados.
- Para acessar a interface de administração do RabbitMQ, utilize: http://localhost:15672 (usuário e senha conforme `.env` ou compose).
- Para acessar o painel do Strapi: http://localhost:1337

---

[![Publish Docker image](https://github.com/fabiopasilva1/uneel_apiTS/actions/workflows/docker-image.yml/badge.svg)](https://github.com/fabiopasilva1/uneel_apiTS/actions/workflows/docker-image.yml)
