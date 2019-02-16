import React, { Component } from 'react';
import { connect } from 'react-redux';

class SomeComponent extends Component {

    handleGenerateNumber = () => {

        this.props.dispatch({ type: 'GENERATE_NUMBER', payload: { min: 1, max: 999 } });

    }

    render() {

        let { state } = this.props;

        return (
          <div className="SomeComponent">

            <button onClick={this.handleGenerateNumber}>GENERATE NUMBER</button>

            <pre>{JSON.stringify(state, null, '\t')}</pre>

          </div>
        );

    }

}

function mapStateToProps(state) {

    return {
        'state': state,
    };

}

export default connect(mapStateToProps, null)(SomeComponent);
