import 'antd/dist/antd.css';

import React from 'react';
import BaseImage from "../Image/BaseImage";
import {GridWrapper, PhotoCard} from "./imageGridStyles";
import {Button} from "antd";


export const ImageGrid = ({images, onImageDeleteClick}) => {
    return (
        <>
            <GridWrapper>
                {images.map(image => {
                    return (
                        <PhotoCard key={image.url + image.id}>
                            <BaseImage
                                key={image.url + image.id}
                                fullSrc={image.url}
                                previewScr={image.thumbnailUrl}
                            />
                            <Button
                                key={image.url + image.id + image.id}
                                danger
                                onClick={onImageDeleteClick(image.id)}
                            >
                                Delete
                            </Button>
                        </PhotoCard>
                    )
                })}
            </GridWrapper>
        </>

    );
}
export default ImageGrid
