"use client";

import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@ui/dialog";
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
    } = supabase.auth.onAuthStateChange((e, session) => {
      void session;
      if (e !== "INITIAL_SESSION") {
        router.refresh();
      }
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
      <div className="hidden">{user ? user.email : null}</div>
      {/* #TODO: Figure out how to use this user state in the app */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="bg-background p-6 backdrop-blur-sm"
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <DialogHeader>
            <DialogTitle>Please sign in to continue</DialogTitle>
            <DialogDescription className="flex m-4 gap-5">
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
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (isSignUp) {
                handleSignup(e);
                return;
              }
              handleLogin(e);
            }}
            className="space-y-4"
          >
            <Input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="mb-2 border-[0.5px] border-gray-500"
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="mb-2 border-[0.5px] border-gray-500"
            />
            {isSignUp && (
              <div>
                <Input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required
                  className="mb-2 border-[0.5px] border-gray-500"
                />
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  min={3}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="mb-2 border-[0.5px] border-gray-500"
                />
                <Input
                  type="text"
                  name="fullname"
                  placeholder="Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="mb-2 border-[0.5px] border-gray-500"
                />
              </div>
            )}

            <div className="mt-5 flex w-full justify-end">
              <Button
                disabled={isLoading}
                variant="default"
                className="rounded-full py-2 px-4 text-lg font-bold cursor-pointer transition duration-200"
                type="submit"
              >
                Sign {!isSignUp ? "In" : "Up"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AuthModal;
