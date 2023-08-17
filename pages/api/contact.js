const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_EMAIL_PRIVATE_KEY,
});

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

  mg.messages
    .create("sandboxcf138aa4199440c69f096ddc314cb9b1.mailgun.org", {
      from: "sender@beatblox.org",
      // to: ["onboarding@beatblox.org"],
      to: ["nicolashussein14@gmail.com"],
      subject: `Onboarding Request | ${body.action}`,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    })
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

  res.status(200).json({ status: "Ok" });
};
