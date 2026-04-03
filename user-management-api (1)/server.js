
const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const loggingMiddleware = require('./src/middlewares/loggingMiddleware');

app.use(express.json());
app.use(loggingMiddleware);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
