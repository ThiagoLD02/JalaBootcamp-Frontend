import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, update } from "../features/userData/userDataSlice";
import ReactModal from "react-modal";
import { EditCardModal } from "./editCardModal";
import { Button } from "./button";

export function Cards() {
  const selectedCard = useRef(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const userData = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  function handleDelete(email) {
    console.log(email);
    dispatch(deleteUser(email));
  }
  function handleEdit(user) {
    selectedCard.current = user;
    openModal();
    // dispatch(editUser(user));
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    dispatch(update(selectedCard.current));
    console.log(selectedCard.current);
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      background: "#000000a6",
    },
  };

  return userData.map((user) => (
    <div
      style={{
        backgroundColor: "whitesmoke",
        padding: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        borderRadius: 8,
      }}
    >
      <div key={user.email}>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <Button
        backgroundcolor="#cd2020"
        textColor="black"
        message="Delete"
        handleClick={() => handleDelete(user.email)}
      />
      <Button
        backgroundcolor="#12dc19"
        textColor="black"
        message="Edit"
        handleClick={() => handleEdit(user)}
      />
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        data={{ background: "black" }}
        ariaHideApp={false}
      >
        <EditCardModal closeModal={closeModal} selectedCard={selectedCard} />
      </ReactModal>
    </div>
  ));
}
