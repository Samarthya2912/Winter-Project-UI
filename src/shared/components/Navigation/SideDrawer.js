import React, { useRef } from 'react'
import './SideDrawer.css'

const SideDrawer = props => {
    function clickHandler() {
        props.sideDrawerRef.current.classList.toggle("side-drawer__show");
    }

    return (
        <aside ref={props.sideDrawerRef} className="side-drawer" onClick={clickHandler}>{props.children}</aside>
    )
}

export default SideDrawer
