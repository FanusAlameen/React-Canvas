import styled from "styled-components"
import '@fontsource/poppins'

// color: green(#008179)
// color: grey(#9EC8B9)

export const EditingToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 20px;
`
export const InputsDivision = styled.div`
  width: 70%;
  height: 100%;
  padding: 20px;
  background-color: #9EC8B9;
  display: flex;
  justify-content: center;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.12);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.12);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.12);
`
export const CanvasDivision = styled(InputsDivision)`
  width: 25%;
  margin: 15px;
  align-items: center;
  justify-content: center;
`

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HeadingText = styled.p`
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: bold;
  color: #008179;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 10px;
`

export const ToolButton = styled.button`
  background-color: #008179;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  display: flex;
  flex-diection: column;
  align-items: center;
  justify-conten: center;
  margin: 10px;
`
export const AddTextButton = styled(ToolButton)`
  height: 120px;
`
export const DeleteCanvasButton = styled(AddTextButton)``

export const SelectablesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`

export const LabelValue = styled.label`
  font-size: 16px;
  font-family: 'Poppins';
  font-weight: bold;
  color: #008179;
  margin-right: 5px;
`

export const SelectInput = styled.select`
  width: 100px;
  background-color: #008179;
  color: #ffffff;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
  margin-right: 5px;
  outline: none;
  border: none;
`
export const OptionsInput = styled.option`
  width: 100px;
  background-color: #008179;
  color: #ffffff;
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 14px;
  outline: none;
  border: none;
`

export const FontColorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 35px;
  height: 35px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &&::-webkit-color-swatch {
    border-radius: 16px;
    border: none;
  }
`