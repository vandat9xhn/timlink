import * as React from 'react';
//
import { ResultItemObj } from './ResultItem.type';
//
import _styles from './ResultItem.module.scss';

//
export interface ResultItemProps {
    item: ResultItemObj;
}

//
function ResultItem({ item }: ResultItemProps) {
    //
    return (
        <div className={_styles['ResultItem']}>
            <a
                className={_styles['ResultItem_link']}
                href={item.link}
                target="_blank"
            >
                {item.title}
            </a>
        </div>
    );
}

export default ResultItem;
