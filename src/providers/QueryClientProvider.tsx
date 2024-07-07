"use client";

import { useState, type ReactNode } from "react";
import {
  QueryClientProvider as DefaultQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

interface QueryClientProviderProps {
	children: ReactNode;
}

const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <DefaultQueryClientProvider client={queryClient}>
      {children}
    </DefaultQueryClientProvider>
  );
};

export default QueryClientProvider;
