import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Please enter a valid name"),

  email: z.string()
    .email("Please enter a valid email address"),

  phone: z.string()
    .regex(/^(\+91[\s]?)?[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),

  services: z.array(z.string()).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
