import React, {useRef} from 'react';

type BaseProps = {
  parentCounter: number;
}

export default function Base({parentCounter}: BaseProps): JSX.Element{
  const counter = useRef(parentCounter)
  counter.current ++

  return (
  <div className='box'>
    {counter.current < 20 ? <Base parentCounter={counter.current} /> : <></>}
    {counter.current === 20 ? <div className='centerBox '>🥳</div>: <></>}
  </div>)

}