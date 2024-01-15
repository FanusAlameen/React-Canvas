import styled from 'styled-components'
import '@fontsource/poppins/500.css'

// color: green(#008179)
// color: grey(#9EC8B9)

export const EditorContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
`
export const CanvasContainer = styled.div`
  width: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #9EC8B9;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
`

export const MainHeading = styled.h1`
  color: #008179;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 3em;
  align-self: center;
`