import { useState, useEffect } from "react"
import { IProduct } from "../models"
import Product from "../components/product"
import { getAll } from "../api/products"

const Home = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    const fetchProducts = async () => {
        const { data } = await getAll()
        setProducts(data.datas)
        console.log(data);
        
    }

    

    useEffect(() => {
        fetchProducts()
    }, [])
    return <div>
        <h1 className="text-[30px] font-[Roboto] mt-[23px] mb-[11px] ml-[170px]">SẢN PHẨM NỔI BẬT</h1>
        <div className="grid grid-cols-4 gap-3">
            {products.map(product =>
                <Product
                    data={product}
                    key={product._id} />)
            }
        </div>
    </div>
}

export default Home