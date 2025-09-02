import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseSecretKey
  );

  const token = randomUUID();

  const { error } = await supabase.from("verifications").insert({
    email: query.email,
    token: token,
    expires_at: new Date(Date.now() + 1000 * 60 * 60), // 1h
  });

  const verifyUrl = `${config.public.baseUrl}/api/verify?token=${token}&email=${query.email}`;
  console.log(verifyUrl);
  console.log(error)
});
