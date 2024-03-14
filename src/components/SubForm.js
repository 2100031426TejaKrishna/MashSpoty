import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';
import '../components/cssfiles/sub.css';

const SubForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    plan: '',
  });

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setIsSubscribed(true);

    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      plan: '',
    });
  };

  const confettiConfigLeft = {
    angle: 90,
    spread: 180,
    startVelocity: 30,
    elementCount: 50,
    dragFriction: 0.42,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '20px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  const confettiConfigRight = {
    angle: 90,
    spread: 180,
    startVelocity: 30,
    elementCount: 50,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: '10px',
    height: '20px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
  };

  return (
    <div className="sub-form-container">
      <h2>Subscribe for More!</h2>
      <center>
        <form onSubmit={handleSubmit}>

          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          </label>
          <label>
            Subscription Plan:
            <select name="plan" value={formData.plan} onChange={handleInputChange} required>
              <option value="">Select Plan</option>
              <option value="basic">Basic</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
          </label>
          <button type="submit">Subscribe</button>
          </form>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Confetti active={isSubscribed} config={confettiConfigLeft} />
          <Confetti active={isSubscribed} config={confettiConfigRight} />
        </div>

        {isSubscribed && <p>You have successfully subscribed! 🎉</p>}
      </center>
    </div>
  );
};

export default SubForm;
