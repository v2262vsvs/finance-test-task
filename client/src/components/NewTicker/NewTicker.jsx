import { useState } from 'react';

import './NewTicker.scss';
import { NewTickerForm } from '../NewTickerForm';

export const NewTicker = ({ticker,sign}) => {
  const [hasNewTicker, setHasNewTicker] = useState(false);

  if (hasNewTicker) {
    return <NewTickerForm onCancel={setHasNewTicker} />;
  }

  return (
    <>
    
    <button
      className="tickers__new-ticker"
      type="button"
      onClick={() => setHasNewTicker(true)}
    >
      <div className='icon-new' />
      <div className="tickers__title">
        <div className="tickers__name">
          Add new 
        </div>
        <div className='tickers__price'>Ticker</div>
        
      </div>
    </button>
    </>
  );
};
