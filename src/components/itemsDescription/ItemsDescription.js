import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { itemId, itemIdDescription } from "../../services/itemsServices";
import { priceFormat } from "../../utils/utils";

const ItemsDescriptions = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [itemDescription, setItemDescription] = useState(null);

  useEffect(() => {
    async function fetchDataItem(item) {
      try {
        const result = await itemId(item);
        setItem(result);
      } catch (err) {
        console.log(err);
      }
    }

    async function fetchDataItemDescription(item) {
      try {
        const result = await itemIdDescription(item);
        setItemDescription(result);
      } catch (err) {
        console.log(err);
      }
    }

    fetchDataItem(id);
    fetchDataItemDescription(id);
  }, [id]);

  return (
    <section className="bg-white">
      {item && (
        <div className="flex flex-col m-2">
          <div className="flex mt-2">
            <img
              alt={"item"}
              src={item.pictures[0].secure_url}
              width={"400px"}
            />
            <div className="flex flex-col m-2 space-y-4 w-full">
              <div className="space-x-2 text-sm text-slate-400">
                <span>{item.condition === "new" ? "Nuevo" : "Usado"}</span>
                <span>{item.sold_quantity} Vendidos</span>
              </div>
              <h1 className="font-medium text-lg">{item.title}</h1>
              <span className="font-medium text-2xl">
                {priceFormat(item.price)}
              </span>
              <button className="self-center bg-blue-500 w-full text-white rounded-lg py-1">
                {" "}
                Comprar{" "}
              </button>
            </div>
          </div>
          {
            itemDescription && itemDescription.plain_text !== '' &&
          <div className="pb-2 pl-2 space-y-4">
            <h2 className="font-semibold text-lg mt-4">Descripcion del producto</h2>
            <p className="font-light text-md text-slate-500 w-10/12">
                {itemDescription.plain_text}
            </p>
          </div>
          }
        </div>
      )}
    </section>
  );
};

export default ItemsDescriptions;
