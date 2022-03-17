import React from 'react';
import ReactTooltip from "react-tooltip";

function WelcomeSection() {
  return (
    <React.Fragment>
      <div className="section">
        <div className="min-h-screen grid content-center bg-cover bg-no-repeat bg-center bg-local bg-overlay"
          style={
            {
              backgroundImage: `linear-gradient(180deg, rgba(0 0 0 / 40%), rgba(0 0 0 / 40%)), url(${require('../assets/img/amy_wallpaper.jpg')})`,
            }
          }
        >
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Sean bienvenidos a
                  </h1>
                  <img className="pt-10 pb-6 w-4/5 mx-auto"
                    src={require("../assets/img/amygio_logo.png")}
                    alt="amy-logo"
                    data-tip
                    data-for="logoThanks"
                  />
                  <ReactTooltip id="logoThanks" place="right" effect="solid">
                    Cortesía de Rodri19
                  </ReactTooltip>
                  <p className="text-lg text-blueGray-200 text-white">
                    Hola a todos!!! Soy AmyGio (A.K.A. Amy D. Gio), biotecnóloga de día que lucha para 
                    salvar al mundo del innombrable (el cobicho hehehe) y streamer de noche (porque todo 
                    superhéroe necesita de un pasatiempo xD) que gusta de ver anime y jugar, pricipalmente
                    league of legends, tambien damos consejos de vida y tenemos dos mascotas.
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

export default WelcomeSection;