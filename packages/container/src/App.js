import React from 'react';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
    return (
        <BrowswerRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowswerRouter>
    );
};
