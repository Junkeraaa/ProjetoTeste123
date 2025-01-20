import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());


app.use('/sexo', authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
