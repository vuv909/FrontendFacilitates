"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "../../services/product/ProductService";
import "primeflex/primeflex.css";
import Link from "next/link";
interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

interface Facility{
  _id: string;
  name: string;
  status: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}


export default function CarouselTopComponent(props: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [faci, setFaci] = useState<Facility[]>([]);
  // console.log(props.data);
  

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
    setFaci(props.data)
  },[faci]);

  if(!faci){
    return(
      <div>
        loading...
      </div>
    )
  }

  const productTemplate = (facility: Facility) => {
    return (
      <Link href={"/detail/2"}>
        <div className="relative text-center h-72  cursor-pointer m-5 z-50">
          <Image
            width={500}
            height={500}
            src="https://picsum.photos/200/300"
            alt={facility.name}
            className="w-screen h-full rounded-lg"
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-2 pb-2 rounded-b-lg">
            <p className="font-bold">{facility.name}</p>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-black hover:bg-opacity-80 p-2 rounded-full">
            <button className="text-white px-3 w-fit">100 lần</button>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className="px-16">
      <Carousel
        value={faci}
        numVisible={4}
        numScroll={4}
        circular
        prevIcon={
          <div className="bg-gray-300 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
        }
        nextIcon={
          <div className="bg-gray-300 p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="14"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </div>
        }
        showIndicators={false}
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
