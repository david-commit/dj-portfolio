import React, { useState } from 'react';

const hire = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [set] = useState('');

  const typesOfEvents = [
    'Church Event',
    'Live Show Event',
    'School Event',
    'Adult Birthday',
    'Kids Birthday',
    'Other',
  ];

  return (
    <div className='hire-main-container'>
      <h1>Hire DJ Prince Kim</h1>
      <form id='hire-form'>
        <fieldset>
          <label htmlFor='name'>
            Name (Personal or Organisation's){' '}
            <span className='required'>*</span>
          </label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Jane Doe'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='phone'>
            Phone <span className='required'>*</span>
          </label>
          <input
            type='text'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='(+254) 712 345 678'
          />
        </fieldset>
        <fieldset>
          <label htmlFor='event'>
            Event Type <span className='required'>*</span>
          </label>
          <select>
            <option hidden>--</option>
            {typesOfEvents.map((type) => (
              <option>{type}</option>
            ))}
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default hire;
