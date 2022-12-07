import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({
      message: 'Hello'
    })
  } else {
    res.status(400).json({
      message: 'Bad Request Method'
    })
  }
}
