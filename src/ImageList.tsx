import React from 'react';

interface ImageListProps {
    images: Array<{ src: string; alt: string; description: string }>;
}

const ImageList: React.FC<ImageListProps> = ({ images }) => {
    return (
        <div className="space-y-6">
            {images.map((image, index) => (
                <div key={index} className="rounded-lg shadow-lg text-center bg-white p-4">
                    <div className="overflow-hidden rounded-md">
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="w-auto h-auto max-w-full mx-auto rounded-md transition-transform duration-300 hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <p className="mt-4 text-gray-800 text-base font-semibold bg-gradient-to-r from-pink-100 to-purple-100 p-2 rounded-md shadow-sm">
                        {image.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default ImageList;
