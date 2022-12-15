import React, { useState,useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'

import { Container } from "./styles"
import TextArea, { CreateCodeResponse } from '../../components/TextArea'
import { api } from '../../services/api'
import { TextBox } from "../../components/TextArea/styles"

const ViewPage = () => {
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [code, setCode] = useState('')

  console.log(params)

  if (!params.id) navigate({ pathname: '/' })

  useEffect(() => {
    api.get<CreateCodeResponse>(`/code/${params.id}`)
    .then(response => {
      setCode(response.data.code)
    })
    .catch((e) => {
      console.log(e)

      navigate('/')
    })
  },)



  return (
    <TextArea isPreview previewCode={code}/>
  )
};

export default ViewPage;