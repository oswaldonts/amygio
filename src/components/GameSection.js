import React from 'react';
import ReactTooltip from 'react-tooltip';
import ImageCard from './ImageCard';

function GameSection() {
  return (
    <React.Fragment>
      <div className="section">
        <div className="min-h-screen grid content-center bg-gray-200">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">Que jugamos</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Principalmente league of legends pero también jugamos muchos otros juegos como 
                    por ejemplo Resident Evil 4, Emily Wants to Play, Genshin Impact, God of War (2018) 
                    entre otros.
                  </p>
                </div>
              </div>
              <ImageCard img="soraka-star.jpg" dataFor="sorakaStar" />
              <ReactTooltip id="sorakaStar" place="left" effect="solid">
                ♥‿♥
              </ReactTooltip>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GameSection;