'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const username = formData.get('username') as string
  const options = {
    data: {
      username: username,
      full_name: formData.get('fullname') as string,
    }
  };

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: options,
  }

  const existing = await supabase
  .from("profiles")
  .select()
  .eq("username", username.trim());

  if (existing.data && existing.data.length > 0) {
    return { error: "Username already exists" }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}