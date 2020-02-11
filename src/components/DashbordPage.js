import React from 'react'
import ExpenseList from "./ExpenseList";
import FilterComponents from "./FilterComponents";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
export default()=>{
    return(
    <div>
        <h1>DASHBOARD </h1>

        <h1>$_*</h1>
     <FilterComponents/>

     <ExpenseList/>
    </div>
)
}