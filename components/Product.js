import ItemStlyes from "./styles/ItemStyles";

export default function Product({product}){
    return <ItemStlyes>
        <img src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}/>
    </ItemStlyes>
}