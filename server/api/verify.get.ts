import { createClient } from "@supabase/supabase-js";
import { sendRedirect } from 'h3';

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
    sendRedirect(event, `/error-verification`);
    return { success: false, error: verificationError.message };
  };

  // 1. Look up user by email
  const { data: users, error: getError } =
    await supabase.auth.admin.listUsers();
  if (getError) throw getError;

  const user = users.users.find((u) => u.email === query.email);
  if (!user) {
    sendRedirect(event, `/error-verification`);
    return { success: false, error: "User not found" };
  };

  // 2. Update the user by ID
  const { data, error } = await supabase.auth.admin.updateUserById(user.id, {
    user_metadata: {
      verified: true,
      verified_at: new Date(),
    },
  });

  const response = await supabase.from("verifications").delete().eq("email", email);

  if (!error){
    sendRedirect(event, `/login`);
  } else {
    sendRedirect(event, `/error-verification`);
    // sendRedirect(event, `/error?msg=${error.message}`);
  }
  return {
    success: true,
    user_id: data.user?.id,
  };
});
