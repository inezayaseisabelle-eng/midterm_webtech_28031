import { useState } from 'react';
import SectionTitle from './SectionTitle.jsx';
import { contactInfo } from '../data/libraryData.js';

const fields = [
  { name: 'fullName', label: 'Full Name', type: 'text' },
  { name: 'email', label: 'Email Address', type: 'email' },
  { name: 'message', label: 'Message', type: 'textarea' },
];

const emptyForm = { fullName: '', email: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Please enter your full name.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  return errors;
}

function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    // Only send when there are no errors
    const isValid = Object.keys(validationErrors).length === 0;
    setSent(isValid);
    if (isValid) setFormData(emptyForm);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          title="Contact Us"
          subtitle="Have a question or suggestion? We'd love to hear from you."
        />

        <div className="contact-grid">
          <div className="contact-info card">
            <h3>Visit or Reach Us</h3>
            <p>{contactInfo.address}</p>
            <p>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </p>
            <p>{contactInfo.hours}</p>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            {sent && (
              <p className="alert-success" role="status">
                Thank you! Your message has been sent.
              </p>
            )}

            {fields.map(({ name, label, type }) => {
              const Input = type === 'textarea' ? 'textarea' : 'input';
              return (
                <div className="form-group" key={name}>
                  <label htmlFor={name}>{label}</label>
                  <Input
                    id={name}
                    name={name}
                    type={type === 'textarea' ? undefined : type}
                    rows={type === 'textarea' ? 5 : undefined}
                    value={formData[name]}
                    onChange={handleChange}
                  />
                  {errors[name] && <span className="error">{errors[name]}</span>}
                </div>
              );
            })}

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
