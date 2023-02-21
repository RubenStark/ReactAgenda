import React from "react";

const List = ({ contacts, updateContact, deleteContact }) => {
    return (
        <>
            {/* Un divider */}
            <div className="flex items-center justify-center">
                <div className="h-1 w-9/12 bg-slate-200"></div>
            </div>

            {/* Aqui se muestran los registros */}
            <table className="table-auto">
                <thead>
                    <tr>
                        {/* <th className="px-4 py-2">ID</th> */}
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Teléfono</th>
                        <th className="px-4 py-2">Correo</th>
                        <th className="px-4 py-2">Fecha de nacimiento</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            {/* <td className="border px-4 py-2">{contact.id}</td> */}
                            <td className="border px-4 py-2">{contact.name}</td>
                            <td className="border px-4 py-2">{contact.phone}</td>
                            <td className="border px-4 py-2">{contact.email}</td>
                            <td className="border px-4 py-2">{contact.birthday}</td>
                            <td className="border px-4 py-2 flex">
                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                                    onClick={() => updateContact(contact)}
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => deleteContact(contact)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default List;
