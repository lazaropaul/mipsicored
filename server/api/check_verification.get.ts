import { createClient, type EmailOtpType } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseSecretKey
  );

  // leer query params
  const query = getQuery(event);
  const { email } = query;

  if (!email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required params",
    });
  };

  // 1. Look up user by email
  const { data: users, error: getError } =
    await supabase.auth.admin.listUsers();
  if (getError) throw getError;

  const user = users.users.find((u) => u.email === query.email);
  if (!user || user.user_metadata.verified !== true) {
    return { verified: false };
  };

  console.log("User is verified:");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ verified: true });
    });
  });
});
