import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { addTicker } from '../../redux/tickersSlice';
import "./NewTickerForm.scss"
import { CSSTransition } from 'react-transition-group';

export const NewTickerForm = ({ticker}) => {
  const [tickerError, setTickerError] = useState(false);
  const dispatch = useDispatch();
  const tickerNames = useSelector((state) => state.tickerNames);


  

  return (
    <>
    {!tickerNames.includes(ticker.ticker) && (
    <div className='recomends__item'>
      
        
      
    <li className="">
      <form className="">
        <label className="recomends__item--name">
          <div className="">
            {ticker.ticker}
          </div>
        </label>
        <label className="recomends__item--price">
          <div className="">
            {ticker.price}
          </div>
        </label>
        <label className="">
        <td
                  className={classNames("changetip", {
                    "changetip--decrease": ticker.sign < 0,
                  })}
                >
                  <CSSTransition in={ticker.sign < 0} classNames="option" timeout={2000}>
                    <div className="platetip">
                      <svg
                        focusable="false"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={ticker.sign >= 0 ? "#137333" : "#A40C0C"}
                        className={classNames("platetip__img ", {
                          "platetip__img--down": ticker.sign < 0,
                        })}
                      >
                        <path
                          d="M4 12
              l1.41 1.41
              L11 7.83
              V20h2V7.83
              l5.58 5.59
              L20 12
              l-8-8-8 8z"
                        />
                      </svg>
                      <span className={classNames(
                  'platetip__change',
                  { 'platetip__change--down ': ticker.sign < 0 },
                )}>{ticker.change} </span>
                    </div>
                  </CSSTransition>
                </td>
        </label>
      </form>
    </li>

    <li className=''>
    <label className=''>
        <div>
        <svg onClick={() => {
            switch (true) {
              case !ticker.ticker:
                setTickerError(true);
                break;
              case tickerNames.includes(ticker.ticker):
                setTickerError(true);
                break;
              case !tickerError:
                
                dispatch(addTicker(ticker.ticker));
                break;
              default:
                break;
            }
          }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bttn" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
      </div>
        </label>
    </li>

    </div>
    )}
    </>
  );
};
