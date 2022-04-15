import { useRouter } from 'next/router';
import * as React from 'react';
//
import VideoPageSearch from '../search/_main/VideoPageSearch';
//
import _style from './VideoPage.module.scss';

//
export interface VideoPageProps {}

//
function VideoPage({}: VideoPageProps) {
    //
    const use_router = useRouter();

    //
    const [value, setValue] = React.useState('');

    // -----

    //
    function handleChange(new_value: string) {
        setValue(new_value);
    }

    //
    function handleSearch() {
        use_router.push(`/video/${value}`);
    }
    //
    return (
        <div>
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
                    </div>
                </div>
            </main>
        </div>
    );
}

export default VideoPage;
