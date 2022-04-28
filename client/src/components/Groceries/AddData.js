import React, { useEffect, useRef, useState } from 'react';

const AddData = (pros) => {
  return(
	<>
		<form onSubmit={pros.handleSubmit} className="input-group mb-3 p-2 mb-2 bg-light border-bottom">
			<span className="input-group-text">New Item</span>
			<input className="form-control" type="text" onChange={event => pros.handleChange(event.target.value)} value={pros.itemInput} />
			<button className="btn btn-outline-secondary" type="submit">Submit</button>
		</form>
	</>
  )
}

export default AddData;
