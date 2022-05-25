import React, { useRef, useEffect, useState } from 'react';
import { Coordinate } from '../../types';

const Canvas = (props : Object) => {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

    const draw = (ctx: any, location : Coordinate) => {
        console.log(location)
        ctx.fillStyle = 'rgba(59, 108, 212, 0.5)'
        const adjX : number = location.x;
        const adjY : number = location.y;
        ctx.fillRect(adjX, adjY, 10, 10)
    }

    const handleCanvasClick = (event : any) => {
        const currentCoord = { x: event.clientX, y: event.clientY}
        setCoordinates([...coordinates, currentCoord])
        console.log(coordinates)
    }
    
    useEffect(() => {
        const canvas : any = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        coordinates.forEach((coordinate) => draw(ctx, coordinate))

    }, [coordinates])

    return(
        <div>
            <canvas ref={canvasRef} {...props} onClick={handleCanvasClick} id='canvas'></canvas>            
        </div>
    )
}

export default Canvas;