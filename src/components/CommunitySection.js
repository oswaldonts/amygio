import React from 'react';
import ReactTooltip from 'react-tooltip';
import ProfileCard from './ProfileCard';

function CommunitySection() {
  return (
    <React.Fragment>
      <div className="section">
        <div className="min-h-screen grid content-center bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Nuestros héroes xD</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Tenemos una comunidad que está dispuesta a ayudar y con la cual todos pasamos un
                  momento muy agradable.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <ProfileCard
                img="the-hammerban.jpg"
                dcName="CarlosElric"
                desc="El de los panes"
              />
              <ProfileCard 
                img="the-happy-feet.jpg"
                dcName="combo_wombo"
                desc="El pies alegres"
              />
              <ProfileCard 
                img="the-gamer.jpg"
                dcName="Just Viruz"
                desc="El que juega bien lol"
                dataFor="viruz"
              />
              <ReactTooltip id="viruz" place="top" effect="solid">
                Ella no es Viruz xD
              </ReactTooltip>
              <ProfileCard 
                img="the-designer.jpg"
                dcName="Rodri19"
                desc="El de los op clásicos"
                dataFor="rodri"
              />
              <ReactTooltip id="rodri" place="top" effect="solid">
                OP de Opening no de One Piece hehehe
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CommunitySection;