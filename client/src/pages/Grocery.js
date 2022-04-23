import React, { useEffect, useRef, useState } from 'react';
import { getList, setItem } from '../services/list';


const Grocery = () => {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [list, setList] = useState([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if(list.length && !alert) {
      return;
    }
    getList()
      .then(items => {
        if(mounted.current) {
          setList(items)
        }
      })
    return () => mounted.current = false;
  }, [alert, list])

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])

  const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        if(mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  };

  return(
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul className="list-group">
        {list.map(item => <li className="list-group-item d-flex justify-content-between align-items-center" key={item.item}>{item.item} <span className="badge bg-primary rounded-pill">{item.id}</span></li>)}
      </ul>
      {alert && <h2> Submit Successful</h2>}
      <hr className="featurette-divider"/>
      <form onSubmit={handleSubmit} className="input-group mb-3">
        <span className="input-group-text">New Item</span>
        <input className="form-control" type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
        <button className="btn btn-outline-secondary" type="submit">Submit</button>
      </form>
    </div>
  )
};

export default Grocery;
