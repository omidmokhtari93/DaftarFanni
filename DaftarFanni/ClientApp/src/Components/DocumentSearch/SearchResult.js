import React from 'react';
import Wrapper from '../../Shared/Wrapper';


const SearchResult = (props) => {
    return (
        <Wrapper>
            <div className="card">
                <div className="card-body p-1" >
                    <embed type="application/pdf" src={require('../../Assets/images/loading.png')} width="100%" />
                    <p className="m-1 text-right">پرس ساما</p>
                    <p className="m-1 text-right">1395/05/12</p>
                </div>
                <div className="dropdown" >
                    <button type="button" className="btn btn-block p-1 btn-primary dropdown-toggle rounded-top-0" data-toggle="dropdown" >
                        دانلود
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" > فایل 1</a>
                        <a className="dropdown-item" > فایل 2</a>
                        <a className="dropdown-item" > فایل 3</a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SearchResult;