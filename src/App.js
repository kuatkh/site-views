import './App.css';
import { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';

function App() {
  const [cnt, setCnt] = useState([]);

  const url = 'https://eurasia-policy.com/turizm-ru/56-khalyal-turizm.html';

  // const newUuid = uuid();

  useEffect(() => {
    // const currentHref = window.location.href;

    // let timeout = setTimeout(() => {
    //   window.open(currentHref,'_blank');
    //   window.close();
    // }, 1000 * 15);

    // return () => {
    //   clearTimeout(timeout);
    // }

    let newCnt = [];
    let i = 0
    for (i; i < 40; i++) {
      newCnt = [...newCnt, i];
    }
    setCnt(newCnt)

    let interval = setInterval(() => {
      let newCnt2 = [];
      const end = i + 40;
      for (i; i < end; i++) {
        newCnt2 = [...newCnt2, i];
      }
      setCnt(newCnt2);
      console.clear();
    }, 1000 * 60);

    return () => {
      clearInterval(interval);
    }
  }, [])

  //url + '?uuid=' + uuid()}

  return (
    <div className="App" style={{display: 'flex', flexWrap: 'wrap'}}>
      {cnt.length > 0 ? cnt.map((c, ix) => <>
        <div key={`ifrm-${ix}-${c}`} style={{width: '250px', height: '100px', margin: '10px'}}>
        <iframe
          // sandbox="allow-scripts"
          style={{width: '250px', height: '100px', margin: '10px'}}
          // name={(((new Date()).getTime() * 10000) + 621355968000000000) + '-' + ix + '-' + c}
          src={url}>
        </iframe>
      </div>
      {ix > 0 && (ix + 1) % 9 === 0 && <div style={{flexBasis: '100%', height: 0}}></div> }
      </>)
      : null}
      {/* <div style={{width: '500px', height: '300px', margin: '10px'}}>
        <iframe
          sandbox="allow-scripts"
          style={{width: '500px', height: '300px', margin: '10px'}}
          src={url + '?uuid=' + newUuid}>
        </iframe>
      </div>
      <div style={{width: '500px', height: '300px', margin: '10px'}}>
        <iframe
          sandbox="allow-scripts"
          style={{width: '500px', height: '300px', margin: '10px'}}
          src={url + '?uuid=' + newUuid}>
        </iframe>
      </div> */}
    </div>
  );
}

export default App;
