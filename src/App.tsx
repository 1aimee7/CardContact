import React from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

function App() {
  const contacts = [
    {
      name: "Aimee Ishimwe",
      email: "aimeishimwe25@example.com",
      phone: "+250784887037"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">My Contacts</h1>
        </header>
        
        <div className="max-w-md mx-auto grid gap-6">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
