import React, { useEffect, useRef, useState } from 'react';

const FilterData = (pros) => {
  return(
	<>
		<form className="p-2 mb-2 bg-light border-bottom" onSubmit={pros.handleSubmit}>
		  <input type="search" className="form-control" placeholder="Type to filter..." onChange={event => pros.handleChange(event.target.value)}/>
		</form>
	</>
  )
}

export default FilterData;
