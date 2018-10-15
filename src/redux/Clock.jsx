import React, { Component } from 'react';
import { connect } from 'react-redux';

class Clock extends Component {

    state = {
      tickIsPause: false
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    toggleTickIsPause = () => {

        this.setState(prevState => ({
          'tickIsPause': !prevState.tickIsPause
        }));

    }

    tick = () => {

        let { tickIsPause } = this.state;
        let { updateTime } = this.props;

        if (tickIsPause === false) {
            updateTime();
        }

    }

    render() {

        let { time } = this.props;

        return (
          <div className="Clock">
            <h2>Часы</h2>

            <div className="Clock__time">{time.toLocaleTimeString()}</div>
            <button
              className="Clock__toggle"
              onClick={this.toggleTickIsPause}>Выкл/Вкл часы</button>

          </div>
        );

    }
}

export function mapStateToProps(state) {

    return {
        'time': state.main.time
    };

}

export function mapDispatchToProps(dispatch) {

    return {
      updateTime() {
          dispatch({type: 'UPDATE_TIME'});
      }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
