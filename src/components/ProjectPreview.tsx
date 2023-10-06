"use client"
import React, { useEffect, useMemo, useState } from "react";

type MediaItem = {
    type: string; // "image" | "video"
    src: string;
    alt: string;
};

type Props = {
    media: MediaItem[];
    activeDotColor?: string;
    inactiveDotColor?: string;
};

const ProjectPreview: React.FC<Props> = ({ media, activeDotColor = "black", inactiveDotColor = "gray-500" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    return (
        <div className="w-full h-64 md:h-96 md:w-2/3 shadow-lg bg-gray-200 relative overflow-hidden">
            {media.map((item, index) => (
                <div
                    key={index}
                    className={`w-full h-full absolute top-0 left-0 transition-transform duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {item.type === "image" ? (
                        <img src={item.src} alt={item.alt} className="object-cover w-full" />
                    ) : (
                        <video src={item.src} className="object-cover w-full h-full" autoPlay loop muted controls />
                    )}
                </div>
            ))}
            {
                media.length != 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                        {media.map((_, index) => (
                            <div
                                onClick={() => setCurrentIndex(index)}
                                key={index}
                                className={`w-4 h-4 rounded-full mx-1 ${index === currentIndex ? `bg-${activeDotColor}` : `bg-${inactiveDotColor}`
                                    }`}
                            />
                        ))}
                    </div>
                )
            }
            {/* {media.length > 1 && (
                <>
                    <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white" onClick={prevSlide}>
                        Prev
                    </button>
                    <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 p-2 rounded-full text-white" onClick={nextSlide}>
                        Next
                    </button>
                </>
            )} */}
        </div>
    );
};

export default ProjectPreview;
