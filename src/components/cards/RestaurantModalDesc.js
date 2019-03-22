import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RestaurantModalDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.toggle}>&times;</button>;
        
        return (
            <React.Fragment>
                    <Button className=" btn btn-primary btn-sm" color="primary" id="btn-space" onClick={this.toggle}>View Restaurant Info</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
                    <ModalHeader>Description</ModalHeader>
                    <ModalBody>
                        <div>
                                <p>Category: {this.props.resCategory}</p>
                                <p>Description: <br /> {this.props.resDesc}</p>
                        </div>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
        
    }
}

export default RestaurantModalDesc;