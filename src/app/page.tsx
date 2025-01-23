import Cart from "@/components/Cart";
import Product from "@/components/Product";
import Image from "next/image";


interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const products: Product[] =[
  {
    id:1,
    name:"Bag",
    price:57,
    quantity:0,
    image: "/bag.jpeg"
    
  },
  {
    id:2,
    name:"Gopro",
    price:7.99,
    quantity:0,
    image: "/gopro.jpeg"

    
  },
  {
    id:3,
    name:"Tripod",
    price:44.99,
    quantity:0,
    image:"/tripod.jpeg"

    
  }

]

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl">Basic E-Commerce Website</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((data) => (
          <div key={data.id}>
            <Image src={data.image} alt={data.name} width={200} height={200} />
            <Product product={data} />
          </div>
        ))}
      </div>
      <Cart/>

    </div>
  </main>
  )
}