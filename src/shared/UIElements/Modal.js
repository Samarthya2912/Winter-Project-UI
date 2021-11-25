import React from 'react'
import './Modal.css'
import ReactDOM from 'react-dom'
import Backdrop from '../UIElements/Backdrop'
import { CSSTransition } from 'react-transition-group'

const ModalOverlay = props => {
    return ReactDOM.createPortal(
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : (e) => { e.preventDefault() }}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
        , document.getElementById('modal-hook')
    );
}


const Modal = props => {
    return (
        <>
            {props.show && <Backdrop clickHandler={props.onCancel} />}
            <CSSTransition in={props.show} mountOnEnter unmountOnExit classNames="modal" timeout={200}>
                <ModalOverlay {...props} />
            </CSSTransition>
        </>
    )
}

export default Modal
