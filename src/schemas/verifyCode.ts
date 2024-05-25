import { z } from "zod";

export const verifyCodeValidation = z.object({
  verifyCode: z
    .string()
    .length(6, "Verification code must be 6 characters long"),
});
