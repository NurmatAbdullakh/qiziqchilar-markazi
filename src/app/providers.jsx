'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                retry: 0,
            }
        }
    }));

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>{children}</ChakraProvider>
        </QueryClientProvider>
    )
}