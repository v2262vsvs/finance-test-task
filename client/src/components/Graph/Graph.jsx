
import './Grapg.scss';



export const Graph = ({ tickerName, sign }) => {

  return (
    <>
    <div className={sign >= 0 ? 'green' : 'red'}>
      <div>{tickerName}</div>
      <div>{sign}</div>
    </div>
    
    </>
  );
};
