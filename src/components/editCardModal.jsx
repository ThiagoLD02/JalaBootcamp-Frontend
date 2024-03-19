import { useRef } from "react";
import { Button } from "./button";
import { InputField } from "./inputField";

export function EditCardModal({ selectedCard, closeModal }) {
  console.log(selectedCard);
  const updatedCard = useRef({
    name: selectedCard.current.name,
    email: selectedCard.current.email,
    number: selectedCard.current.number,
    password: selectedCard.current.password,
  });

  function updateData(field, value) {
    const lowerField = field.toLowerCase();
    switch (lowerField) {
      case "name":
        updatedCard.current.name = value;
        break;
      case "number":
        updatedCard.current.number = value;
        break;
      case "password":
        updatedCard.current.password = value;
        break;
    }
  }

  function update() {
    selectedCard.current = updatedCard.current;
    closeModal();
  }

  return (
    <section style={{ padding: 30, borderRadius: 8 }}>
      <InputField
        title="Name"
        inputType="text"
        placeholder={selectedCard.current.name}
        updateData={updateData}
      />
      <InputField
        title="Phone Number"
        inputType="number"
        placeholder={selectedCard.current.number}
        updateData={updateData}
      />
      <InputField
        title="Password"
        inputType="password"
        placeholder="password"
        updateData={updateData}
      />
      <Button
        backgroundcolor="#264eca"
        textColor="white"
        message="Update"
        handleClick={update}
      />
    </section>
  );
}
