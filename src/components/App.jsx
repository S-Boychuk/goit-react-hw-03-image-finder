import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.css';
import ImageGallery from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    searchQuery: null,
  };

  getSearchQuery = searchQuery => this.setState({ searchQuery });

  render() {
    return (
      <div className={css.app}>
        <Searchbar getSearchQuery={this.getSearchQuery}></Searchbar>
        <ImageGallery searchQuery={this.state.searchQuery}></ImageGallery>
      </div>
    );
  }
}
