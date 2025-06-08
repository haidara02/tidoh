"use server";

// import { revalidatePath } from 'next/cache'
// import { redirect } from 'next/navigation'

import { createClient } from "@utils/supabase/server";
import { randomUUID } from "crypto";

export async function login(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const username = formData.get("username") as string;
  const options = {
    data: {
      username: username,
      full_name: formData.get("fullname") as string,
    },
  };

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: options,
  };

  const existing = await supabase
    .from("profiles")
    .select()
    .eq("username", username.trim());

  if (existing.data && existing.data.length > 0) {
    return { error: "Username already exists" };
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function submitWave(formData: FormData) {
  const wave = formData.get("text") as string;
  if (!wave || wave.length < 1) {
    return { error: "Wave cannot be empty" };
  }
  const supabase = await createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData.user) {
    return { error: "User not authenticated" };
  }

  await supabase.from("waves").insert({
    user_id: userData.user.id,
    text: wave,
    id: randomUUID(),
  });
  console.log("Form submitted with data:", formData.get("text"));
  return { success: true };

  // // type-casting here for convenience
  // // in practice, you should validate your inputs
  // const data = {
  //   email: formData.get('email') as string,
  //   password: formData.get('password') as string,
  // }

  // const { error } = await supabase.auth.signInWithPassword(data)

  // if (error) {
  //   return { error: error.message }
  // }

  // return { success: true }
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function fetchWaves() {
  const supabase = await createClient();

  const { data, error, status } = await supabase.from("waves").select(`*,
    profiles (
    full_name, username
  )`);

  if (error && status !== 406) {
    throw error;
  }

  if (data) {
    data.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
    return {
      data: data.map((wave) => ({
        ...wave,
        created_at: new Date(wave.created_at).toLocaleString(),
      })),
    };
  }

  return { data: [], error: "No waves found." };
}
