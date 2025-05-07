import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import toast from 'react-hot-toast';

export const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      isLoading: false,
      user: null,

      signUp: (username) => {
        set({ isLoading: true });

        setTimeout(() => {
          if (username !== 'Nickname') {
            toast.error('Oops! Something went wrong. Please check the username and try again.');
            set({ isLoggedIn: false, isLoading: false, user: null });
            return;
          }

          toast.success(`Hi ${username}, welcome to CodeLeap network!`);
          set({ isLoggedIn: true, isLoading: false, user: username });
        }, 1000);
      },

      logout: () => {
        set({ isLoggedIn: false, isLoading: false, user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
