import express from 'express';
import cors from 'cors';
import { PostController } from './posts.controller.js';

export const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(express.json({ limit: '20mb' }));

app.get('/', (request, response) => {
    response.send('API LIVE');
}); 

// Routes
app.post("/posts", PostController.create); 
app.get("/posts", PostController.readAll); 
app.get("/posts/:postId", PostController.readOne);
app.put("/posts/:postId", PostController.update); 
app.delete("/posts/:postId", PostController.delete);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ...`);
    }
});