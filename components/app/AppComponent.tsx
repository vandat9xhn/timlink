import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { parse, stringify } from 'querystring';
//
import { ResultItemObj } from '../video_page/search/result/item/ResultItem.type';
//
import VideoPageSearchIp from '../video_page/search/ip/VideoPageSearchIp';
import ResultList, {
    ResultListProps,
} from '../video_page/search/result/_main/ResultList';
//
import _styles from './AppComponent.module.scss';

//
const getSearchObj = () => {
    if (typeof window === 'undefined') {
        return {};
    }

    return parse(location.search.slice(1));
};

const getDefaultValue = () => {
    const value = getSearchObj()['q'];
    if (!value) {
        return '';
    }

    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
};

//
export interface AppComponentProps {}

//
function AppComponent({}: AppComponentProps) {
    //
    const router = useRouter();

    //
    const [value, setValue] = React.useState('');
    const [result_arr, setResultArr] = React.useState<
        ResultListProps['result_arr']
    >([]);

    const has_event = React.useRef(false);

    //
    React.useEffect(() => {
        const _value = getDefaultValue();

        if (_value) {
            setValue(_value);
            _handleSearch(_value);
        }
    }, []);

    React.useEffect(() => {
        if (!has_event.current) {
            has_event.current = true;

            router.events.on('routeChangeComplete', (...params) => {
                const _value = getDefaultValue();
                _handleSearch(_value);
            });
        }

        return () => {};
    }, []);

    // ------

    //
    function handleChange(new_value: string) {
        setValue(new_value);
    }

    //
    function handleSearch() {
        if (!value.trim()) {
            router.push(location.pathname);

            return;
        }

        const _type = getSearchObj()['type'];
        router.push(
            location.pathname +
                '?' +
                stringify({
                    q: value.trim(),
                    ...(_type ? { type: _type } : {}),
                })
        );
    }

    //
    function _handleSearch(_value = '') {
        if (!_value.trim()) {
            setResultArr([]);

            return;
        }

        const data = [
            {
                id: 1,
                title: 'Bao Thanh Thien tap 10 nam 1995',
                type: 'film',
                link: '#',
            },
            {
                id: 2,
                title: 'King Kong 2019',
                type: 'film',
                link: '#',
            },
        ] as ResultItemObj[];

        const data_music = [
            {
                id: 1,
                title: 'Em cua ngay hom qua',
                type: 'film',
                link: '#',
            },
            {
                id: 2,
                title: 'Con mua ngang qua',
                type: 'film',
                link: '#',
            },
        ] as ResultItemObj[];

        if (getSearchObj()['type'] === 'film') {
            setResultArr([
                {
                    type: 'film',
                    list: data,
                },
            ]);
            return;
        }

        if (getSearchObj()['type'] === 'music') {
            setResultArr([
                {
                    type: 'music',
                    list: data,
                },
            ]);
            return;
        }

        setResultArr([
            {
                type: 'film',
                list: data,
            },
            {
                type: 'music',
                list: data_music,
            },
        ]);
    }
    //
    return (
        <div className="display-flex justify-center">
            <div>
                <div>
                    <Link href={`/home?q=${value}&type=film`}>Film</Link>

                    <Link href={`/home?q=${value}&type=music`}>Music</Link>

                    <Link href={`/home?q=${value}`}>X</Link>
                </div>

                <div className={_styles['AppComponent_ip']}>
                    <VideoPageSearchIp
                        value={value}
                        handleChange={handleChange}
                        handleSearch={handleSearch}
                    />
                </div>

                <h2 className={_styles['AppComponent_title']}>
                    Ket qua tim kiem:
                </h2>

                <div className={_styles['AppComponent_results']}>
                    <ResultList result_arr={result_arr} />
                </div>
            </div>
        </div>
    );
}

export default AppComponent;
