import { useState, useEffect } from 'react';

interface SizeType {
    height: number;
    width: number;
}

export default function useWindowSize() {
    const [size, setSize] = useState<SizeType>({ height: window.innerHeight, width: window.innerWidth });

    useEffect(() => {
        function updateSize() {
            setSize({ height: window.innerHeight, width: window.innerWidth});
        }
        window.addEventListener('resize',updateSize);
        return () => window.removeEventListener('resize',updateSize);
    },[]);

    return size;
}