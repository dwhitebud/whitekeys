import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero"
import Form from "../components/Form"

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, we would handle form submission to a server or API
    // For now, we'll just show a success message
    setFormSubmitted(true)
  }
  
  const contactFormFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      required: true,
    },
    {
      id: "phone",
      label: "Phone",
      type: "tel",
      required: false,
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      required: true,
      fullWidth: true,
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      required: true,
      fullWidth: true,
    },
  ]
  
  return (
    <Layout>
      <Hero 
        title="Contact White Keys Music"
        subtitle="Have questions about piano lessons or want to schedule a consultation? We'd love to hear from you."
        imageSrc="/piano-contact.jpg"
        imageAlt="Piano keyboard close-up"
      />

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2>Get in Touch</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="contact-columns">
            <div className="contact-info">
              <h3>Studio Information</h3>
              
              <div className="contact-detail">
                <h4>Location</h4>
                <address>
                  123 Music Lane<br />
                  Modesto, CA 95350
                </address>
              </div>
              
              <div className="contact-detail">
                <h4>Studio Hours</h4>
                <p>
                  Monday - Friday: 2:00 PM - 8:00 PM<br />
                  Saturday: 9:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              
              <div className="contact-detail">
                <h4>Contact Information</h4>
                <p>
                  Phone: (209) 555-1234<br />
                  Email: <a href="mailto:info@whitekeys-music.com">info@whitekeys-music.com</a>
                </p>
              </div>
              
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75058.17498769037!2d-121.05895149460897!3d37.6613342071013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8090538159022039%3A0xca661169989dea4c!2sModesto%2C%20CA!5e0!3m2!1sen!2sus!4v1647979793640!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: "var(--border-radius)" }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  title="White Keys Music Studio Location"
                ></iframe>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3>Send Us a Message</h3>
              
              {formSubmitted ? (
                <div className="form-success">
                  <h4>Thank you for your message!</h4>
                  <p>We've received your inquiry and will get back to you as soon as possible, usually within 1-2 business days.</p>
                  <button 
                    className="btn btn--secondary"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <p>Fill out the form below, and we'll respond to your inquiry as soon as possible.</p>
                  <Form 
                    fields={contactFormFields}
                    submitButtonText="Send Message"
                    onSubmit={handleSubmit}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="text-center">
            <h2>Frequently Asked Questions</h2>
            <div className="piano-keys-pattern"></div>
          </div>
          
          <div className="faqs">
            <div className="faq-item">
              <h3>How do I get started with piano lessons?</h3>
              <p>Contact us to schedule an initial consultation. During this meeting, we'll discuss your goals (or your child's goals), assess current skill level if applicable, and recommend a lesson program that fits your needs.</p>
            </div>
            
            <div className="faq-item">
              <h3>What ages do you teach?</h3>
              <p>We accept students as young as 5 years old, and we have no upper age limit! Many of our students are adults who are either beginners or returning to piano after many years.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do I need a piano at home?</h3>
              <p>Yes, regular practice is essential for progress. While an acoustic piano is ideal, a good quality digital piano or keyboard with weighted keys is a suitable alternative for beginners.</p>
            </div>
            
            <div className="faq-item">
              <h3>How often are lessons scheduled?</h3>
              <p>Most students take weekly lessons. Consistency is important for steady progress. We also offer accelerated programs with twice-weekly lessons for students preparing for auditions or competitions.</p>
            </div>
            
            <div className="faq-item">
              <h3>What is your cancellation policy?</h3>
              <p>We require 24-hour notice for cancellations. Lessons canceled with less than 24 hours' notice may not be eligible for makeup lessons. We understand that emergencies happen and will work with you on a case-by-case basis.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer recitals or performance opportunities?</h3>
              <p>Yes! We host studio recitals twice a year, plus additional performance opportunities throughout the year. Performance is an important part of musical development, and we encourage all students to participate.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact | White Keys Music - Piano Instruction in Modesto, CA" />

export default ContactPage
