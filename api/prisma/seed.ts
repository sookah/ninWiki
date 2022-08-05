// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const dev_user = await prisma.user.create({
    data: {
      name: 'Dev User',
      email: 'dev@academy.user',
    },
    select: {
      id: true,
    },
  });

  const villages = await prisma.village.createMany({
    data: [
      {
        title: 'Dev Academy',
        description:
          'Dev Academy Ninja Village is a training center in the city of Warsaw where you can learn to code and build web applications.',
        imageUrl: 'https://dev-academy.com/img/dev-academy-logo.png',
        userId: dev_user.id,
      },
      {
        title: 'Alliance Academy',
        description:
          'Alliance Academy Ninja Village is a training center in the city of Berlin. You can learn how to code and build game applications.',
        imageUrl: 'assets/logo/ninja.png',
        userId: dev_user.id,
      },
    ],
  });

  const ninjas = await prisma.ninja.createMany({
    data: [
      {
        id: 1,
        name: 'Nagato',
        familyName: 'Fujibayashi',
        lore: "Fujibayashi Nagato was a leader of the Iga ninjas during the 16th century, with his followers often serving the daimyo of Oomi domain in his battles against Oda Nobunaga.  This support for his opponents would later prompt Nobunaga to invade Iga and Koga and try to stamp out the ninja clans for good, but many of them went into hiding to preserve the culture.   Fujibayashi's family took steps to ensure that ninja lore and techniques would not die out. His descendant, Fujibayashi Yastake, compiled the Bansenshukai (the Ninja Encyclopedia).",
        imageUrl: 'assets/ninjas/Nagato.png',
        isAlive: true,
        villageId: 2,
      },
      {
        id: 2,
        name: 'Ishikawa',
        familyName: 'Goemon',
        lore: 'Ishikawa Goemon (石川 五右衛門, Ishikawa Goemon, August 24, 1558 – October 8, 1594) was a legendary Japanese outlaw hero who stole gold and other valuables to give to the poor.[1] He and his son were boiled alive in public after their failed assassination attempt on the Sengoku period warlord Toyotomi Hideyoshi. His legend lives on in contemporary Japanese popular culture, often giving him greatly exaggerated ninja skills. ',
        imageUrl: 'assets/ninjas/Goemon.png',
        isAlive: false,
        villageId: 2,
      },
    ],
  });

  console.log(dev_user, villages, ninjas);
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
