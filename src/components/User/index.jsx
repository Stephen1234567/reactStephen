import { useModal } from '../../hooks/useModal';
import Modal from '../../components/Modal/index'

import "./user.css";

const User = ({ user }) => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <div className="div-card">
        <img src={user.avatar} alt="avatar" className="avatar"></img>
        <h1>{user.first_name}</h1>
        <p>{user.last_name}</p>
        <p>{user.email}</p>
        <button onClick={openModal}>Edit user</button>
      </div>
      <Modal user={user} isOpen={isOpen} closeModal={closeModal}/>
    </>
  );
};

export default User;
