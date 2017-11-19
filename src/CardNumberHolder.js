import React, {Component} from 'react';
import CardNumberInput from './CardNumberInput';

class CardNumberHolder extends Component {
  static displayName  = 'Card Number Holder';

  state = {
    cardNumber: ''
  }

  handleChange = num => {
    this.setState({
      cardNumber: num
    });
  }

  render() {
    const { cardNumber } = this.state;

    return (
      <CardNumberInput cardNumber={cardNumber} onChange={this.handleChange} />
    );
  }
}

export default CardNumberHolder;
