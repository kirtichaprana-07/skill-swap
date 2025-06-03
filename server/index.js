// server/index.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectTOMongoDb from './db.js'
import Authrouter from './Routes/AuthRouter.js'
import ProductRouter from './Routes/ProductRouter.js'

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/auth',Authrouter);
app.use('/products',ProductRouter);


connectTOMongoDb(process.env.MONGO_URI )
.then(()=>console.log('Mongodb connected!'))

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
