import React, { useRef, useEffect, useState } from 'react';
import { Coordinate } from '../../types';

const Canvas = (props : Object) => {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
    const [context, setContext] = useState(null);

    function draw(location : Coordinate){
        context.fillStyle = 'rgba(59, 108, 212, 0.5)'
        console.log(location)
        const adjX : number = location.x;
        const adjY : number = location.y;
        context.fillRect(adjX, adjY, 50, 50);
    }

    const handleCanvasClick = (event : any) => {
        const canvas : any = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        let xCoor = event.clientX - rect.left;
        let yCoor = event.clientY - rect.top;
        // xCoor = Math.floor(16 * xCoor / canvas.clientWidth)
        // yCoor = Math.floor(16 * yCoor /canvas.clientHeight)
        const currentCoord = { x: xCoor, y: yCoor}
        draw(currentCoord);
        setCoordinates([...coordinates, currentCoord])
    }
    
    useEffect(() => {
        const canvas : any = canvasRef.current;
        setContext(canvas.getContext('2d'));
        if(!canvas.getContext) return;

        console.log(coordinates)

        if(coordinates.length){
            draw(coordinates[coordinates.length - 1])
        }

    }, [])

    return(
        <div>
            <canvas ref={canvasRef} {...props} onClick={handleCanvasClick} id='canvas'></canvas>            
        </div>
    )
}

export default Canvas;