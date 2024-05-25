import { z } from "zod";
import { usernameValidation } from "./signUpSchema";

export const signInSchema = z.object({
  identifier: usernameValidation || z.string().email(),
  password: z.string(),
});
