import { Request, RequestHandler, Response } from 'express';
import prisma from '../prisma/client';

export const getApartments = async (req: Request, res: Response) => {
  const skip = parseInt(req.query.skip as string) || 0;
  const take = parseInt(req.query.take as string) || 9; 

  try {
    const total = await prisma.apartment.count(); 

    const apartments = await prisma.apartment.findMany({
      skip,
      take,
      orderBy: { id: 'asc' },
    });

    res.json({ apartments, total });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch apartments', details: err });
  }
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
