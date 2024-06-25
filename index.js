const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// const bodyParser = require('body-parser');

const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const updatePromptRouter = require('./routes/updatePrompt');
const generateImageRouter = require('./routes/generateImage');
const UserRouter = require('./routes/user');
const SiteRouter = require('./routes/site');
const LikeRouter = require('./routes/like');

app.use(express.json()); // POST 요청에서 JSON 형식의 데이터를 처리할 수 있게 함

app.use('/user',UserRouter);
app.use('/like',LikeRouter);
app.use('site',SiteRouter);
app.use('/', indexRouter);
app.use('/update-prompt', updatePromptRouter);
app.use('/generate-image', generateImageRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
//////
////