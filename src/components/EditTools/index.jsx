import { BiBold, BiItalic, BiUndo, BiRedo } from "react-icons/bi"
import { TbTextPlus } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import {
    EditingToolsContainer,
    InputsDivision,
    CanvasDivision,
    CanvasContainer,
    HeadingText,
    SelectablesContainer,
    InputContainer,
    ButtonContainer,
    AddTextButton,
    DeleteCanvasButton,
    ToolButton,
    LabelValue,
    SelectInput,
    OptionsInput,
    FontColorInput,
} from './styled'

const EditTools = props => {
    return(
        <>
          <EditingToolsContainer>

            <InputsDivision>

             <ButtonContainer>

              <AddTextButton onClick={() => props.handleAddText()}>
                <TbTextPlus size={'32px'} />
              </AddTextButton>

             <SelectablesContainer>

              <ToolButton onClick={() => props.handleUndo()}>
                <BiUndo size={'32px'} />
              </ToolButton>

              <ToolButton onClick={() => props.handleRedo()}>
                <BiRedo size={'32px'} />
              </ToolButton>

              <ToolButton onClick={() => props.handleToggleBold()}>
                <BiBold size={'32px'} />
              </ToolButton>

              <ToolButton onClick={() => props.handleToggleItalic()}>
                <BiItalic size={'32px'} />
              </ToolButton>

              </SelectablesContainer>

              <DeleteCanvasButton onClick={() => props.handleClearCanvas()}>
               <MdDeleteForever size={'32px'} />
              </DeleteCanvasButton>
              
              </ButtonContainer>
              

              <SelectablesContainer>
              <InputContainer>
               <LabelValue htmlFor="font-size">Font Size : </LabelValue>
               <SelectInput id="font-size" onChange={(e) => props.handleFontSize(e.target.value)}>
                <OptionsInput value="8">8</OptionsInput>
                <OptionsInput value="10">10</OptionsInput>
                <OptionsInput value="12">12</OptionsInput>
                <OptionsInput value="14">14</OptionsInput>
                <OptionsInput value="16">16</OptionsInput>
                <OptionsInput value="18">18</OptionsInput>
                <OptionsInput value="20">20</OptionsInput>
               </SelectInput>
              </InputContainer>

              <InputContainer>
               <LabelValue htmlFor="font-family">Font Family : </LabelValue>
               <SelectInput id="font-family" onChange={(e) => props.handleFontFamily(e.target.value)}>
                <OptionsInput value="Times New Roman">Times New Roman</OptionsInput>
                <OptionsInput value="Verdana">Verdana</OptionsInput>
                <OptionsInput value="Arial">Arial</OptionsInput>
                <OptionsInput value="Gill Sans">Gill Sans</OptionsInput>
                <OptionsInput value="Georgia">Georgia</OptionsInput>
                <OptionsInput value="Helvetica">Helvetica</OptionsInput>
               </SelectInput>
              </InputContainer>

              <InputContainer>
               <LabelValue htmlFor="text-align">Text Align : </LabelValue>
               <SelectInput id="text-align" onChange={(e) => props.handleTextAlign(e.target.value)}>
                <OptionsInput value="left">Left</OptionsInput>
                <OptionsInput value="center">Center</OptionsInput>
                <OptionsInput value="right">Right</OptionsInput>
               </SelectInput>
              </InputContainer>

              <InputContainer>
               <LabelValue htmlFor="font-color">Font Color : </LabelValue>
               <FontColorInput
                id="font-color"
                type="color"
                onChange={(e) => props.handleFontColor(e.target.value)}
               />
              </InputContainer>
              </SelectablesContainer>
            </InputsDivision>

            <CanvasDivision>
                <CanvasContainer>
                    <HeadingText>Canvas Dimensions</HeadingText>

                    <InputContainer>
                     <LabelValue htmlFor="canvas-width">width : </LabelValue>
                     <SelectInput id="canvas-width" onChange={(e) => props.handleCanvasWidth(e.target.value)}>
                        <OptionsInput value="200">200</OptionsInput>
                        <OptionsInput value="300">300</OptionsInput>
                        <OptionsInput value="400">400</OptionsInput>
                        <OptionsInput value="500">500</OptionsInput>
                        <OptionsInput value="600">600</OptionsInput>
                        <OptionsInput value="700">700</OptionsInput>
                        <OptionsInput value="800">800</OptionsInput>
                        <OptionsInput value="900">900</OptionsInput>
                     </SelectInput>
                    </InputContainer>

                    <InputContainer>
                     <LabelValue htmlFor="canvas-height">height : </LabelValue>
                     <SelectInput id="canvas-height" onChange={(e) => props.handleCanvasHeight(e.target.value)}>
                        <OptionsInput value="200">200</OptionsInput>
                        <OptionsInput value="300">300</OptionsInput>
                        <OptionsInput value="400">400</OptionsInput>
                        <OptionsInput value="500">500</OptionsInput>
                        <OptionsInput value="600">600</OptionsInput>
                        <OptionsInput value="700">700</OptionsInput>
                        <OptionsInput value="800">800</OptionsInput>
                        <OptionsInput value="900">900</OptionsInput>
                     </SelectInput>
                    </InputContainer>

                </CanvasContainer>
            </CanvasDivision>

          </EditingToolsContainer>
        </>
    )
}

export default EditTools