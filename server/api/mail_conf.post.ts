import { createClient } from '@supabase/supabase-js'
import { randomUUID } from "crypto";
import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey)

  const token = randomUUID()

  const { error } = await supabase.from("verifications").insert({
    email: body.email,
    token: token,
    expires_at: new Date(Date.now() + 1000 * 60 * 60), // 1h
  });

  const verifyUrl = `http://localhost:3000/api/verify?token=${token}&email=${body.email}`

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
    const info: nodemailer.SentMessageInfo = await transporter.sendMail({
      from: '"Departamento de soporte | Mipsicored" <no-reply@mipsicored.com>',
      to: body.email,
      subject: "Confirma tu cuenta en Mipsicored",
      html: `<h1>¡Hola "${body.firstName}"!</h1><br><b>Por favor confirma tu cuenta haciendo clic en el siguiente enlace:</b><br>
             <a href="${verifyUrl}">Confirmar cuenta</a>`,
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