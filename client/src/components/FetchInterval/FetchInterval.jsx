import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { intervalUpdated } from '../../redux/tickersSlice';

import './FetchInterval.scss';

export const FetchInterval = () => {
  const interval = useSelector((state) => state.interval);
  const dispatch = useDispatch();
  const [value, setValue] = useState(interval);
  const change = async(val) => {
    setValue(val)

    if (!value) {
      setValue(interval);
    } else {
      fetch('http://localhost:4000/interval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ interval: value * 1000 }),
      }).then(() => {
        dispatch(intervalUpdated(value));
      });
    }



  }
  return (
    <div className="interval-toggle interval-toggle--fetch ">
      <form className="interval-toggle__form">
        <label className="interval-toggle__label">
         <div> <div>Update at</div> <div>seconds</div></div>
         <input
            value={value}
            type="number"
            min="1"
            max="3600"
            className="interval-toggle__field"
            onChange={(event) => change(+event.target.value)}
          />
          
        </label>
        
        
      </form>
    </div>
  );
};
