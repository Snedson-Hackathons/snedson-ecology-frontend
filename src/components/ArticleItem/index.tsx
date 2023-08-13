import { FunctionComponent } from 'react';
import './styles.scss';
import { ArticleItemProps } from './types';
import Button from '../Button';

const ArticleItem: FunctionComponent<ArticleItemProps> = ({
    title,
    content,
}) => {
    return (
        <div className='article-item event-item'>
            <header className='article-item__header event-item__header'>
                <h1 className='article-item__title event-item__title'>
                    {title}
                </h1>
            </header>
            <p className='article-item__content event-item__description'>
                {content}
            </p>
            <div className='article-item__actions event-item__actions'>
                <Button>Читать далее</Button>
            </div>
        </div>
    );
};

export default ArticleItem;
