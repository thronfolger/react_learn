import React, { Component } from 'react';
import SomeComponent from './SomeComponent';

class TodoApp extends Component {

    render() {

        return (
          <div className="TodoApp">
            <h1>TodoApp</h1>
            <SomeComponent />
          </div>
        );

    }

}

export default TodoApp;
