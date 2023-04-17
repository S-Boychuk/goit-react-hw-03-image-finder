import { Component } from 'react';
import css from './ImageGallery.module.css';
import getImages from 'api/PixabayApiService';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    showBtn: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.searchQuery !== this.props.searchQuery &&
      this.props.searchQuery.trim()
    ) {
      this.resetState();
      this.createGallery();
    }

    if (
      prevProps.searchQuery === this.props.searchQuery &&
      prevState.page !== this.state.page
    ) {
      this.createGallery();
    }
  }

  createGallery = async () => {
    this.toggleBtn();
    try {
      const newImages = await getImages(
        this.props.searchQuery,
        this.state.page
      );
      this.setState(({ images }) => ({ images: [...images, ...newImages] }));
    } catch (error) {
      console.log(error);
    }
    this.toggleBtn();
  };

  updatePage = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  resetState = () => this.setState({ images: [], page: 1 });

  toggleBtn = () => {
    this.setState(({ showBtn }) => ({ showBtn: !showBtn }));
  };

  render() {
    return (
      this.state.images.length !== 0 && (
        <>
          <ul className={css.gallery}>
            {this.state.images.map(({ id, tags, webformatURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  tags={tags}
                  imageUrl={webformatURL}
                />
              );
            })}
          </ul>
          {this.state.showBtn && <Button onClick={this.updatePage} />}
          {this.state.showBtn !== true && <Loader />}
        </>
      )
    );
  }
}

export default ImageGallery;
