import React from 'react'
import Heading from './Heading';
import Table from './Table';
export const DynamicContent=({isLogged})=>{

       const Component=isLogged?Heading:Table;
       return<Component/>
}
export default DynamicContent