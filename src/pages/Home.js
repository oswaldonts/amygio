import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import WelcomeSection from '../components/WelcomeSection';
import AnimeSection from '../components/AnimeSection';
import GameSection from '../components/GameSection';
import CommunitySection from '../components/CommunitySection';
import NetworkSection from '../components/NetworkSection';

function Home() {
  return (
    <ReactFullpage
      // licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {1000}
      anchors = {['welcome', 'anime', 'games', 'community', 'networks']}
      navigation

      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <WelcomeSection />
            <AnimeSection />
            <GameSection />
            <CommunitySection />
            <NetworkSection />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Home;
