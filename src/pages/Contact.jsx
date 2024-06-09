import React, { useEffect } from "react";
import ContactContent from "../components/contact/ContactContent";

const Contact = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactContent />
    </div>
  );
};

export default Contact;
