import React from 'react';


const FilterBTN = ({ name, index, items, task, setPageNumber }) => {

  return (
<div>
<style jsx>
{`

.x:checked + label{ 
  background-color: #DCE510;
  color : white;
}
input[type="radio"]{
  display: none;
}
`}
</style>
<div className="form-check">
<input className="form-check-input x"
onClick={()=> {
 setPageNumber(1);
 task(items);
}} 
type="radio" 
name={name} 
id={`${name}-${index}`}
/>
<label className="btn btn-outline-info" for={`${name}-${index}`}>{items}</label>
</div>
</div>

  );
};

export default FilterBTN;