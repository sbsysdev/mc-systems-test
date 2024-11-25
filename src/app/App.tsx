import { StoreProvider } from './providers/stores';
import { ThemeProvider, ThemeSwitcher } from './providers/themes';

const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <main>
                    <ThemeSwitcher />
                </main>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
