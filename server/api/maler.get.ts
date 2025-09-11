import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export default {
  async fetch(request: any, env: any) {

  const msg = createMimeMessage();
  msg.setSender({ name: "Departamento de soporte | Mipsicored", addr: "no-reply@mipsicored.com" });
  msg.setRecipient("lazaro.roca.pol@gmail.com");
  msg.setSubject("An email generated in a worker");
  msg.addMessage({
    contentType: "text/plain",
    data: `Congratulations, you just sent an email from a worker.`,
  });

  const message = new EmailMessage(
    "no-reply@mipsicored.com",
    "lazaro.roca.pol@gmail.com",
    msg.asRaw(),
  );
  try {
    // Assuming you have access to env.SEB via config or some other way
    await env.SEB.send(message);
  } catch (e: any) {
    return { error: true, statusMessage: e.message, message: env };
  }

  return { message: "Hello Send Email World!" };
  },
};