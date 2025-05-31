import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const projects = ['New Cairo', 'Sheikh Zayed', '6th October', 'Maadi', 'Nasr City'];

  for (let i = 0; i < 50; i++) {
    await prisma.apartment.create({
      data: {
        unitName: `Unit ${faker.string.alphanumeric(3).toUpperCase()}`,
        unitNumber: faker.number.int({ min: 100, max: 999 }).toString(),
        project: faker.helpers.arrayElement(projects),
        price: faker.number.float({ min: 3000, max: 20000, fractionDigits: 2 }),
        size: faker.number.float({ min: 40, max: 250, fractionDigits: 1 }),
        reserved: faker.datatype.boolean(),
      },
    });
  }
}

main()
  .then(() => {
    console.log('Seeded 50 apartments successfully!');
    return prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
