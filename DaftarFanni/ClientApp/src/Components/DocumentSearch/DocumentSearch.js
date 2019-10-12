import React, { Component } from 'react';
import Wrapper from '../../Shared/Wrapper';
import SearchResult from './SearchResult';
import http from 'axios';
import Search from './Search';

export default class SearchDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Results: []
        }
    }

    searchDocuments = (e) => {
        http.get('/api/SearchDocuments', { params: { searchTerm: e.target.value } }).then(response => {
            this.setState({ Results: response.data });
        })
    }

    render() {
        return (
            <Wrapper>
                <div className="text-center mt-3">
                    <Search onChange={this.searchDocuments} />
                    <hr style={{ width: '90%' }} />
                    <div className="search-result text-center">
                        <SearchResult results={this.state.Results} />
                    </div>
                </div>
            </Wrapper>
        )
    }
}