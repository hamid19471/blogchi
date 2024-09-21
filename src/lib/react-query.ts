import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // norification Errors
    },
  }),

  mutationCache: new MutationCache({
    onError: (error) => {
      // norification Errors
    },
  }),

  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      gcTime: 1000 * 60 * 60 * 24,
      throwOnError: false,
    },
  },
});
