import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const transporter = nodemailer.createTransport({
    host: "mipsicored-com.correoseguro.dinaserver.com",
    port: 465,
    secure: true,
    auth: {
      user: "no-reply@mipsicored.com",
      pass: config.noreplyPasswd,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: '"Departamento de soporte | Mipsicored" <no-reply@mipsicored.com>',
      to: "lazaro.roca.pol@gmail.com",
      subject: "Test Nodemailer",
      text: "Hello world!",
      html: "<b>Hello World?</b>",
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending mail:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
    });
  }
});