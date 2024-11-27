// assets
import { imagotypeSrc } from '@/assets';

const WelcomeView = () => {
    return (
        <main className="p-4 flex flex-col flex-grow items-center gap-4">
            <figure className="w-full max-w-2xl justify-self-center">
                <img className="w-full" src={imagotypeSrc} alt="logo" />
            </figure>
        </main>
    );
};

export default WelcomeView;
