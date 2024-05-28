require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const updatePromptRouter = require('./routes/updatePrompt');
const generateImageRouter = require('./routes/generateImage');

app.use('/', indexRouter);
app.use('/update-prompt', updatePromptRouter);
app.use('/generate-image', generateImageRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
///