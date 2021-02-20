const express = require('express');

const actionsRouter = require('./api/actions/actions-router');
const projectRouter = require('./api/projects/projects-router');

const server = express();

server.use(express.json());

server.use(actionsRouter);
server.use(projectRouter);

server.use((err, req, res, next) => {
    console.log(err)
    return res.status(500).json({
        errorMessage: "Something went wrong, please try again later"
    })
})

server.listen(8000, () => console.log('API running on port 8000'));

