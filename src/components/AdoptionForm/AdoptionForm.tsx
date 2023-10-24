import React, { useState } from 'react';
import './AdoptionForm.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
}

const AdoptionForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormValues
  ) => {
    const { value } = event.target;
    setFormValues({ ...formValues, [fieldName]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formValues);
    // Add form submission logic here
  };

  return (
    <form className='adoption-form' onSubmit={handleSubmit}>
        <p style={{color: 'red', marginTop: '1em'}}>*</p>
        <div className='form-group'>
            <input
            type='text'
            placeholder='First name'
            value={formValues.firstName}
            onChange={(e) => handleInputChange(e, 'firstName')}
            required
            />
        </div>
        <p style={{color: 'red'}}>*</p>
        <div className='form-group'>
        <input
            type='text'
            placeholder='Last name'
            value={formValues.lastName}
            onChange={(e) => handleInputChange(e, 'lastName')}
            required
            />
        </div>
        <p style={{color: 'red'}}>*</p>
        <div className='form-group'>
            <input
            type='email'
            placeholder='Email'
            value={formValues.email}
            onChange={(e) => handleInputChange(e, 'email')}
            required
            />
        </div>
        <p style={{color: 'red'}}>*</p>
        <div className='form-group'>
            <input
            type='text'
            placeholder='Address'
            value={formValues.address}
            onChange={(e) => handleInputChange(e, 'address')}
            required
            />
        </div>
        <p style={{color: 'red'}}>*</p>
        <div className='form-group'>
            <input
            type='tel'
            placeholder='Phone Number'
            value={formValues.phoneNumber}
            onChange={(e) => handleInputChange(e, 'phoneNumber')}
            required
            />
        </div>
        <button className='submit-form-btn' type='submit'>Submit</button>
    </form>
  );
};

export default AdoptionForm;
