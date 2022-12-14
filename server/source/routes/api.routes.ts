import { Request, Response, Router } from 'express';
import { prisma } from '../database/prisma';
import { generate } from '../utils/idGen';
const apiRouter = Router()

interface CreateCodeRequest {
  code: string
}


apiRouter.post('/code', async (req: Request<any, any, CreateCodeRequest>, res: Response) => {
  const { code } = req.body
  if(code.length > 40000 || code.length < 10) return res.status(406).json({ error: 'Code lenght must be between 10 and 40000'})
  const ip: any = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  let newCode = await prisma.document.create({
    data: {
      id: generate(8),
      ip,
      code,
    }
  })

  return res.json(newCode)
})

apiRouter.get('/code/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  
  const code = await prisma.document.findFirst({
    where: {
      id
    }
  })
  if (!code) return res.status(404).json({ error: 'Code not found'})
  return res.json(code)
})




export { apiRouter }