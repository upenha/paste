import ReactCodeMirror from "@uiw/react-codemirror";
import styled from "styled-components";

export const Container = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const TextBox = styled(ReactCodeMirror)`
  all: unset;
  resize: none;
  width: 100vw;
  height: 100vh;
`

export const Button = styled.button`
  all: unset;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  color: #ffffff;
  background-color: #201B2D;
  width: 48px;
  height: 48px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`

export const Icon = styled.img`
  color: #ffffff;
  fill: #ffffff;
  height: 24px;
`