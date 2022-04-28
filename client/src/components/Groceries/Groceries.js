import React, { useEffect, useRef, useState } from 'react';
import Item from './Item';

const Groceries = (pros) => {
  return(
  	<>
		<ul className="list-unstyled mb-0">
		  {pros.list
				.filter(dt => dt.item.includes(pros.itemFilter))
		  		.map(item => <Item key={item.id} item={item} delItem={pros.delItem} handleUpdateItem={pros.handleUpdateItem} handleStartUdate={pros.handleStartUdate} startUdate={pros.startUdate} handleChangeItem={pros.handleChangeItem}/>)
		  	}
		</ul>
  	</>
  )
};

export default Groceries;
