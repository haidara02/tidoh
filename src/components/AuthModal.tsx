"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@ui/dialog";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { Toaster } from "@ui/sonner";
import { toast } from "sonner";
import { createClient } from "@utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { login, signup } from "@api/actions";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const AuthModal = () => {
  const [supabase] = useState(() => createClient());
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    supabase.auth.getSession().then((res) => {
      if (!res.data.session) {
        setIsOpen(true);
        return;
      }
      setUser(res.data.session.user);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await login(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Logged in successfully");
      location.reload();
    }
    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    const result = await signup(formData);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success("Signed up successfully");
      location.reload();
    }
    setIsLoading(false);
  };

  return (
    <div>
      <Toaster />
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <div
          className={clsx(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm",
            { hidden: !isOpen }
          )}
        >
          <DialogContent
            className="bg-background p-6"
            onPointerDownOutside={(e) => e.preventDefault()}
            onEscapeKeyDown={(e) => e.preventDefault()}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Please sign in to continue
            </h3>
            <div className="flex mb-4 gap-2">
              <Button
                variant="default"
                className={clsx("flex-1", {
                  "bg-secondary text-secondary-foreground hover:bg-muted":
                    !isSignUp,
                })}
                onClick={() => setIsSignUp(false)}
                type="button"
              >
                Login
              </Button>
              <Button
                variant="default"
                className={clsx("flex-1", {
                  "bg-secondary text-secondary-foreground hover:bg-muted":
                    isSignUp,
                })}
                onClick={() => setIsSignUp(true)}
                type="button"
              >
                Sign Up
              </Button>
            </div>
            {!isSignUp ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <Input type="email" name="email" placeholder="Email" required />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <div className="flex w-full justify-end">
                  <Button
                    disabled={isLoading}
                    variant="default"
                    className="rounded-full py-2 px-4 text-lg font-bold cursor-pointer transition duration-200"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignup} className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="mb-2"
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="mb-2"
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  min={3}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="my-2"
                />
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="my-2"
                />
                <div className="flex w-full justify-end">
                  <Button
                    disabled={isLoading}
                    variant="default"
                    className="rounded-full py-2 px-4 text-lg font-bold cursor-pointer transition duration-200"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </div>
              </form>
            )}
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default AuthModal;
