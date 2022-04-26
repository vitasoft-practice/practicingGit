import { useRouter } from 'next/router'


//dynamic routing
function ProductDetails(){
    const router = useRouter();

    const {productId} = router.query;

    return(
        <div>
            <h1>Product is listed in {productId} </h1>
        </div>
    )
}

export default ProductDetails