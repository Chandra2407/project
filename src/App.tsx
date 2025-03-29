import React, { useState, useEffect, memo } from 'react';
import { Heart, Cake, Star, Gift, Flower } from 'lucide-react';
import './App.css'; // Import the CSS file for global styles

// Memoized Balloon component to prevent unnecessary re-renders
const Balloon = memo(({ color, delay, xEnd, rotation }: { color: string; delay: number; xEnd: number; rotation: number }) => {
    return (
        <div
            className="balloon"
            style={{
                backgroundColor: color,
                animationDelay: `${delay}s`,
                '--x-end': `${xEnd}px`,
                '--rotation': `${rotation}deg`,
            } as React.CSSProperties}
        />
    );
});

const App = () => {
    const [balloons, setBalloons] = useState<Array<{ id: number; color: string; delay: number; xEnd: number; rotation: number }>>([]);

    useEffect(() => {
        const colors = ['#FF69B4', '#FFB6C1', '#FF1493', '#DB7093', '#C71585'];
        const newBalloons = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: Math.random() * 2,
            xEnd: Math.random() * window.innerWidth - window.innerWidth / 2,
            rotation: Math.random() * 360,
        }));
        setBalloons(newBalloons);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
            {/* Balloons */}
            {balloons.map((balloon) => (
                <Balloon
                    key={balloon.id}
                    color={balloon.color}
                    delay={balloon.delay}
                    xEnd={balloon.xEnd}
                    rotation={balloon.rotation}
                />
            ))}

            {/* Decorative Flowers */}
            <DecorativeFlower position="left" color="text-pink-400" />
            <DecorativeFlower position="right" color="text-purple-400" delay="0.5s" />

            {/* Hero Section */}
            <HeroSection />

            {/* Memory Timeline */}
            <MemoryTimeline />

            {/* Mini Puzzle Game */}
            <MiniPuzzleGame />

            {/* YouTube Playlist Player */}
            <YouTubePlaylistPlayer />

            {/* Birthday Wishes */}
            <BirthdayWishes />

            {/* Footer */}
            <Footer />
        </div>
    );
};

// Extracted DecorativeFlower component
const DecorativeFlower = ({ position, color, delay = '0s' }: { position: string; color: string; delay?: string }) => (
    <div className={`flower flower-${position} animate-sway`} style={{ animationDelay: delay }}>
        <Flower className={`w-full h-full ${color}`} />
    </div>
);

// Extracted HeroSection component
const HeroSection = () => (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center opacity-20"></div>
        <div className="text-center z-10 p-8">
            <h1 className="text-6xl font-bold text-pink-600 mb-4">Happy Birthday Ankita!</h1>
            <p className="text-2xl text-gray-700 italic">"To the one who makes every day special..."</p>
            <Heart className="w-16 h-16 text-pink-500 mx-auto mt-8 animate-pulse" />
        </div>
    </div>
);

// Extracted MemoryTimeline component
const MemoryTimeline = () => (
    <>
        <div className="py-20 bg-white/80">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Things you love</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <MemoryCard
                        date="Cats"
                        image="https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        description="All your kitties are wishing you a very happy birthday..."
                    />
                    <MemoryCard
                        date="Flowers"
                        image="https://plus.unsplash.com/premium_photo-1671974489983-083171c0215e?q=80&w=2055&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        description="Lets go to corny garden with tomu and sheba for a cute little birthday picnic.
                    Also will be building this corny garden in our backyard for you.."
                    />
                    <MemoryCard
                        date="Books"
                        image="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        description="i knew you were book nerd when i first met you, cutie bookish girly...
                    "
                    />
                    <MemoryCard
                        date="Waffles"
                        image="https://plus.unsplash.com/premium_photo-1673011775209-97272be970a2?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        description="Waffles date??..."
                    />
                    <MemoryCard
                        date="Art"
                        image="https://plus.unsplash.com/premium_photo-1676668708126-39b12a0e9d96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        description="Once an Artist always an artist..."
                    />
                    <MemoryCard
                        date="Happy Birthday my beautiful princess"
                        image="https://images.unsplash.com/photo-1513151233558-d860c5398176"
                        description="Here's to many more beautiful moments..."
                    />
                </div>
            </div>
        </div>
        <div className="py-20 bg-white/80">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Memories we shared together</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <MemoryCard
                        date="Sassy cloud"
                        image="../images/1.jpg"
                        description="I shared this when we were early in our talking stage"
                    />
                    <MemoryCard
                        date="You just show casing your talent"
                        image="../images/2.jpg"
                        description=""
                    />
                    <MemoryCard
                        date="You just show casing your another masterpiece"
                        image="../images/5.jpg"
                        description=""
                    />
                    <MemoryCard
                        date="Aww you drew me..."
                        image="../images/3.jpg"
                        description="So cutee...i loved it"
                    />
                </div>
            </div>
        </div>
    </>
);

// Mini Puzzle Game Component
const MiniPuzzleGame = () => {
    const [pieces, setPieces] = useState<number[]>([]);
    const [shuffled, setShuffled] = useState<number[]>([]);
    const [isSolved, setIsSolved] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility

    useEffect(() => {
        initializeGame();
    }, []);

    const initializeGame = () => {
        const initialPieces = Array.from({ length: 9 }, (_, i) => i + 1);
        setPieces(initialPieces);
        setShuffled(shuffleArray(initialPieces));
        setIsSolved(false);
        setShowPopup(false);
    };

    const shuffleArray = (array: number[]) => {
        return array
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
    };

    const handlePieceClick = (index: number) => {
        if (isSolved) return;

        const emptyIndex = shuffled.indexOf(9); // Assuming 9 is the empty piece
        const validMoves = [emptyIndex - 1, emptyIndex + 1, emptyIndex - 3, emptyIndex + 3];

        if (validMoves.includes(index)) {
            const newShuffled = [...shuffled];
            [newShuffled[emptyIndex], newShuffled[index]] = [newShuffled[index], newShuffled[emptyIndex]];
            setShuffled(newShuffled);

            if (JSON.stringify(newShuffled) === JSON.stringify(pieces)) {
                setIsSolved(true);
                setShowPopup(true); // Show the popup
            }
        }
    };

    return (
        <div className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-8">Can you beat this???</h2>
                <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
                    {shuffled.map((piece, index) => (
                        <div
                            key={index}
                            className={`w-20 h-20 flex items-center justify-center border ${piece === 9 ? 'bg-gray-200' : 'bg-pink-300'
                                } text-xl font-bold text-gray-800 cursor-pointer`}
                            onClick={() => handlePieceClick(index)}
                        >
                            {piece !== 9 ? piece : ''}
                        </div>
                    ))}
                </div>
                {isSolved && <p className="mt-4 text-lg text-green-600 font-bold">Congratulations! You solved the puzzle!</p>}

                {/* Restart Button */}
                <button
                    className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
                    onClick={initializeGame}
                >
                    Restart Game
                </button>

                {/* Custom Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
                            <h3 className="text-2xl font-bold text-pink-600 mb-4">Congratulations! 🎉</h3>
                            <p className="text-gray-700 mb-6">
                                Ankita, you are truly amazing, kind, and beautiful inside and out. You light up every room you walk into, and your presence makes everything better. Here's to celebrating you and all the wonderful things you bring to the world! ❤️
                            </p>
                            <button
                                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
                                onClick={() => setShowPopup(false)} // Close the popup
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// YouTube Playlist Player Component
const YouTubePlaylistPlayer = () => {
    const playlistId = "PLPFbEfju8rrapf6W6uJrTM-T-FhpzzZTA"; // Replace with your YouTube playlist ID

    return (
        <div className="py-10 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Your Favourite Songs</h2>
                <div className="mt-6 flex justify-center"> {/* Added flex container for centering */}
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                        title="YouTube Playlist"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

// Extracted BirthdayWishes component
const BirthdayWishes = () => (
    <div className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Birthday Wishes</h2>
            <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-700">
                <p className="leading-relaxed">
                    To my amazing girlfriend, who fills every day with joy and laughter.
                    Your smile brightens my world, and your love makes life beautiful.
                </p>
                <p className="leading-relaxed">
                    On your special day, I want you to know how much you mean to me
                    and how grateful I am to have you in my life.
                </p>
                <p className="leading-relaxed">
                    You are not just my girlfriend, but my best friend, my confidante,
                    and my greatest supporter. I cherish every moment we spend together. I really love everything about you.
                </p>
                <p className="leading-relaxed">
                    Here's to celebrating you, not just today, but every day.
                    Happy Birthday, my love! ❤️
                </p>
            </div>
            <div className="flex justify-center gap-8 mt-12">
                <Cake className="w-12 h-12 text-pink-500 animate-float" />
                <Star className="w-12 h-12 text-purple-500 animate-spin-slow" />
                <Gift className="w-12 h-12 text-pink-500 animate-bounce-custom" />
            </div>
        </div>
    </div>
);

// Extracted Footer component
const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 text-center">
        <p className="text-sm">Made with ❤️ for the most special person in my life</p>
    </footer>
);

interface MemoryCardProps {
    date: string;
    image: string;
    description: string;
}

const MemoryCard = ({ date, image, description }: MemoryCardProps) => {
    const [isFlipped, setIsFlipped] = useState(true);

    return (
        <div
            className="h-96 cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                    <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-hidden">
                        <img
                            src={image}
                            alt={date}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Back of card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="flex flex-col items-center justify-center h-full p-8 bg-gradient-to-br from-pink-100 to-purple-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{date}</h3>
                        <p className="text-xl text-gray-700 text-center">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;