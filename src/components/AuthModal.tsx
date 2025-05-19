"use client";

import React, { useEffect, useState } from "react";
import { Dialog } from "./ui/dialog";
import { DialogContent } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createClient } from "../../utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { login, signup } from "../app/api/actions";
import { register } from "module";
import clsx from "clsx";

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    const checkUser = () => {
      const supabase = createClient();

      supabase.auth.getUser().then(({ data, error }) => {
        if (!error && data.user) {
          setUser(data.user);
        } else {
          setIsOpen(true);
        }
      });
    };
    checkUser();
  }, []);
  const [isSignUp, setIsSignUp] = useState(false);
  return (
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
            <form action={login} method="post" className="space-y-4">
              <Input type="email" name="email" placeholder="Email" required />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <div className="flex w-full justify-end">
                <Button
                  variant="default"
                  className="rounded-full py-2 px-4 text-lg font-bold cursor-pointer transition duration-200"
                  type="submit"
                >
                  Sign In
                </Button>
              </div>
            </form>
          ) : (
            <form>
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
                  variant="default"
                  className="rounded-full py-2 px-4 text-lg font-bold cursor-pointer transition duration-200"
                  formAction={signup}
                >
                  Sign Up
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default AuthModal;
