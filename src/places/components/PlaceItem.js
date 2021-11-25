import React, { useState } from 'react'
import './PlaceItem.css'
import Button from '../../shared/FormElelments/Button'
import Modal from '../../shared/UIElements/Modal'

const PlaceItem = props => {
    const [showMap, setShowMap] = useState(false);

    function openMap() { setShowMap(true) }
    function closeMap() { setShowMap(false) }

    return (
        <React.Fragment>
            <Modal show={showMap}
            onCancel={closeMap}
            header={props.address}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<Button onClick={closeMap}>CLOSE</Button>}
            >
                <div className="map-container">Hello!</div>
            </Modal>
            <li className="place-item">
                <img className="place-item__image" src={props.imageUrl} alt={props.title} />
                <div className="place-item__info center column">
                    <h2>{props.title}</h2>
                    <h3>{props.address}</h3>
                    <h4>{props.description}</h4>
                </div>
                <hr />
                <div className="place-item__action-buttons">
                    <Button inverse onClick={openMap}>VIEW ON MAP</Button>
                    <Button to={`/places/${props.id}`}>EDIT</Button>
                    <Button danger>DELETE</Button>
                </div>
            </li>
        </React.Fragment>
    )
}

export default PlaceItem
