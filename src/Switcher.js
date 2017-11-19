import React, {Component} from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  }

  handleChangeChild = (event) => {
    this.setState({
      selectedChild: +event.target.getAttribute('data-id')
    });
  }

  render() {
    const [firstChild, secondChild] = React.Children.toArray(this.props.children);
    const {selectedChild} = this.state;
    const component = () => {
      if ( selectedChild === 0 ) {
        return firstChild;
      } else if ( selectedChild === 1 ) {
        return secondChild;
      }
    }

    return (
      <div>
        <ul className="component-list">
          {React.Children.map(this.props.children, (child, index) => {
              return (
                <li 
                  className="component-list__name" 
                  data-id={index} 
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName || child.type.name}
                </li>
              );
          })}
        </ul>
        <div className="component-wrapper">
          { component() }
        </div>
      </div>
    );
  }
}

export default Switcher;
