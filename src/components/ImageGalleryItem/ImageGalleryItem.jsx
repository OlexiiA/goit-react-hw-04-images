import React from 'react';
import PropTypes from 'prop-types';
import { ItemGallery, Img } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({ webformatURL, largeImg, onClick }) => {

    return (
        <ItemGallery>
            <Img src={webformatURL} onClick={() => onClick(largeImg)} alt="" />
        </ItemGallery>
    )

}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImg: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}