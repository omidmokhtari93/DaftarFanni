import React from 'react';
import Wrapper from '../../Shared/Wrapper';

const TopMenu = () => {
    return (
        <Wrapper>
            <div className="bg-primary text-center p-3 yekan">
                <label className="text-white mb-0 h4" style={{ fontWeight: 800, marginLeft: '160px' }}>دفتر فنی</label>
                <a className="btn btn-warning p-1 m-0 yekan float-right ml-3 top-menu-buttons">
                    ثبت سند جدید <span className="fa fa-plus green-text align-middle"></span>
                </a>
                <a className="btn btn-warning p-1 m-0 yekan float-right">
                    جستجوی سند
            </a>
            </div>
        </Wrapper>
    )
}
export default TopMenu;