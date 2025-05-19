"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    // Full reload back to homepage after short delay
    window.location.href = "/";
  }, []);

  return <p>Redirecting...</p>;
}
