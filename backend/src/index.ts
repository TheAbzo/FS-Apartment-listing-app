import express from 'express';
import cors from 'cors';
import apartmentRoutes from './routes/apartment.routes';

const app = express();
const PORT = 4000;

// Allow frontend container (using service name `frontend`) to access backend
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.options('*', cors()); // Allow preflight

app.use(express.json());

app.use('/apartments', apartmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
