// pages/about.js
// import React from 'react';
// import Card from '/components/Card'; 

// const About = () => {
//   // Example data for cards
//   const cardData = [
//     { id: 1, title: 'Ahri', imageUrl: '/ahri.jpg', linkTo: '/card1' },
//     { id: 2, title: 'Bwonsamdi', imageUrl: '/bwonsamdi.jpg', linkTo: '/card2' },
//     { id: 3, title: 'Elise', imageUrl: '/elise.jpg', linkTo: '/card3' },
//     { id: 4, title: 'Garosh Helscream', imageUrl: '/gar.jpg', linkTo: '/card4' },

//     { id: 5, title: 'Akali', imageUrl: '/akali.jpg', linkTo: '/card5' },
//     { id: 6, title: 'Morgana', imageUrl: '/morgana.jpg', linkTo: '/card6' },
//     { id: 7, title: 'Thrall', imageUrl: '/thrall3.jpg', linkTo: '/card7' },
//     { id: 8, title: 'Neeko', imageUrl: '/Neeko.jpg', linkTo: '/card8' },

//     { id: 9, title: 'Sylvanas windrunner', imageUrl: '/sylvanas.jpg', linkTo: '/card9' },
//     { id: 10, title: 'Jaina Proudmore', imageUrl: '/jaina.webp', linkTo: '/card10' },
//     { id: 11, title: 'Bane Bloodhoof', imageUrl: 'bain4.webp', linkTo: '/card11' },
//     { id: 12, title: 'Varien Wryn', imageUrl: '/varien2.webp', linkTo: '/card12' },

//   ];

//   return (
//     <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
//       {cardData.map((card) => (
//         <Card key={card.id} {...card} />
//       ))}
//     </div>
//   );
// };

// export default About;

// including links for each card 


// pages/about.js
import React from 'react';
import Card from '../components/Card';
import Link from 'next/link';

const About = () => {
  // Example data for cards
  const cardData = [
    { id: 1, title: 'Ahri', imageUrl: '/ahri.jpg', linkTo: '/cards/card1' },
    { id: 2, title: 'Bwonsamdi', imageUrl: '/bwonsamdi.jpg', linkTo: '/cards/card2' },
    { id: 3, title: 'Elise', imageUrl: '/elise.jpg', linkTo: '/cards/card3' },
    { id: 4, title: 'Garosh Helscream', imageUrl: '/gar.jpg', linkTo: '/cards/card4' },
    { id: 5, title: 'Akali', imageUrl: '/akali.jpg', linkTo: '/cards/card5' },
    { id: 6, title: 'Morgana', imageUrl: '/morgana.jpg', linkTo: '/cards/card6' },
    { id: 7, title: 'Thrall', imageUrl: '/thrall3.jpg', linkTo: '/cards/card7' },
    { id: 8, title: 'Neeko', imageUrl: '/Neeko.jpg', linkTo: '/cards/card8' },
    { id: 9, title: 'Sylvanas windrunner', imageUrl: '/sylvanas.jpg', linkTo: '/cards/card9' },
    { id: 10, title: 'Jaina Proudmore', imageUrl: '/jaina.webp', linkTo: '/cards/card10' },
    { id: 11, title: 'Bane Bloodhoof', imageUrl: 'bain4.webp', linkTo: '/cards/card11' },
    { id: 12, title: 'Varien Wryn', imageUrl: '/varien2.webp', linkTo: '/cards/card12' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', padding: '20px' }}>
      {cardData.map((card) => (
        <Link key={card.id} href={card.linkTo} passHref>
          <Card {...card} />
        </Link>
      ))}
    </div>
  );
};

export default About;
