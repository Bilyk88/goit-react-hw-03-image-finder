import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImages } from 'api';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
    selectedImage: null,
    isLoading: false,
    error: false,
    isModalOpen: false,
  };

  componentDidMount() {}

  async componentDidUpdate(prevProps, prevState) {
    const { page, value } = this.state;
    if (prevState.value !== value || prevState.page !== page) {
      try {
        this.setState({ isLoading: true, error: false });
        const searchResult = await fetchImages({ page, value });
        this.setState(prevState => ({
          images: [...prevState.images, ...searchResult],
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = newValue => {
    this.setState({ value: newValue, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = image => {
    console.log(image);
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
      selectedImage: image,
    }));
  };

  render() {
    const { images, selectedImage, isLoading, isModalOpen, error } = this.state;

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '16px',
          paddingBottom: '24px',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error && <p>error</p>}
        {/* {!images.length && <p>error</p>} */}
        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.openModal} />
        )}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal>
            <img src={selectedImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
