import React from 'react';
import SocialButton from './SocialButton';

function NetworkSection() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  
  return (
    <React.Fragment>
      <div className="section">
        <div className="min-h-screen grid content-center bg-gray-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Mis redes
                </h2>
                <p className="text-lg my-4 text-white">
                  Estas son mis redes sociales, te invito a seguirme en todas para que estemos en contacto
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12">
              <SocialButton brand="instagram" openLink={() => openLink('https://instagram.com/amygio21')}/>
              <SocialButton brand="tiktok" openLink={() => openLink('https://www.tiktok.com/@amygio')}/>
              <SocialButton brand="youtube" openLink={() => openLink('https://youtube.com/channel/UCPGASDQ8DE7GfK2NPEc1UkA')}/>
              <SocialButton brand="discord" openLink={() => openLink('https://discord.gg/6wsqMWM')}/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NetworkSection;