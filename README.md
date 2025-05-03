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
   git clone <seu-repo>
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
