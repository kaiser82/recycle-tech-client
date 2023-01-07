import React from 'react';

const Extra = () => {

    return (
        <div className='text-center py-5'>
            <h3 className='text-4xl font-bold py-3 bg-violet-100 mb-1'>What Statistics Say About Us</h3>
            <div className="stats stats-vertical md:stats-horizontal shadow w-full bg-violet-200 ">

                <div className="stat place-items-center">
                    <div className="stat-title">Products</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc"> Total products sell and buy From start to current</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Happy Customer</div>
                    <div className="stat-value text-primary">10,200</div>
                    <div className="stat-desc text-secondary">↗︎ 90 (8%)</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title"> Registered Members</div>
                    <div className="stat-value">18,200</div>
                    <div className="stat-desc">↘︎ 50 (4%)</div>
                </div>

            </div>
        </div>
    );
};

export default Extra;