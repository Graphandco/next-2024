import LottieRocket from '@/lottie/LottieRocket';
import Button from '../UI/Button';

export const HomeHero = () => {
    return (
        <div className="container py-12 ">
            <Button>
                <span>Click !</span>
            </Button>
            <div className="mt-24 mb-[2000px]">
                <LottieRocket />
            </div>
        </div>
    );
};
