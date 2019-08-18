import React from 'react';
import PropTypes from 'prop-types';
import HouseListRow from './HouseListRow';

const HousesList = ({houses}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {houses.map(house =>
          <HouseListRow key={house.name} house={house} />
        )}
      </tbody>
    </table>
  );
};

HousesList.propTypes = {
  houses: PropTypes.array.isRequired
};

export default HousesList;
