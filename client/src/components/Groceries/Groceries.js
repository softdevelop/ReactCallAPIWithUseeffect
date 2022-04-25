import React, { useEffect, useRef, useState } from 'react';
import { getList, setItem, deleteItem } from '../services/list';


const Grocery = () => {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  //const [idInput, delIDInput] = useState('');
  const [itemFilter, setItemFilter] = useState('');
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
  
  const delItem = (idInput) => {
    deleteItem(idInput)
      .then(() => {
        if(mounted.current) {
          //delIDInput('');
          setAlert(true);
        }
      })
  };
  
  const filterData = (e) => {
    e.preventDefault();
    let fd = list.filter(dt => dt.item.includes(itemFilter));
    setItemFilter('');
  }

  return(
	<div className="wrapper">
		<h1 className="text-center">My Grocery List</h1>
		<div className="pt-0 shadow rounded-3 overflow-hidden d-flex list-group" id="dropdownFilter">
			<div className="d-grid gap-1">
				<form className="p-2 mb-2 bg-light border-bottom" onSubmit={filterData}>
				  <input type="search" className="form-control" autoComplete="false" placeholder="Type to filter..." onChange={event => setItemFilter(event.target.value)}/>
				</form>
				<ul className="list-unstyled mb-0">
				  {list.map(item => <li className="list-group-item dropdown-item d-flex align-items-center gap-2 py-2 justify-content-between align-items-start" key={item.item}>{item.item} <button type="button" className="btn-outline-danger rounded-pill btn-close" aria-label="Close" alt={item.id} onClick={() => delItem(item.id)}></button></li>)}
				</ul>
				{alert && <h2> Submit Successful</h2>}
				<hr className="featurette-divider"/>
				<form onSubmit={handleSubmit} className="input-group mb-3 p-2 mb-2 bg-light border-bottom">
					<span className="input-group-text">New Item</span>
					<input className="form-control" type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
					<button className="btn btn-outline-secondary" type="submit">Submit</button>
				</form>
			</div>
		</div>
    </div>
  )
};

export default Grocery;
