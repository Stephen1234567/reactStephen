
import { useEffect, useState } from 'react'
import { useLocation } from 'wouter';
import User from '../../components/User/index'

const API_URL = 'https://reqres.in/api/users?page=1'

export function ListUsers() {
  const [users, setUsers] = useState([]);
  const [, navigate] = useLocation()

  const getUsuers = async () => {
    const response = await globalThis.fetch(`${API_URL}`);
    const { data: users } = await response.json();
    setUsers(users);
  };

  const handleClick = () => {
    return navigate('/createUser')
  }

  useEffect(() => {
    getUsuers();
  }, []);

  return (
      <>
        <button onClick={handleClick}>Create User</button>
        <h1>Users:</h1>
        {
            users.map(user => (
            <User user={user} key={user.id}/>
            ))
        }
      </>
  )
}
