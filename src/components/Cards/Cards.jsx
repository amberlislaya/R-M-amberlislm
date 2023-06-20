import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

const Cards = ({ results, page }) => {
let display;
console.log(results);

if(results) {
 display = results.map((x) => {
let {id, name, image, location, status } = x;

return (  
<Link 
style={{ textDecoration: "none" }}
to= {`${page}${id}`} 
key = {id} 
className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-info">

<div className={`${styles.cards} d-flex flex-column justify-content-center`}> 
<img src={image} alt="" 
className ={`${styles.img} img-fluid`} />

<div style = {{ padding: "10px" }} className='content'>
<div className="fs-3 fw-bold mb-4 ">{name}</div>

<div className=''>
<div className='fs-5'>Last location</div>
<div className='fs-6'>{location.name}</div>
</div>
</div>
</div>

{(() => {
if(status === "Dead"){
  return (
<div className={`${styles.badge} position-absolute badge bg-dark`}>
  {status}
</div>  
);

} else if (status === "Alive" ) {
  return (
<div className={`${styles.badge} position-absolute badge bg-info`}>
  {status}
</div>  
);

} else {
  return (
<div className={`${styles.badge} position-absolute badge bg-warning`}>
  {status}
</div>  
);
}
})()}

</Link>

);
});

 } else {
  display = "No Characters:/";
}

  return <>{display}</>; 
 
};


export default Cards;
