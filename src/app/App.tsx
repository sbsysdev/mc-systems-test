import { AppLayout } from './layouts';
import { StoreProvider } from './providers/stores';
import { ThemeProvider } from './providers/themes';

const App = () => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <AppLayout>
                    <div>ROUTER OUTLET</div>
                </AppLayout>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
