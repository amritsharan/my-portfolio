export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const { name, email, message } = req.body || {};

    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID || 'service_lqbw94v',
      template_id: process.env.EMAILJS_TEMPLATE_ID || 'template_q5ynllp',
      user_id: process.env.EMAILJS_PUBLIC_KEY || '36CwI-o8XNcVcQ9m5',
      template_params: {
        name,
        email,
        message,
        from_name: name,
        from_email: email,
        to_email: process.env.EMAIL_TO_EMAIL || 'amritsr2005@gmail.com',
        subject: `Portfolio inquiry from ${name}`,
        time: new Date().toLocaleString(),
      },
    };

    const r = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await r.text();
    if (!r.ok) {
      console.error('EmailJS proxy error:', text);
      return res.status(500).send(text);
    }

    return res.status(200).send('OK');
  } catch (err) {
    console.error('EmailJS proxy exception:', err);
    return res.status(500).send('Server error');
  }
}
