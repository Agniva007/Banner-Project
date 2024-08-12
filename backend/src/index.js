const dotenv = require("dotenv");
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/v1");
const httpStatus = require("http-status");
const ApiError = require('./middlewares/ApiError');
const { responseHandler, errorHandler } = require('./middlewares/response');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseHandler);

app.use('/api/v1', apiRoutes);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, `${req.url} Not found`));
});

app.use(errorHandler);

app.listen(process.env.APP_PORT, async() => {
    console.log("Server is running on port "+process.env.APP_PORT);
})