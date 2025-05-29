import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

app.get('/apartments', async (_, res) => {
  const apartments = await prisma.apartment.findMany();
  res.json(apartments);
});

app.get('/apartments/:id', async (req, res) => {
  const id = Number(req.params.id);
  const apartment = await prisma.apartment.findUnique({ where: { id } }); //TODO add extra endpoint, check if all data included
  res.json(apartment);
});

app.post('/apartments', async (req, res) => {
    const { unitName, unitNumber, project, price, size, reserved } = req.body;
  
    try {
      const apartment = await prisma.apartment.create({
        data: {
          unitName,
          unitNumber,
          project,
          price,
          size,
          reserved,
        },
      });
      res.json(apartment);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create apartment', details: error });
    }
  });
  

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
