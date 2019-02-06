import React, { Component } from 'react';
import { connect } from 'react-redux';

class NumberList extends Component {

    render() {

        console.log('Компонент NumberList отрисовался!');

        return (
          <div className="NumberList">
            <h3>NumberList</h3>

            <p>Случайное число: {this.props.randomNumber}</p>

            <ul>
              <li>{this.props.zero}</li>
              <li>{this.props.one}</li>
              <li>{this.props.two}</li>
              <li>{this.props.three}</li>
              <li>{this.props.four}</li>
            </ul>

          </div>
        );

    }
}

// Селектор, возвращает название числа
function getNumber(state, number) {
    return state.numberReducer[number];
}

function mapStateToProps(state) {

    // Если посмотреть консоль, то на каждое обновление значения в state (нарпример в этом приложение каждую секунду обновлятся время)
    // выполняется этот и любой другой mapStateToProps
    // и пропсы компонента получают новые значения которые вернет mapStateToProps
    // если есть изменения в этих значениях, то компонент заново рисуется
    console.log('NumberList -> mapStateToProps', state);

    return {

      // getNumber всегда вернет тоже самое значение, для его пропса (zero = 0, one = 1 ..)
      // поэтому, компонент отрисуется один раз и не будет вызвать рендер для перерисовки
      // так как изменений в данных не будет при каждом вызове mapStateToProps
      zero: getNumber(state, 0),
      one: getNumber(state, 1),
      two: getNumber(state, 2),
      three: getNumber(state, 3),
      four: getNumber(state, 4),

      // но если значение пропса будет изиенено на отличное от предыдущего значения
      // то рендер перерисуется

      // есди расскомментировать строку кода ниже, то при каждом вызове mapStateToProps
      // пропс randomNumber будет получать новое случайно значение и компонент видя разницу в значениях будет заново отрисовываться
      // в консоле это видно по сообщению "Компонент NumberList отрисовался!"
      // randomNumber: (() => { return Math.random() * 100 })(),

      // еще раз напомню, что вызова mapStateToProps инициируется изменениями в store
    }

}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberList);
