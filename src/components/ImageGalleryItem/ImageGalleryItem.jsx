import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, tags }) => {
  return (
    <li className={css['gallery-item']}>
      <img className={css['gallery-item-image']} src={imageUrl} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
