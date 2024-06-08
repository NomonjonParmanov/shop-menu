import React from "react";

const Map = () => {
  return (
    <div className="container map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728840437946!2d69.2012376755285!3d41.28551820230848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1717782388568!5m2!1sru!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="maps"
      ></iframe>
    </div>
  );
};

export default Map;
