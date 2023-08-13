import { FunctionComponent } from 'react';
import { ArticleItemProps } from '../ArticleItem/types';
import ArticleItem from '../ArticleItem';

const ArticleList: FunctionComponent<{ articles: ArticleItemProps[] }> = ({
    articles,
}) => {
    return (
        <ul className='article-list events'>
            {articles.map((value, index) => {
                return (
                    <li className='events__item' key={index}>
                        <ArticleItem {...value} />
                    </li>
                );
            })}
        </ul>
    );
};

export default ArticleList;
