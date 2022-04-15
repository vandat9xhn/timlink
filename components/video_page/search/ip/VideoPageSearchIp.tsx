import * as React from 'react';
//
import _styles from './VideoPageSearchIp.module.scss';

//
export interface VideoPageSearchIpProps {
    value: string;
    handleChange: (value: string) => void;
    handleSearch: () => void;
}

//
function VideoPageSearchIp({
    value,
    handleChange,
    handleSearch,
}: VideoPageSearchIpProps) {
    //
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        handleChange(e.target.value);
    }

    //
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter' && value) {
            handleSearch();
        }
    }

    //
    return (
        <div className="VideoPageSearchIp">
            <input
                className={`${_styles['VideoPageSearchIp_ip']}`}
                type="text"
                value={value}
                placeholder="Search video..."
                //
                onChange={onChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default VideoPageSearchIp;
