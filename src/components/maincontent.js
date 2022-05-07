import React from 'react';
import { Link } from 'react-router-dom';

function MainCon() {
  const divStyle = {
    width: '158px',
  };
  return (
    <div id='Page' className='PageCon'>
      <div className='PageItem'>

        <div className='MainText'>
          Linted.Group - локальная IT-компания, разрабытывающая программы и сайты различной направленности, также включающая в себя подразделение Grob.Ind по разработке игр.
        </div>

        <div className='linksItem'>
          <Link to="wiki"><button className="button-30" role="button"><img src='/linted.png' className='but-img'/></button></Link>
          <Link to='wiki'><button className="button-30" role="button"><img src='/velicior.png' className='but-img'/></button></Link>
          <Link to='wiki'><button className="button-30" role="button"><img src='/qagram.png' className='but-img' style={divStyle}  /></button></Link>
          <Link to='wiki'><button className="button-30" role="button"><img src='/grobind.png' className='but-img'/></button></Link>
        </div>
      </div>
    </div>
  );
}

export default MainCon;
