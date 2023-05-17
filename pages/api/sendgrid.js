const sendgrid = require("@sendgrid/mail");

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "tristanonfroy@gmail.com",
      from: `${req.body.email}`,
      subject: `${req.body.subject}`,
      html: `${req.body.message}`,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}

export default sendEmail;
