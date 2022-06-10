import { useState } from 'react';
import './modal.css'

const Modal = ({ user, isOpen, closeModal }) => {

  const [firstName, setFirstName] = useState(user.first_name)
  const [lastName, setLastName] = useState(user.last_name)
  const [email, setEmail] = useState(user.email)

  const handleClick = () => {
    setFirstName(user.first_name)
    setLastName(user.last_name)
    setEmail(user.email)
    closeModal()
  }

  const editUser = async () => {
    const response = await globalThis.fetch(`https://reqres.in/api/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email})
    })
    response.status === 200 ? alert('User edited successfully') : alert('Error editing user')
    closeModal()
  }

  
  return (
    <article className={`modal ${isOpen && "is-open" }`}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={handleClick}>X</button>
        <img src={user.avatar} alt="avatar" className="avatar"></img>
        <input onChange={e => {setFirstName(e.target.value)}} value={firstName} />
        <input onChange={e =>{setLastName(e.target.value)}} value={lastName} />
        <input onChange={e =>{setEmail(e.target.value)}} value={email} />
        <button onClick={editUser}>Edit user</button>
      </div>
    </article>
  );
};

export default Modal;
