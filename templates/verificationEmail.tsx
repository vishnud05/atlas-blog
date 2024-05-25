import { EmailTemplateProps } from "@/types";
import * as React from "react";

export const VerificationEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ username, verifyCode }) => {
  return (
    <div>
      <h1>Welcome, {username} to A T L A S!</h1>
      <p>Atlas is a modern age blogging platform built for developers.</p>
      <p>Here is your Verification code</p>
      <p>{verifyCode}</p>
    </div>
  );
};
