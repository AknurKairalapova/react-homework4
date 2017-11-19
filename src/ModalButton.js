import React, {Component} from 'react';
import Modal from './Modal';
import './ModalButton.css'

class ModalButton extends Component {
  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({isModalShow: false});
  }

  showModal = () => {
    this.setState({isModalShow: true});
  }

  render() {
    const { isModalShow } = this.state;
    
    let modal = () => {
      if( isModalShow ) {
        return (
          <Modal domNode={document.querySelector('#portal')}>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно</h1>
                  <button type="button" onClick={this.hideModal}>Закрыть</button>
                </div>
              </div>
            </div>
          </Modal>
        );
      }
    }

    return (
      <div>
        <button type="button" onClick={this.showModal}>Show modal</button>
        { modal() }
      </div>
    );
  }
}

export default ModalButton;
