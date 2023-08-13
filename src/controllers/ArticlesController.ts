import articles from '../mock-data/articles.json';

export default class ArticleController {
    public static getArticles() {
        return Promise.resolve().then(() => articles);
    }
}
