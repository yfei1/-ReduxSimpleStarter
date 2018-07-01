import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_detail';

const API_KEY = 'HIDEONPURPOSE';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selected: null };
    this.onSearch('surfboards');
    this.onSelected = this.onSelected.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSelected(video) {
    this.setState({ selected: video });
  }

  onSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos, selected: videos[0] });
    });
  }

  render() {
    const isLoading = this.state.videos.length === 0;
    const onSearch = _.debounce((term) => { this.onSearch(term); }, 300);

    return isLoading ? 'isLoading' : (
      <div>
        <SearchBar onSearch={onSearch} />
        <VideoDetails video={this.state.selected} />
        <VideoList videos={this.state.videos} onSelected={this.onSelected} />
      </div>);
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));

export default API_KEY;
