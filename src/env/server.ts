import { createEnv } from "@t3-oss/env-core";
import { ZodError, z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.string().min(1),
  },
  runtimeEnv: import.meta.env, // Called when the schema validation fails.
  emptyStringAsUndefined: true,
  onValidationError: (error: ZodError) => {
    console.error(
      "❌ Invalid Server environment variables:",
      error.flatten().fieldErrors
    );
    throw new Error("❌ Invalid Server environment variables");
  },
  // Called when server variables are accessed on the client.
  onInvalidAccess: (variable: string) => {
    console.error(
      "❌ Attempted to access a server-side environment variable on the client",
      variable
    );
    throw new Error(
      "❌ Attempted to access a server-side environment variable on the client"
    );
  },
});
