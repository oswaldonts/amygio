import React from 'react';
import ImageCard from './ImageCard';

function AnimeSection() {
  return (
    <React.Fragment>
      <div className="section">
        <div className="min-h-screen grid content-center">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <ImageCard img="one-piece.jpg" />
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">Que hacemos</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Al iniciar stream hablamos sobre que hemos hecho en la semana y también 
                    planificamos que actividades podemos hacer durante el stream, además también 
                    reaccionamos videos de anime e incluso reaccionamos a episodios completo, aunque
                    tenemos que hacerlo por discord.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Anime que sigo actualmente: One Piece, Kimetsu no Yaiba, Attack on Titan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AnimeSection;