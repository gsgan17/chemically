import dotenv from 'dotenv';
import express from 'express';
import compoundRoutes from './routes/compoundRoutes.js';
import sequelize from './config/database.js';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT;

console.log(port);

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use("/api/compounds", compoundRoutes);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
