import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInstagram, faTiktok, faYoutube, faDiscord} from '@fortawesome/free-brands-svg-icons';

function SocialButton(props) {
  const {brand} = props;

  const color = {
    instagram: "bg-blue-400 text-white hover:bg-white hover:text-blue-400",
    tiktok: "bg-black text-white hover:bg-white hover:text-black",
    youtube: "bg-red-600 text-white hover:bg-white hover:text-red-600",
    discord: "bg-purple-500 text-white hover:bg-white hover:text-purple-500",
  };

  const name = {
    instagram: "Instagram",
    tiktok: "TikTok",
    youtube: "YouTube",
    discord: "Discord",
  };

  const icon = {
    instagram: faInstagram,
    tiktok: faTiktok,
    youtube: faYoutube,
    discord: faDiscord,
  }

  return (
    <React.Fragment>
      <div className="w-full lg:w-3/12 text-center">
        <button
          className={`${color[brand]} w-12 h-12 rounded-full`}
          type="button"
          onClick={props.openLink}
        >
          <FontAwesomeIcon icon={icon[brand]} />
        </button>
        <h5 className="text-xl mt-5 font-semibold text-white">
          {name[brand]}
        </h5>
      </div>
    </React.Fragment>
  )
}

export default SocialButton;