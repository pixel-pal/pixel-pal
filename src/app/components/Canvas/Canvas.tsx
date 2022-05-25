import React, { useRef, useEffect, useState } from 'react';

const Canvas = (props : Object) => {
    const canvasRef = useRef(null);
    const [coordinates, setCoordinates] = useState<Number[]>([]);

    const draw = (ctx: any, location : any) => {
        ctx.fillStyle = 'rgba(59, 108, 212, 0.5)'
        ctx.translate(location.x, location.y)
        ctx.fillRect(0, 0, 10, 10)
    }

    const handleCanvasClick = (event : any) => {
        const currentCoord = { x: event.clientX, y: event.clientY}
        console.log(currentCoord)
        setCoordinates([currentCoord])
    }
    
    useEffect(() => {
        const canvas : any = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

        coordinates.forEach((coordinate) => draw(ctx, coordinate))

    }, [])

    return(
        <div>
            <canvas ref={canvasRef} {...props} onClick={handleCanvasClick} id='canvas'></canvas>            
        </div>
    )
}

export default Canvas;