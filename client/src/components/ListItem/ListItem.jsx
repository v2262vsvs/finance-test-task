import classNames from 'classnames';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './ListItem.scss';

import { Loader } from '../Loader';
import { deleteTicker } from '../../redux/tickersSlice';




  const ListItem = ({ ticker, sign }) => {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();
  return (
    <li className="tickers__item">
      {isDelete ? <Loader /> : (
        <>
          
          <CSSTransition in={sign < 0} classNames="option" timeout={2000}>
            <div className="icon">
              <svg
                focusable="false"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill={sign >= 0 ? '#137333' : '#A40C0C'}
                className={classNames(
                  'icon__img ',
                  { 'icon__img--down': sign < 0 },
                )}
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
            </div>
          </CSSTransition>
          <div className="tickers__title">
            <div className="tickers__name">
              {ticker.ticker}
            </div>
            <div className="">
              {ticker.price}
            </div>
          </div>
          


          <div className="tickers__title stayright">
            <CSSTransition in={sign < 0} classNames="option" timeout={2000}>
              <div className={classNames(
                'tickers__price',
                { 'tickers__price--down': sign < 0 },
              )}
              >
                {ticker.change_percent}%
              </div>
            </CSSTransition>
            <CSSTransition in={sign < 0} classNames="option" timeout={2000}>
              <div className={classNames(
                'tickers__price',
                { 'tickers__price--down': sign < 0 },
              )}
              >
                <td>{ticker.change}</td>
              </div>
            </CSSTransition>
          </div>



          <button
            type="button"
            className="tickers__delete-ticker"
            onClick={() => {
              setIsDelete(true);
              dispatch(deleteTicker(ticker.ticker));
            }}
          >
            {}
          </button>
        </>
      )}
    </li>
  );
};

export default ListItem;