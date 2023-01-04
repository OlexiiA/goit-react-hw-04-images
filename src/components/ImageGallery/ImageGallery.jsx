import React from "react";
import { PropTypes } from "prop-types";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import { List } from './ImageGallery.styled'

export const ImageGallery = ({ images, ...otherProps }) => {
    return (
        <List>
            {images.map(({ id, webformatURL, largeImageURL }) =>
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImg={largeImageURL} {...otherProps} />)}
        </List>
    )
};


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    })),
    onClick: PropTypes.func.isRequired,
}