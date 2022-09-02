import express from 'express'
import { AppDataSource } from './data-source';
import { erroMiddleware } from './middlewares/error';

import { router } from './router';

AppDataSource.initialize().then(() => {

    const app = express();


    app.use(express.json())


    app.use(router)

    app.use(erroMiddleware)

    app.listen(process.env.PORT, () => 'server running on port 3333')
})
