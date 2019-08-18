import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as houseActions from '../../actions/houseActions';
import history from '../../actions/history';
import {getHouseId} from "../../commons/commons";

class HousePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      house: Object.assign({}, this.props.house),
    };
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    history.push('/houses');
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.house.name}</h1>
        { this.state.house.region ?
          <p>Region: {this.state.house.region}</p> : ''
        }
        {this.state.house.coatOfArms ?
            <p>Coat of arms: {this.state.house.coatOfArms}</p> : ''
        }
        { this.state.house.words ?
            <p>Words: {this.state.house.words}</p> : ''
        }
        { (this.state.house.titles.length > 0 && this.state.house.titles[0] !== '') ?
          <p>Titles: {this.state.house.titles.join(', ')}</p> : ''
        }
      </div>
    );
  }
}


HousePage.propTypes = {
  house: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getHouseById(houses, id) {
  let house = houses.find(house => getHouseId(house.url) == id)
  return Object.assign({}, house)
}

function mapStateToProps(state, ownProps) {
  let house = {name: '', region: '', coatOfArms: '', words: '', titles: []};
  const houseId = getHouseId(ownProps.location.pathname);
  if (houseId && state.houses.length > 0) {
    house = getHouseById(state.houses, houseId);
  }
  return {house: house};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(houseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HousePage);







