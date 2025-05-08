import React from 'react';

interface ContactCardProps {
  name: string;
  email: string;
  phone?: string; 
}

function ContactCard({ name, email, phone }: ContactCardProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center text-xl font-bold mr-4">
            {initial}
          </div>
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex items-center">
          <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <a href={`mailto:${email}`} className="text-blue-600 hover:text-blue-800 hover:underline">
            {email}
          </a>
        </div>
        
        {phone && (
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800 hover:underline">
              {phone}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactCard;