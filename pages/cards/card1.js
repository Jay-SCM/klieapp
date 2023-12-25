

// pages/cards/card1.js
import React from 'react';
import Header from '../../components/Header';
import BioCard from '../../components/BioCard';
import BioBox from '../../components/BioBox';
import VideoPlayer from '../../components/VideoPlayer';

const Card1 = () => {
  
  const videoId = 'DIY3TZpOcDU';

  return (
    <div>
      <Header />
      <h1>Card 1</h1>
      <p>This is the content for Card 1.</p>

      {/* Image Card */}
      <BioCard
        imageUrl="/sylvanas.jpg"
        title="Sylvanas Windrunner"
        description="The Dark Lady, Warchief of the Horde"
      />

      {/* Bio Box */}
      <BioBox />

      {/* Video Player */}
      <VideoPlayer videoId={videoId} />
    </div>
  );
};

export default Card1;

