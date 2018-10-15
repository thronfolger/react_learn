import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddProperty extends Component {


    addProperty = () => {

      let name = this._inputName.value;
      let value = this._inputValue.value;

      this.props.addProperty(name, value);

    }

    getInputNameRef = (node) => {this._inputName = node};
    getInputValueRef = (node) => {this._inputValue = node};

    render() {

        return (
          <div className="AddProperty">
            <h2>Добавление/обновление свойства в state</h2>

            <div>
              <div className="AddProperty__field">
                <input type="text" placeholder="Ключ" ref={this.getInputNameRef} />
              </div>

              <div className="AddProperty__field">
                <input type="text" placeholder="Значение" ref={this.getInputValueRef} />
              </div>

              <button onClick={this.addProperty}>Добавить свойство</button>
            </div>

          </div>
        );

    }
}

export function mapDispatchToProps(dispatch) {

    return {
      addProperty(name, value) {

          dispatch({type: 'ADD_PROPERTY', payload: { name, value } });

      }
    }
}

export default connect(null, mapDispatchToProps)(AddProperty);
