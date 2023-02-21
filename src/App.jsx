import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";


const App = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (contact) => {
    setSelectedContact(contact);
  };

  const saveContact = (contact) => {
    // Encontramos el contacto que queremos actualizar
    const updatedContacts = contacts.map((c) =>
      // Si el nombre del contacto coincide con el nombre del contacto que queremos actualizar
      c.id === contact.id
        // Actualizamos el contacto
        ? contact
        // Si no, regresamos el contacto sin modificar
        : c
    );
    setContacts(updatedContacts);
    setSelectedContact(null);
  };

  const deleteContact = (contact) => {
    const updatedContacts = contacts.filter((c) => c.name !== contact.name);
    setContacts(updatedContacts);
  };

  return (
    <div className="container mx-auto px-12 py-5">
      <h1 className="text-3xl font-bold mb-4">Agenda App</h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full px-4">
          <Form addContact={addContact} />
        </div>
        <div className="w-full p-4">
          {selectedContact ? (
            <Form
              addContact={saveContact}
              contact={selectedContact}
              contacts={contacts}
            />
          ) : (
            <List
              contacts={contacts}
              updateContact={updateContact}
              deleteContact={deleteContact}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
