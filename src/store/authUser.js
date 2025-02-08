import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,

  isSigningUp: false,
  isLoggingIn: false,
  signup: async (credential) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/v1/auth/signup", credential);
      set({ user: response.data.user });
      toast.success("Account created successfully");
    } catch (error) {
      toast.error(error.response.data.message || "Signup failed");
      set({ isSigningUp: false, user: null });
    }
  },
  login: async (credential) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post("/api/v1/auth/login", credential);
      set({ user: response.data.user, isLogginIn: false });
      toast.success("Login successfully");
    } catch (error) {
      set({ isLoggingIn: false, user: null });
      toast.error(error.response.data.message || "Login failed");
    }
  },
}));
