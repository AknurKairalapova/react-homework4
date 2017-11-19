import React, {Component} from 'react';

class CardNumberInput extends Component {

  constructor(props) {
    super(props);
    let formattedNum = this.format(props.cardNumber);

    this.state = {
      number: formattedNum
    }
  }

  format = (valueStr) => {
    let formattedStr = "";
    
    if (valueStr) {
      valueStr = String(valueStr);
      let mod = valueStr.length % 4;
      let matchedValues = valueStr.match(/\w{4}/g);
      let remainedValues = valueStr.slice(-mod);

      if ( valueStr.length >= 4 ) {
        if ( mod === 0 ) {
          //check if matchedValues returns null
          formattedStr = matchedValues ? matchedValues.join(" ") : "";
        } else {
          //check if matchedValues returns null
          formattedStr = matchedValues 
                          ? matchedValues.join(" ") + " " + remainedValues 
                          : "";
        }
      } else {
        formattedStr = valueStr;
      }
    }
    
    return formattedStr;
  }

  normalize = (num) => {
    const normalizedNumber = num.replace(/\s/g, '');

    return normalizedNumber;
  }

  componentWillReceiveProps = (nextProps) => {
    const {cardNumber} = nextProps;
    const formattedCardNumber = this.format(cardNumber);

    this.setState({
      number: formattedCardNumber
    });
  }

  onChangeMock = event => {
    const value = event.target.value;
    const {onChange} = this.props;
    let cardNormNum = this.normalize(value);

    onChange(cardNormNum);
  }
  
  render() {
    const {number} = this.state;
    
    return (
      <input value={number} onChange={this.onChangeMock}/>
    );
  }
}

export default CardNumberInput;
