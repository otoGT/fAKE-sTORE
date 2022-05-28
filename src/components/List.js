import { useEffect, useState } from "react";

const data = 'https://fakestoreapi.com/products'
console.log(data)

const products = [
  {
    name: 'Men`s Jaket',
    key: '1',
    color: 'Dark Blue',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
    imageAlt: '',
    price: '$200',
  },
  {
    name: 'Silver Hand Ring',
    color: 'Silver',
    key: '2',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    imageAlt: '',
    price: '$650',
  },
  {
    name: 'Zip Tote Basket',
    key: '3',
    color: 'White and Black',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-01.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    name: 'Samsung Qled 4k Gaming Monitor',
    key: '4',
    color: 'Black',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
    imageAlt: 'Zamzung',
    price: '$1000',
  },
  {
    name: 'Mens Casual Premium Slim Fit T-Shirts',
    key: '5',
    color: 'Black and White',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    imageAlt: 'T-shirt',
    price: '$22.3',
  },
  {
    name: 'Solid Gold Petite Micropave',
    key: '6',
    color: 'Silver',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    imageAlt: 'Micropave',
    price: '$168',
  },
  {
    name: 'White Gold Plated Princess',
    key: '7',
    color: 'White',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    imageAlt: 'Jewel',
    price: '$9.99',
  },
  {
    name: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
    key: '8',
    color: 'black',
    href: '#',
    imageSrc: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    imageAlt: 'Zamzung',
    price: '$109',
  }
  // More products...
]

export default function List() {

  

  return (
    <div className="bg-white w-3/4">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.key}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Add to favourites<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
