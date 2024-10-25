import { jwtDecode } from "jwt-decode";
import { toast } from "sonner";

export const verifyToken = (token: string) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    toast.error("invalid token");
    return null;
  }
};
