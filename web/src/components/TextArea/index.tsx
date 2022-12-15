import React, { useState, FormEvent } from "react"

import { tags as t } from '@lezer/highlight';
import { Button, Container, Icon, TextBox } from "./styles"
import { dracula, draculaInit } from '@uiw/codemirror-theme-dracula'
import { javascript } from '@codemirror/lang-javascript'
import { api } from "../../services/api";
import { Redirect, useHistory } from "react-router-dom";

export interface CreateCodeResponse {
  code: string
  id: string
  createdAt: Date
  ip: string
}

interface Props {
  isPreview?: boolean
  previewCode?: string
  
}

const TextArea = ({ isPreview = false, previewCode }: Props) => {
  const [code, setCode] = useState('')

  async function sendCodeToApi (event: FormEvent) {
    event.preventDefault()

    const { data } = await api.post<CreateCodeResponse>('/code', {
      code
    })
    
    const history = useHistory()
    return <Redirect to={`/code/${data.id}`} />;

  }

  return (
    <Container onSubmit={sendCodeToApi}>
      {(!isPreview && code.length > 10)  && (
        
        <Button type="submit">
          <Icon src='share.svg'/>
        </Button>
      )}
      <TextBox 
        theme={draculaInit({
          theme: 'dark',
          // @ts-ignore
          settings: {
            caret: '#c6c6c6',
            fontFamily: 'monospace',
          },
          styles: [
            { tag: t.comment, color: '#6272a4' },
          ]
        })}
        extensions={[javascript({ typescript: true })]}
        value={!!isPreview ? previewCode : ''}
        height="100vh"
        width="100vw"
        onChange={(value) => setCode(value)}
        editable={!isPreview}
      />
    </Container>
  )
};

export default TextArea;



