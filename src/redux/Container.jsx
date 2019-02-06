import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddProperty from './AddProperty';
import NumberList from './NumberList';
import Clock from './Clock';
import Debug from './Debug';

class Container extends Component {

    render() {

        let { state } = this.props;

        return (
          <div className="Container">
            <Clock />
            <AddProperty />
            <NumberList />
            <Debug data={state} />
          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'state': state
    };

}

export default connect(mapStateToProps, null)(Container);
