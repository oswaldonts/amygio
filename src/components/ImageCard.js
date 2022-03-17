import React from 'react';

function ImageCard(props) {
  const {img, dataFor} = props;

  return (
    <React.Fragment>
      <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
        <img
          alt="..."
          className="max-w-full rounded-lg shadow-lg"
          src={require(`../assets/img/${img}`)}
          data-tip
          data-for={dataFor}
        />
      </div>
    </React.Fragment>
  )
}

export default ImageCard;