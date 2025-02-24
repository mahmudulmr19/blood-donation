import NextAuth from "next-auth";
import "next-auth/jwt";

type User = {
  id: string;
  mobile_number: string;
  full_name: string;
  email: string;
  designation: string;
  address: string | null;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  profile_picture: string | null;
  role: string;
  created_at: string;
  updated_at: string;
};

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    user: User;
  }
}
