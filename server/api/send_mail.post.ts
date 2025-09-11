import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig();
  const body = await readBody(event);
  const env = event.context.cloudflare?.env;

  const msg = createMimeMessage();
  msg.setSender({ name: "<SENDER_NAME>", addr: "<SENDER_EMAIL>" });
  msg.setRecipient({ name: "<RECIPIENT_NAME>", addr: "<RECIPIENT_EMAIL>" });
  msg.setSubject("An email generated in a worker");
  msg.addMessage({
    contentType: "text/plain",
    data: `Congratulations, you just sent an email from a worker.`,
  });

  const message = new EmailMessage(
    "<FROM_ADDRESS>", // replace with your verified sender
    "<TO_ADDRESS>",   // replace with your recipient
    msg.asRaw(),
  );
  try {
    // Assuming you have access to env.SEB via config or some other way
    await env.SEB.send(message);
  } catch (e: any) {
    return { status: 500, error: true, statusMessage: "Error sending mail", message: e.message };
  }

  return { status: 200, message: "Mail sent successfully" };
});