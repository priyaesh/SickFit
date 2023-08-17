import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
// import Products from './Product';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts{
    id
      name
    price
    description
  
    
    }
  }
`;


export default function Products(){
    const {data,error,loading}=useQuery(ALL_PRODUCTS_QUERY);
    console.log(data,error,loading); 
    return (
        <div>
            <p>PRoducts!!!</p>
            {data.allProducts.map((product)=>(<p key={product.id}>{product.name}</p>))}
        </div>
        // <div>
        //   {data.allProducts.map((product)=>(<p key={product.id}>{product.name}</p>))}
        // </div>
    )
}