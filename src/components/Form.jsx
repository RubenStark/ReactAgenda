import React, { useEffect, useState } from "react";

const Form = ({ addContact, contact, contacts }) => {
    // Definimos los campos del formulario
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    // Actualizamos los valores de los campos cuando recibimos un nuevo contacto a editar
    useEffect(() => {
        setId(contact ? contact.id : 0);
        setName(contact ? contact.name : "");
        setPhone(contact ? contact.phone : "");
        setEmail(contact ? contact.email : "");
        setBirthday(contact ? contact.birthday : "");
        console.log(contact)
    }, [contact]);

    useEffect(() => {
        console.log("name", name);
    }, [name]);



    const handleSubmit = (e) => {
        e.preventDefault();

        // Genera un id aleatorio
        const randomId = () => {
            return Math.floor(Math.random() * 100000000);
        };
        
        setId(randomId());

        // Guardamos los datos del formulario
        const newContact = {
            id,
            name,
            phone,
            email,
            birthday,
        };

        //Si un campo del formulario esta vacio agregamos "No especificado"
        const checkEmptyFields = (contact) => {
            for (const key in contact) {
                if (contact[key] === "") {
                    contact[key] = "NA";
                }
            }
        };

        //Ejecutamos la funcion
        checkEmptyFields(newContact);

        // Agregamos el nuevo contacto
        addContact(newContact);

        //Limpiamos los campos del formulario
        setName("");
        setPhone("");
        setEmail("");
        setBirthday("");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nombre:
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                    Teléfono:
                </label>
                <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Correo:
                </label>
                <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="birthday" className="block text-gray-700 font-bold mb-2">
                    Fecha de nacimiento:
                </label>
                <input
                    type="date"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Agregar
            </button>
        </form>

    );
};

export default Form;
