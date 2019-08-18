import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getHouseId } from '../../commons/commons';

const HouseListRow = ({house}) => {
  return (
    <tr>
      <td><Link to={
          {
            pathname: '/houses/' + getHouseId(house.url),
            props: {
                house: house
            }
          }
      }>{house.name}</Link></td>
    </tr>
  );
};

HouseListRow.propTypes = {
  house: PropTypes.object.isRequired
};

export default HouseListRow;
