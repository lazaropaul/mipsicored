import { createClient, type EmailOtpType } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseSecretKey
  );

  // leer query params
  const query = getQuery(event);
  const { token, type, email } = query;

  if (!token || !email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Missing required params",
    });
  };

  const { error: verificationError } = await supabase
    .from("verifications")
    .select("*")
    .eq("token", token)
    .eq("email", email)
    .single();

  if (verificationError) {
    return { success: false, error: verificationError.message };
  };

  // 1. Look up user by email
  const { data: users, error: getError } =
    await supabase.auth.admin.listUsers();
  if (getError) throw getError;

  const user = users.users.find((u) => u.email === query.email);
  if (!user) {
    return { success: false, error: "User not found" };
  };

  // 2. Update the user by ID
  const { data, error } = await supabase.auth.admin.updateUserById(user.id, {
    user_metadata: {
      verified: true,
      verified_at: new Date(),
    },
  });

  return {
    success: true,
    user_id: data.user?.id,
  };
});
