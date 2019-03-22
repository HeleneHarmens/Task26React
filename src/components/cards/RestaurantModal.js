import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class RestaurantModal extends React.Component {
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
        const reviewsText = this.props.reviews.map(review => <p key= {review.review_id}>Review: {review.review_text} <br/> Rating: {review.rating}/5.0</p>);

        
        return (
            <React.Fragment>
                    <Button className=" btn btn-primary btn-sm" color ="primary" id="btn-space" onClick={this.toggle}>View Reviews</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} external={externalCloseBtn}>
                    <ModalHeader>All reviews</ModalHeader>
                    <ModalBody>
                        <div>
                            {reviewsText}
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

export default RestaurantModal;