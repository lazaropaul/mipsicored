import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();
  const body = await readBody(event);

  const msg = createMimeMessage();
  msg.setSender({ name: "Departamento de soporte | Mipsicored", addr: "no-reply@mipsicored.com" });
  msg.setRecipient(body.email);
  msg.setSubject("An email generated in a worker");
  msg.addMessage({
    contentType: "text/plain",
    data: `Congratulations, you just sent an email from a worker.`,
  });

  const message = new EmailMessage(
    "no-reply@mipsicored.com",
    body.email,
    msg.asRaw(),
  );
  try {
    // Assuming you have access to env.SEB via config or some other way
    await config.env.SEB.send(message);
  } catch (e: any) {
    return { error: e.message };
  }

  return { message: "Hello Send Email World!" };
});