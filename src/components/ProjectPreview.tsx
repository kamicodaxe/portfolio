'use client';
import Image from "next/image";
import React, { useState } from "react";

type Props = {
    src: string;
    alt: string;
}

const ProjectPreview: React.FC<Props> = ({ src, alt }) => {

    const [mousePositionY, setMousePositionY] = useState(0);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const { top, height } = (event.target as HTMLDivElement).getBoundingClientRect();
        const y = ((event.clientY - top) / height) * 100;
        setMousePositionY(y);
    };

    return (
        <div className='w-full h-48 md:h-96 md:w-2/3 bg-gray-200 relative overflow-hidden'
            onMouseMove={handleMouseMove}
        // onMouseLeave={() => setMousePositionY(0)}
        >
            <Image
                className='object-cover'
                src={src}
                alt={alt}
                fill
                style={{
                    objectPosition: `0% ${mousePositionY.toFixed(2)}%`
                }}
            />
        </div>
    )
}



export default ProjectPreview