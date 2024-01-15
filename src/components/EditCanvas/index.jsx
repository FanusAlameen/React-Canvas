import { useRef, useEffect, useState } from 'react'
import { fabric } from 'fabric'
import EditTools from '../EditTools'
import { EditorContainer, CanvasContainer, MainHeading } from './styled'

const EditCanvas = () => {
    const canvasRef = useRef(null)
    const [canvas, setCanvas] = useState(null)
    const [canvasWidth, setCanvasWidth] = useState(500)
    const [canvasHeight, setCanvasHeight] = useState(500)
    const [canvasHistory, setCanvasHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(-1)

    useEffect(() => {
        const newCanvas = new fabric.Canvas(canvasRef.current, {
            backgroundColor: 'white',
            selection: false,
            width: canvasWidth,
            height: canvasHeight,
        })

        setCanvas(newCanvas)

        return () => {
            newCanvas.dispose()
        }
    }, [canvasWidth, canvasHeight])

    const saveCanvasState = () => {
        if (canvas) {
          const jsonData = JSON.stringify(canvas.toDatalessObject());
          setCanvasHistory((prevHistory) => [...prevHistory, jsonData]);
          setHistoryIndex((prevIndex) => prevIndex + 1);
        }
    }

    const handleUndo = () => {
        if(historyIndex > 0){
            setHistoryIndex((prevIndex) => prevIndex - 1)
            loadCanvasFromHistory(historyIndex - 1)
        }
    }

    const handleRedo = () => {
        if (historyIndex < canvasHistory.length - 1) {
            setHistoryIndex((prevIndex) => prevIndex + 1)
            loadCanvasFromHistory(historyIndex + 1)
        }
    }

    const loadCanvasFromHistory = (index) => {
        if(canvas && canvasHistory[index]) {
            canvas.loadFromJSON(canvasHistory[index], () => {
                canvas.renderAll()
            })
        }
    }

    const handleAddText = () => {
        if (!canvas) return 

        const text = new fabric.Textbox('Your Text Here', {
            left: 100,
            top: 100,
            fontFamily: 'Arial',
            fontSize: 18,
            fill: '#000000',
            fontWeight: 'normal',
            fontStyle: 'normal',
            textDecoration: 'none',
            textAlign: 'left',
            selectable: true, // Enable text selection
            hasControls: true, // Enable resizing controls
            hasBorders: true, // Enable border controls
            lockMovementX: false, // Allow horizontal movement
            lockMovementY: false, // Allow vertical movement
            lockRotation: false, // Allow rotation
            lockScalingX: false, // Allow scaling on X-axis
            lockScalingY: false, // Allow scaling on Y-axis
            lockUniScaling: false, // Uniform scaling
            centeredScaling: false, // Centered scaling
        })

        canvas.add(text)
        saveCanvasState()
    }

    const handleClearCanvas = () => {
        if (!canvas) return 

        canvas.clear()
        saveCanvasState()
    }

    const handleToggleBold = () => {
        if (!canvas) return 

        const activeObject = canvas.getActiveObject()
        if(activeObject && activeObject.isType('textbox')) {
            activeObject.set('fontWeight', activeObject.fontWeight === 'bold' ? 'normal' : 'bold')
            canvas.renderAll()
            saveCanvasState()
        }
    }

    const handleToggleItalic = () => {
        if (!canvas) return 

        const activeObject = canvas.getActiveObject()
        if(activeObject && activeObject.isType('textbox')) {
            activeObject.set('fontStyle', activeObject.fontStyle === 'italic' ? 'normal' : 'italic')
            canvas.renderAll()
            saveCanvasState()
        }
    }

    const handleTextAlign = (textAlign) => {
        if (!canvas) return
    
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.isType('textbox')) {
          activeObject.set('textAlign', textAlign)
          canvas.renderAll()
          saveCanvasState()
        }
    }

    const handleFontColor = (color) => {
        if (!canvas) return;

        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.isType('textbox')) {
          activeObject.set('fill', color)
          canvas.renderAll()
          saveCanvasState()
        }
    }

    const handleFontFamily = (fontFamily) => {
        if (!canvas) return 

        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.isType('textbox')) {
          activeObject.set('fontFamily', fontFamily)
          canvas.renderAll()
          saveCanvasState()
        }
    }

    const handleFontSize = (fontSize) => {
        if (!canvas) return
      
        const activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.isType('textbox')) {
          activeObject.set('fontSize', fontSize)
          canvas.renderAll()
          saveCanvasState()
        }
    }
      
    const handleCanvasWidth = (canvasWidth) => {
        setCanvasWidth(canvasWidth)
        saveCanvasState()
    }

    const handleCanvasHeight = (canvasHeight) => {
        setCanvasHeight(canvasHeight)
        saveCanvasState()
    }

    return (
        <>
         <EditorContainer>
            <MainHeading>React Canvas</MainHeading>
            <EditTools
             handleUndo={handleUndo}
             handleRedo={handleRedo}
             handleAddText={handleAddText}
             handleToggleBold={handleToggleBold}
             handleToggleItalic={handleToggleItalic}
             handleFontColor={handleFontColor}
             handleFontFamily={handleFontFamily}
             handleFontSize={handleFontSize}
             handleTextAlign={handleTextAlign}
             handleClearCanvas={handleClearCanvas}
             handleCanvasHeight={handleCanvasHeight}
             handleCanvasWidth={handleCanvasWidth}
            />
         </EditorContainer>

         <CanvasContainer>
            <canvas
             ref={canvasRef}
             width={canvasWidth}
             height={canvasHeight}
            />
         </CanvasContainer>
        </>
    )
}

export default EditCanvas