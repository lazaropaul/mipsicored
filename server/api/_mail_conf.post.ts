import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();
  var info = { messageId: "" };

  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
  );

  const token = randomUUID();

  const { error } = await supabase.from("verifications").insert({
    email: body.email,
    token: token,
    expires_at: new Date(Date.now() + 1000 * 60 * 60), // 1h
  });

  const verifyUrl = `${config.public.siteUrl}/api/verify?token=${token}&email=${body.email}`;

  //TODO: Clean up spaghettti code

  // Check if running in development environment
  if (process.env.PROD == 'false') {
    // Development
    const nodemailer = await import("nodemailer");
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
      info = await transporter.sendMail({
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
  } else {
    // Production
    // Wrap the import so the bundler doesn’t try to eagerly resolve it:
    const { WorkerMailer } = await import('worker-mailer');
    const mailer = await WorkerMailer.connect({
      credentials: {
        username: "no-reply@mipsicored.com",
        password: config.noreplyPasswd,
      },
      host: "mipsicored-com.correoseguro.dinaserver.com",
      port: 465,
      secure: true,
    });
    try {
      await mailer.send({
        from: { name: "Departamento de soporte | Mipsicored", email: "no-reply@mipsicored.com" },
        to: { name: "Registro", email: body.email  },
        subject: "Confirma tu cuenta en Mipsicored",
        html: `<h1>¡Hola "${body.firstName}"!</h1><br><b>Por favor confirma tu cuenta haciendo clic en el siguiente enlace:</b><br>
             <a href="${verifyUrl}">Confirmar cuenta</a>`,
      });
    } catch (error) {
      console.error("Error sending mail:", error);
      throw createError({
        statusCode: 500,
        statusMessage: "Failed to send email",
      });
    }

    return { success: true, messageId: info.messageId };

  }
});
