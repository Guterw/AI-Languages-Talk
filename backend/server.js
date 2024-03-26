import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import sequelize from './config/db.js';
import seedData from './data/seedData.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import userRoutes from './routes/userRoutes.js';
import User from './models/userModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('API RESTful com Express e Swagger');
});

// Rota para documentação Swagger
const swaggerFilePath = join(__dirname, 'swagger', 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerFilePath);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

(async () => {
  await sequelize.sync({ force: true }); // Recria tabelas
  await User.bulkCreate(seedData);
  console.log('Seed data inserido com sucesso.');
})();
// Rotas da API
app.use('/api', userRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Express está rodando na porta ${PORT}`);
});
