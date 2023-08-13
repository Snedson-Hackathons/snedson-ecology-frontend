import { useEffect, useState } from 'react';
import ArticleList from '../../components/ArticleList';
import './styles.scss';
import { ArticleItemProps } from '../../components/ArticleItem/types';
import ArticleController from '../../controllers/ArticlesController';

const FeedPage = () => {
    const [articles, setArticles] = useState<ArticleItemProps[]>([]);

    useEffect(() => {
        ArticleController.getArticles().then((value) => {
            setArticles(value);
        });
    }, []);
    return (
        <div className='feed-page'>
            <ArticleList articles={articles} />
        </div>
    );
};

export default FeedPage;
