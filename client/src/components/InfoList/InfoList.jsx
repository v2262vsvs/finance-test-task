import classNames from "classnames";

import "./InfoList.scss";
import { useTickersData } from "../../hooks/useTickersData";
import { getSignPrice } from "../../utils/getSignPrice";
import { CSSTransition } from 'react-transition-group';

export const InfoList = () => {
  const { prevTickers, tickers } = useTickersData();
 

  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>Ticker</th>
            <th>Exchange</th>
            <th>Price</th>
            <th>Change</th>
            <th>Change percent</th>
            <th>Dividend</th>
            <th>Yield</th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker) => {
            const sign = getSignPrice(prevTickers, ticker);

            return (
              <tr key={ticker.ticker}>
                <td>{ticker.ticker}</td>
                <td>{ticker.exchange}</td>
                <td>{ticker.price}$</td>
                <td
                  className={classNames("price", {
                    "price--decrease": sign < 0,
                  })}
                >
                  <div>
                  {sign > 0 && "+ "}
                    {sign < 0 && "- "}
                    {ticker.change} $
                  </div>
                </td>
                <td
                  className={classNames("price", {
                    "price--decrease": sign < 0,
                  })}
                >
                  <CSSTransition in={sign < 0} classNames="option" timeout={2000}>
                    <div className="plate">
                      <svg
                        focusable="false"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill={sign >= 0 ? "#137333" : "#A40C0C"}
                        className={classNames("plate__img ", {
                          "plate__img--down": sign < 0,
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
                  'plate__change',
                  { 'plate__change--down ': sign < 0 },
                )}>{ticker.change_percent} %</span>
                    </div>
                  </CSSTransition>
                </td>
                <td>{ticker.dividend}</td>
                <td>{ticker.yield}</td>
               
              </tr>
            );
          })}
        </tbody>
      </table>
      
      
    </div>
  );
};
