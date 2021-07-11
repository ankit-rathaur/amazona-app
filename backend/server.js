import express from 'express'
import data from './data.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }else{
        res.send(404).send({ message: 'product not found' })
    }}
)
app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.get('/', (req, res) => {
    console.log("bc");
    res.send('Server is ready');
    // res.end();

});
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});