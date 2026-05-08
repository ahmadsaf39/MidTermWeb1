import toast from "react-hot-toast";

export const toastService = {
  success: (message: string) => {
    toast.success(message);
  },

  error: (message: string) => {
    toast.error(message);
  },

  warning: (message: string) => {
    toast(message, {
      icon: "⚠️",
    });
  },
};