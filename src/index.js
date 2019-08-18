import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { loadHouses } from './actions/houseActions';
import HomePage from './components/home/HomePage';
import HousesPage from './components/houses/HousesPage';

const store = configureStore();

store.dispatch(loadHouses());

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/" component={HousesPage} />

            <Route path="/houses" component={HomePage} />
            <Route path="/houses" component={HousesPage} />
        </Router>
    </Provider>,
    document.getElementById('app')
);
