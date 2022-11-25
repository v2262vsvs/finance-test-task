import React from 'react'
import './NewTickerRecomandation.scss';
import {NewTickerForm} from '../NewTickerForm'
const recommendTikers=[
  {
    ticker:'VAG',
    id:0,
    price:'500 $',
    change:'1.36 %',
    sign:1,
  },
  {
    ticker:'Lidl',
    id:1,
    price:'177 $',
    change:'2.1 %',
    sign:-1,
  },
  {
    ticker:'Oracle',
    id:2,
    price:'150 $',
    change:'0.36 %',
    sign:1,
  },
  {
    ticker:'Meta',
    id:3,
    price:'210 $',
    change:'1.7 %',
    sign:-1,
  },
  {
    ticker:'EPAM',
    id:4,
    price:'180 $',
    change:'5.07 %',
    sign:1,
  },
  
  
  {
    ticker:'PayPal',
    id:7,
    price:'150 $',
    change:'2.07 %',
    sign:1,
  },
]
  

export function NewTickerRecomendation() {
  return (
    <div>
        <ul className="recomends">
           {recommendTikers?.map(ticker => {
             return <NewTickerForm key={ticker.ticker} ticker={ticker}  />;
             
           })}
        </ul>
    </div>
  )
}

