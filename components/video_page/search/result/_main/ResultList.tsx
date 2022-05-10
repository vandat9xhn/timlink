import * as React from 'react';
import ResultItem from '../item/ResultItem';
//
import { ResultItemObj } from '../item/ResultItem.type';
//
import _style from './ResultList.module.scss';

//
export interface ResultListProps {
    result_arr: { type: ResultItemObj['type']; list: ResultItemObj[] }[];
}

//
function ResultList({ result_arr }: ResultListProps) {
    //
    return (
        <div className="">
            <ul className="list-none">
                {result_arr.map((result_obj) => (
                    <li
                        key={result_obj.type}
                        className={_style['ResultList_list']}
                    >
                        <h4 className={_style['ResultList_list_title']}>
                            {result_obj.type}
                        </h4>

                        <ul className={_style['ResultList_items']}>
                            {result_obj.list.map((item) => (
                                <li key={item.id}>
                                    <ResultItem item={item} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ResultList;
