import React, { useState } from "react";
import "./PlaceItem.css";
import Button from "../../shared/FormElelments/Button";
import Modal from "../../shared/UIElements/Modal";
import Map from "../../shared/UIElements/Map";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showDeleteModal, setDeleteModal] = useState(false);

  function openMap() {
    setShowMap(true);
  }
  function closeMap() {
    setShowMap(false);
  }

  function openDeleteModal() {
    setDeleteModal(true);
  }
  function closeDeleteModal() {
    setDeleteModal(false);
  }

  function confirmDeleteHandler() {
      setDeleteModal(false);
      console.log('deleting');
  }

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMap}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMap}>CLOSE</Button>}
      >
        <Map />
      </Modal>
      <Modal
        show={showDeleteModal}
        onCancel={closeDeleteModal}
        header={'Are you sure?'}
        footer={
          <>
            <Button danger onClick={confirmDeleteHandler}>DELETE</Button>
            <Button inverse onClick={closeDeleteModal}>CANCEL</Button>
          </>
        }
      >
        <p>Do you want to delete this place?</p>
      </Modal>
      <li className="place-item">
        <img
          className="place-item__image"
          src={props.imageUrl}
          alt={props.title}
        />
        <div className="place-item__info center column">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <h4>{props.description}</h4>
        </div>
        <hr />
        <div className="place-item__action-buttons">
          <Button inverse onClick={openMap}>
            VIEW ON MAP
          </Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger onClick={openDeleteModal}>
            DELETE
          </Button>
        </div>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
