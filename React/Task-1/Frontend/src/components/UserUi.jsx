import React from 'react'

const UserUi = (props) => {
    const user = props.user;
  return (
    <div>
        <div className="userCard">
            <h4>{user.name}</h4>
            <h4>{user.email}</h4>
            <h4>{user.address.city}</h4>
        </div>
    </div>
  )
}

export default UserUi   