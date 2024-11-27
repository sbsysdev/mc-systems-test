// providers
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RoutesProvider } from './providers/routes';
import { StoreProvider } from './providers/stores';
import { ThemeProvider } from './providers/themes';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider>
                <ThemeProvider>
                    <RoutesProvider />
                </ThemeProvider>
            </StoreProvider>
        </QueryClientProvider>
    );
};

export default App;
