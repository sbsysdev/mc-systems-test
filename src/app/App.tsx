// providers
import { RoutesProvider } from './providers/routes';
import { StoreProvider } from './providers/stores';
import { ThemeProvider } from './providers/themes';

const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <RoutesProvider />
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
