"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Tag } from "primereact/tag";
import { ProductService } from "../services/ProductService";
import "primeflex/primeflex.css";
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

export default function CarouselComponent() {
  const [products, setProducts] = useState<Product[]>([]);
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product: Product) => {
    return (
      <div
        className="text-center py-5 px-1 cursor-pointer m-5 rounded-xl z-50 shadow-2xl"
        style={{
          zIndex: "50",
          boxShadow:
            "0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-screen rounded-t-xl"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
          <Tag
            value={product.inventoryStatus}
            severity={getSeverity(product)}
          ></Tag>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={products}
      numVisible={3}
      numScroll={3}
      responsiveOptions={responsiveOptions}
      className="custom-carousel"
      circular
      showIndicators={false}
      autoplayInterval={3000}
      itemTemplate={productTemplate}
    />
  );
}
