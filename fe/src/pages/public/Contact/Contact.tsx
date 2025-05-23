import React from "react";
import { Helmet } from 'react-helmet-async';
import Layout from "~/compoments/layout/Layout";
import ContactFAQs from "~/compoments/section/contact/ContactFAQs";
import ContactFormSection from "~/compoments/section/contact/ContactFormSection";
import ContactInfo from "~/compoments/section/contact/ContactInfo";
import CTABanner from "~/compoments/section/contact/CTABanner";
import HomeSlider from "~/compoments/section/home/HomeSlider";
import { FAQ } from "~/types/contact";
 

// Mock data for FAQs
const MOCK_FAQS: FAQ[] = [
  {
    question: "What are your gym's operating hours?",
    answer:
      "Our gym is open Monday through Friday from 6:00 AM to 10:00 PM, and on weekends from 8:00 AM to 8:00 PM.",
  },
  {
    question: "Do you offer personal training sessions?",
    answer:
      "Yes, we offer personal training sessions with our certified trainers. You can book a session at the front desk or through our mobile app.",
  },
  {
    question: "Is there a free trial available for new members?",
    answer:
      "Yes, we offer a 7-day free trial for new members. You can sign up for the trial on our website or by visiting our gym.",
  },
  {
    question: "How do I cancel my membership?",
    answer:
      "You can cancel your membership by filling out a cancellation form at the front desk or by logging into your account on our website and following the cancellation instructions.",
  },
  {
    question: "Are there group fitness classes available?",
    answer:
      "Yes, we offer a variety of group fitness classes including yoga, cycling, HIIT, and more. Check our class schedule on our website or mobile app.",
  },
  {
    question: "Do you have shower facilities?",
    answer:
      "Yes, we have shower facilities with complimentary towels, shampoo, and body wash.",
  },
];

const Contact: React.FC = () => {
  return (
    <Layout>
       <Helmet>
        <title>Liên Hệ</title>
      </Helmet>
      <HomeSlider />
      <ContactInfo />
      <ContactFormSection
        title="Send Us a Message"
        subtitle="We'll get back to you as soon as possible"
        location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798897555!2d-74.25987155604412!3d40.69767006316378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzUyLjAiTiA3NMKwMTUnMjguNyJX!5e0!3m2!1sen!2sus!4v1614588395925!5m2!1sen!2sus"
      />
      <ContactFAQs
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our gym and services"
        faqs={MOCK_FAQS}
      />
      <CTABanner />
    </Layout>
  );
};

export default Contact;
