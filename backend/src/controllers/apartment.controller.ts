import { Request, RequestHandler, Response } from 'express';
import prisma from '../prisma/client';

export const getApartments = async (_: Request, res: Response) => {
  const apartments = await prisma.apartment.findMany();
  res.json(apartments);
};

export const getApartmentById: RequestHandler = async (req, res) => {
  const id = Number(req.params.id);
  const apartment = await prisma.apartment.findUnique({ where: { id } });
  if (!apartment) {
    res.status(404).json({ error: 'Not found' });
    return;  
  }
  res.json(apartment);
};

export const createApartment = async (req: Request, res: Response) => {
  const { unitName, unitNumber, project, price, size, reserved } = req.body;

  try {
    const apartment = await prisma.apartment.create({
      data: { unitName, unitNumber, project, price, size, reserved },
    });
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create apartment', details: error });
  }
};
