const express = require('express');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');

require('dotenv').config();
require('./db/mongoose');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/articles', articleRouter);

app.get('/', async (req, res) => {
    const articles = await Article.find({}).sort({ createdAt: 'desc'});
    res.render('articles/index', { articles: articles });
})

try {
    app.listen(PORT, () => {
        console.log(`Server run on port ${PORT}`);
    });
} catch (error) {
    console.error(error);
}