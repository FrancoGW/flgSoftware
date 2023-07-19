import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.hostinger.com', // Cambia esto al host de SMTP de hostinger
        port: 465, // Puerto SMTP de hostinger
        secure: true, // Configura en true si el puerto es 465
        auth: {
          user: 'flgwebdeveloper@flgportafolio.online',
          pass: 'franco123QWE!',
        },
      });

      const mailOptions = {
        from: 'flgwebdeveloper@flgportafolio.online',
        to: 'lautarofrancogaray.unne@hotmail.com',
        subject: 'Nuevo mensaje de contacto',
        text: `
          Nombre Completo: ${fullName}
          Email: ${email}
          Mensaje: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Correo electrónico enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo electrónico:', error);
      res.status(500).json({ message: 'Error al enviar el correo electrónico' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
