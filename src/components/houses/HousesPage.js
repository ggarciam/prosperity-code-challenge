import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HousesList from './HousesList';
import HousePage from './HousePage';
import {getHouseId} from "../../commons/commons";

class HousesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const houses = this.props.houses;
    const id = houses.length > 0 ? getHouseId(houses[0].url): null;
    const housesRoutes = [];
    for (let i = 0; i < houses.length; i++) {
        housesRoutes.push(
            <Route
                path={`/houses/${getHouseId(houses[i].url)}`}
                key={`${getHouseId(houses[i].url)}`}
                house={houses[i]}
                component={ HousePage }
            />
        );
    }

    return (
      <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-4">
              <HousesList houses={houses} />
            </div>
            <div className="col-sm-8">
                {housesRoutes}
            </div>
          </div>
      </div>
    );
  }
}

HousesPage.propTypes = {
  houses: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
    houses: state.houses
  };
}

export default connect(mapStateToProps)(HousesPage);





