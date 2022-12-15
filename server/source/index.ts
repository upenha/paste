import express, { Request, Response } from 'express';
import { apiRouter } from './routes/api.routes';
const app = express();
import cors from 'cors'

app.use(express.json())
app.use(cors({
  origin: '*'
}))
app.use('/api', apiRouter)

app.get('/health', (req: Request, res: Response) => {
  return res.json({
    ok: true
  })
})



export default app 