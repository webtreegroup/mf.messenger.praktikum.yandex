import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.static('./static'));
app.listen(PORT, () => {
    console.log(`Start in ${PORT}!`);
});
//# sourceMappingURL=server.js.map