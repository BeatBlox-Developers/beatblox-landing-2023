const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    instagram: ${body.instagram}\r\n
    website: ${body.website}\r\n
    Preview: ${body.preview}\r\n
    Tracklist: ${body.tracklist}\r\n
    About: ${body.about}
  `;

  await mail.send({
    to: 'emadobao@gmail.com',
    from: 'onboarding@beatblox.org',
    subject: `Onboarding Request | ${body.action}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}