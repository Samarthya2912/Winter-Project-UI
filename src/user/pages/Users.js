import React from 'react'
import UserList from '../components/UserList'


const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: "Sam",
            image: "https://avatars.githubusercontent.com/u/75058440?s=64&v=4",
            placeCount: 3
        }
    ]

    return (
        <div className="flex column center">
            <UserList users={USERS} />
        </div>
    )
}

export default Users
