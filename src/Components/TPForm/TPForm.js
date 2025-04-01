import React, { useEffect } from 'react';
import './tpform.css';
export default function TPForm() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://link.nationwiderv.net/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <iframe className="form-iframe"
  src="https://link.nationwiderv.net/widget/form/vvM7t0QqHjq8dkFyeu8A"
  
  id="inline-vvM7t0QqHjq8dkFyeu8A" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Get Today's Price Form"
  data-height="938"
  data-layout-iframe-id="inline-vvM7t0QqHjq8dkFyeu8A"
  data-form-id="vvM7t0QqHjq8dkFyeu8A"
  title="Get Today's Price Form"
      >
</iframe>
<script src="https://link.nationwiderv.net/js/form_embed.js"></script>
    </>
  );
}
