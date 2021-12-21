import express from 'express';
import dotenv from 'dotenv';
import { errorHandler, notFound } from './middlewares/errorMiddleWare.js';
import userRoutes from './routes/usersRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on PORT ' + PORT);
});
