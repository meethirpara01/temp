import React, { use, useEffect, useState } from 'react'
import { getUsers } from '../user.api.js'
import UserUi from '../components/UserUi.jsx';

const User = () => {

    const [users, setusers] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUsers();
            setusers(data);
        }
        fetchUser();
    }, [])

  return (
    <div className='userContainer'>
        {users.map((user, idx) => {
            return <UserUi key={idx} user={user} />;
        })}
    </div>
  )
}

export default User