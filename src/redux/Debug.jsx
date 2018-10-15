import React, { Component } from 'react';

class Debug extends Component {

    render() {

        let { data } = this.props;

        return (
          <div className="Debug">
            <pre>{JSON.stringify(data, null, '\t')}</pre>
          </div>
        );

    }
}



export default Debug;
