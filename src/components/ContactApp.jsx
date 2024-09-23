import ContactList from "./ContactList";
import { getData } from "../utilis/data";
import React from 'react';

function ContactApp() {
  const contacts = getData();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;