import express from 'express';
import apartmentRoutes from './routes/apartment.routes';
  
const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/apartments', apartmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});