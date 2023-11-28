import React from 'react';
import './ContactList.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contactList = useSelector(state => state.contacts);
  console.log(contactList);
  const handleDelete = e => {
    e.preventDefault();
  };
  const filter = '';
  return (
    <ul className="contact-list">
      {contactList
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(contact => (
          <li className="contact-list-item" key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className="button-list"
              onClick={() => handleDelete(contact.name)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
