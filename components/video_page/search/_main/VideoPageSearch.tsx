import * as React from 'react';
//
import VideoPageSearchIp, {
    VideoPageSearchIpProps,
} from '../ip/VideoPageSearchIp';

//
export interface VideoPageSearchProps extends VideoPageSearchIpProps {}

//
function VideoPageSearch({
    value,
    handleChange,
    handleSearch,
}: VideoPageSearchProps) {
    //
    return (
        <div>
            <VideoPageSearchIp
                value={value}
                handleChange={handleChange}
                handleSearch={handleSearch}
            />
        </div>
    );
}

export default VideoPageSearch;
