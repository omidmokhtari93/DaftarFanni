import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import searchLoading from '../../Assets/images/loading.png'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            divElement: null,
            inputElement: null
        }
    }

    componentDidMount() {
        this.setState({
            divElement: ReactDOM.findDOMNode(this.refs.searchDiv),
            inputElement: ReactDOM.findDOMNode(this.refs.searchInput)
        })
    }

    SetAndRemoveShadow = (event) => {
        if (event.type === 'mouseenter') {
            this.state.divElement.classList.add("search-shadow")
        }
        if (event.type === 'mouseleave') {
            if (document.activeElement === this.state.inputElement) {
                this.state.divElement.classList.add("search-shadow")
            } else {
                this.state.divElement.classList.remove("search-shadow")
            }
        }
        if (event.type === 'blur') {
            this.state.divElement.classList.remove("search-shadow")
        }
    }

    render() {
        return (
            <div className="search" ref="searchDiv"
                onMouseEnter={(e) => this.SetAndRemoveShadow(e)}
                onMouseLeave={(e) => this.SetAndRemoveShadow(e)}>
                <input className="yekan rtl" placeholder="جستجو ..." ref="searchInput" onChange={(e) => this.props.onChange(e)}
                    onBlur={(e) => this.SetAndRemoveShadow(e)} />
                <img src={searchLoading} id="loading" alt="loading"/>
            </div>
        )
    }
}