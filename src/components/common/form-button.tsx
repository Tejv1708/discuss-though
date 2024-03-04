"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      className="w-full bg-slate-400 h-10 rounded-2xl"
      type="submit"
      isLoading={pending}
    >
      {children}
    </Button>
  );
}
