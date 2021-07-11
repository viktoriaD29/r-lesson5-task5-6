import React from 'react';
import ReactDOM from 'react-dom';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerTitleEl: '',
    };
  }

  onChangeText = (text) => {
    this.setState ({
      pickerTitleEl: text
    })
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.pickerTitleEl}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.onChangeText('Coral')}
            onMouseOut={() => this.onChangeText('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.onChangeText('Aqua')}
            onMouseOut={() => this.onChangeText('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.onChangeText('Bisque')}
            onMouseOut={() => this.onChangeText('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

//algo:
//1.присвоюємо елементу заголовка пусту строку
//2.використовуємо this.state для зміни тексту
//3.передаємо в перший обрбник подій текст кольору, в другий пусту строку
