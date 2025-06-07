import { z } from "zod";

export const userRegisterSchema = z.object({
  name: z.string({
    required_error: "name field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Name field is required"
  }).max(30, {
    message: "Must be 30 or fewer characters long"
  }),
  email: z.string({
    required_error: "email field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Email field is required"
  }).email({
    message: "contains invalid characters"
  }),
  password: z.string({
    required_error: "password field is required",
    invalid_type_error: "type of data incorrect",
  }).min(6, {
    message: "Must be 6 or more characters long"
  }),
  confirmPassword: z.string({
    required_error: "confirm password field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Confirm Password field is required"
  })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
})

export const userLoginSchema = z.object({
  email: z.string({
    required_error: "email field is required",
    invalid_type_error: "type of data incorrect",
  }).min(1, {
    message: "Email field is required"
  }).email({
    message: "contains invalid characters"
  }),
  password: z.string({
    required_error: "password field is required",
    invalid_type_error: "type of data incorrect",
  }).min(6, {
    message: "Must be 6 or more characters long"
  })
})