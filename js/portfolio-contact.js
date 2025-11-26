// portfolio-contact.js
// Handles contact form submission. Two modes:
// 1) If you register at https://www.emailjs.com/ and fill the EMAILJS_* constants below,
//    the script will attempt to send the message directly (no backend required).
// 2) Otherwise it falls back to opening the user's mail client with a prefilled mailto: link.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = (document.getElementById('name') || {}).value || '';
    const email = (document.getElementById('email') || {}).value || '';
    const message = (document.getElementById('message') || {}).value || '';

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill Name, Email and Message before sending.');
      return;
    }

    // ===== Configuration for EmailJS (optional) =====
    // Register at https://www.emailjs.com/, create a service and template, then
    // fill these values. If left empty the code will use the mailto fallback.
    const EMAILJS_SERVICE_ID = '';
    const EMAILJS_TEMPLATE_ID = '';
    const EMAILJS_PUBLIC_KEY = '';

    function fallbackMailto() {
      const to = 'ianfun917@gmail.com';
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      // Open user's mail client
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    }

    // Try EmailJS if configured and library available
    if (window.emailjs && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      try {
        // initialize (safe to call repeatedly)
        emailjs.init(EMAILJS_PUBLIC_KEY);
        const templateParams = {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'ianfun917@gmail.com'
        };
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        alert('Message sent — thank you!');
        form.reset();
        return;
      } catch (err) {
        console.error('EmailJS send error', err);
        alert('Sending failed — opening your mail client as a fallback.');
        fallbackMailto();
        return;
      }
    }

    // If EmailJS not configured, use mailto fallback
    fallbackMailto();
  });
});

/*
Usage notes:
- To enable direct sending without opening the user's mail client, sign up at https://www.emailjs.com/,
  create a service and a template, then set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID and EMAILJS_PUBLIC_KEY above.
- If you enable EmailJS, also add the SDK script to your HTML head:
  <script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"></script>
*/
