import React, { useEffect, useRef, useState } from 'react';

const Item = (pros) => {
  return(
  	<>	  
		<li className="list-group-item dropdown-item d-flex justify-content-between" key={pros.item.item}>
			{ pros.startUdate? 
				<form onSubmit={pros.handleUpdateItem} alt={pros.item.id}>
					<input type="text" className="form-control" defaultValue={pros.item.item} alt={pros.item.id} onChange={(e)=>pros.handleChangeItem(e)} 
  autoFocus="autoFocus"/>
				</form> :
				pros.item.item
			}
			<button type="button" className="btn btn-warning" onClick={() => pros.handleStartUdate(pros.startUdate)}>Update</button>
			<button type="button" className="btn-outline-danger btn-close" onClick={() => pros.delItem(pros.item.id)}></button>
		</li>
  	</>
  )
};

export default Item;
