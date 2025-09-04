import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseSecretKey
  );

  const body = await readBody(event);

  try {
    const { data, error: supabaseError } = await supabase.auth.admin.createUser(
      {
        email: body.email,
        password: body.password,
        email_confirm: true, // This flag is necessary so Supabase marks the user as verified and use server side verification
        user_metadata: {
          first_name: body.firstName,
          last_name: body.lastName,
          phone: body.phone,
          verified: false,
          verified_at: new Date(0),
        },
      }
    );

    if (supabaseError && supabaseError.message.includes("already been registered")) {
      throw createError({
        statusCode: 409,
        statusMessage: "Conflict: User already exists",
        message: supabaseError.message, // optional
      });
    } else if (supabaseError) {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error:" + supabaseError.message,
        message: supabaseError.message, // optional
      });
    }

    try {
      const mailData = await $fetch("/api/mail_conf", {
        method: "POST",
        body: {
          email: body.email,
          firstName: body.firstName,
        },
      });
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: "Internal Server Error",
        message: (error as Error).message, // optional
      });
    }

    return {
        success: true,
        message: "User created successfully",
    };
  } finally {
    // Cleanup or additional logic can go here if needed
  }
});
