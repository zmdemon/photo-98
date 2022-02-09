import 'antd/dist/antd.css';
import {Image} from 'antd';
import React from 'react';

export const BaseImage = ({fullSrc, previewScr}) => {
    return (
        <Image
            src={previewScr}
            preview={{
                src: fullSrc,
            }}
        />
    );
}
export default BaseImage
