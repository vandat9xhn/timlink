import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { parse } from 'querystring';
//
import VideoPageSearch from '../search/_main/VideoPageSearch';
//
import _style from './VideoPage.module.scss';

//
type ResultObj = {
    search: string;
};

//
export interface VideoPageProps {}

//
function VideoPage({}: VideoPageProps) {
    //
    const use_router = useRouter();

    //
    const [value, setValue] = React.useState('');
    const [results, setResults] = React.useState<ResultObj[]>([]);

    //
    React.useEffect(() => {
        if (location.search) {
            const search_str = parse(location.search.slice(1))[
                'search'
            ] as string;

            setValue(search_str);
            setResults([{ search: search_str }]);
        }
    }, []);

    // -----

    //
    function handleChange(new_value: string) {
        setValue(new_value);
    }

    //
    function handleSearch() {
        if (value) {
            use_router.push(`/video?search=${value}`);
            setResults([{ search: value }]);

            return;
        }

        if (location.search) {
            use_router.push(`/video`);
            setResults([]);
        }
    }

    //
    return (
        <>
            <main>
                <div className="Video_contain">
                    <div className={`${_style['Video_row']}`}>
                        <h1 className={`${_style['Video_title']}`}>
                            Tim kiem video
                        </h1>

                        <div>
                            <VideoPageSearch
                                value={value}
                                handleChange={handleChange}
                                handleSearch={handleSearch}
                            />
                        </div>

                        {results.length ? (
                            <div>
                                <div>
                                    <Link href={'/video/1'}>
                                        Link to video 1
                                    </Link>
                                </div>

                                <div>
                                    <Link href={'/video/2'}>
                                        Link to video 2
                                    </Link>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </main>
        </>
    );
}

export default VideoPage;
