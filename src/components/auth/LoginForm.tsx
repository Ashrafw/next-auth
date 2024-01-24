import React from "react";
import { CardWrapper } from "./CardWrapper";

type Props = {};

export function LoginForm({}: Props) {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
}
