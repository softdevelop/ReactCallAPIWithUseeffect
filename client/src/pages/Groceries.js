import React, { useEffect, useRef, useState } from 'react';
import { getList, setItem, updateItem, deleteItem } from '../services/list';

const Grocery = () => {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [itemUpdate, setItemUpdate] = useState('');
  const [itemFilter, setItemFilter] = useState('');
  const [startUdate, setStartUdate] = useState(0);
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
          setAlert(true);
        }
      })
  };
  
  const handleUpdateItem = (e) => {
    e.preventDefault();
    updateItem(e.target.getAttribute('alt'), itemUpdate)
      .then(() => {
        if(mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  };
  
  const handleChangeItem = (e) => {
  	setItemUpdate(e.target.value);
  	let newList = [...list];
  	newList.some(it => {
  		if(it.id==e.target.alt) {
  		 	it.item = e.target.value;
  			return true;
  		}
  	});
  	setList(newList);
  }
  
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
    //let fd = list.filter(dt => dt.item.includes(itemFilter));
    //setItemFilter('');
  }

  return(
	<div className="wrapper">
		<h1 className="text-center">My Grocery List</h1>
		<div className="pt-0 shadow rounded-3 overflow-hidden d-flex list-group" id="dropdownFilter">
			<div className="d-grid gap-1">
				
				<ul className="list-unstyled mb-0">
				  { 
				  	list
						.filter(dt => dt.item.includes(itemFilter))
				  		.map(item => 
				  			<li className="list-group-item dropdown-item d-flex justify-content-between" key={item.item}>
				  				{ startUdate? 
				  					<form onSubmit={handleUpdateItem} alt={item.id}>
				  						<input type="text" className="form-control" value={item.item} alt={item.id}  onChange={handleChangeItem}/>
				  					</form> :
				  					item.item
				  				}
				  				<button type="button" className="btn btn-warning" onClick={() => setStartUdate(!startUdate)}>Update</button>
				  				<button type="button" className="btn-outline-danger btn-close" onClick={() => delItem(item.id)}></button>
				  			</li>
				  		)
				  }
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
