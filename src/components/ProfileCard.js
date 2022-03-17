import React from 'react';

function ProfileCard(props) {
  const {img, dcName, desc, dataFor} = props;

  return (
    <React.Fragment>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-14">
          <img
            src={require(`../assets/img/${img}`)}
            className="shadow-lg rounded-full mx-auto"
            data-tip
            data-for={dataFor}
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">{dcName}</h5>
            <p className="mt-1 text-sm text-gray-400 uppercase font-semibold">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProfileCard;
