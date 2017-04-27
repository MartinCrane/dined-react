import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react';


export class About extends Component {
  constructor(){
    super()
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div>
        <Button className='aboutModal' bsStyle="small" bsSize="small" onClick={this.open}>
          About
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>About Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Gee Li</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <h4>Martin Crane</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <h4>Arthur Roncey</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


//
// export class About extends Component {
//
//   // getInitialState() {
//   //    return { showModal: false };
//   //  }
//   //
//   //  close() {
//   //    this.setState({ showModal: false });
//   //  }
//   //
//   //  open() {
//   //    this.setState({ showModal: true });
//   //  }
//   //
//
//   render(){
//     // let close = () => this.setState({show: false});
//
//     const aboutModal = (
//       <div>
//         <Button bsStyle="small" bsSize="large" onClick={this.open}>Launch demo modal</Button>
//         <Modal show={this.state.showModal} onHide={this.close}>
//           <Modal.Body>
//             BEEF
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.close}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     )
//     return(
//         <div>
//           {aboutModal}
//         </div>
//     )
//   }
// }
