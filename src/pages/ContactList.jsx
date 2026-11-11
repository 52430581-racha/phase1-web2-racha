import { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts") || "[]"),
  );

  const deleteContact = (index) => {
    const newList = [...contacts];
    newList.splice(index, 1);

    setContacts(newList);
    localStorage.setItem("contacts", JSON.stringify(newList));
  };

  return (
    <div className="container section-padding">
      <h1 className="section-title">Customer Messages</h1>

      <p className="section-subtitle">
        View and manage messages submitted through our contact form.
      </p>

      <div className="table-card">
        <div className="table-responsive">
          <table className="table align-middle contact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteContact(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {contacts.length === 0 && (
            <p className="text-center text-muted py-4">
              No customer messages yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactList;
