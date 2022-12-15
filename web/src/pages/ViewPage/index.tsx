import React, { useState,useEffect } from "react"
import { useParams } from 'react-router-dom'

import { Container } from "./styles"
import TextArea, { CreateCodeResponse } from '../../components/TextArea'
import { api } from '../../services/api'
import { TextBox } from "../../components/TextArea/styles"

const ViewPage = () => {
  const { id } = useParams<{ id: string }>()
  const [code, setCode] = useState('')

  console.log(id)


  useEffect(() => {
    api.get<CreateCodeResponse>(`/code/${id}`)
    .then(response => {
      setCode(response.data.code)
    })
    .catch((e) => {
      console.log(e)

      // navigate('/')
    })
  },)



  return (
    <TextArea isPreview previewCode={code}/>
  )
};

export default ViewPage;