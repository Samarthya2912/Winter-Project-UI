import React from 'react'
import UserItem from './UserItem'
import './UserList.css'

const UserList = props => {
    if(props.users.length === 0) {
        return <h2 className="center">No users.</h2>
    }

    return (
        <ul className="userlist">
            {props.users.map(user => <UserItem key={user.id} {...user} />)}
        </ul>
    )
}

export default UserList
