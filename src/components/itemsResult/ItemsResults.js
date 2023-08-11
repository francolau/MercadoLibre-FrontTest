import React, { useEffect, useMemo, useState } from "react";

import { priceFormat } from "../../utils/utils";
import { searchItems } from "../../services/itemsServices";

import { Link, useLocation } from "react-router-dom";

const ItemsResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("search");

  const [items, setItems] = useState(null)


  let limitedItems = []

    useEffect(() => {
        async function fetchData(item) {
            try {
              const result = await searchItems(item);
                setItems(result.results)
            } catch(err){
              console.log(err)
            }
      }
      fetchData(searchQuery)
    }, [searchQuery])

    useMemo(() => {
        if(items !== null){
            for (let i = 0; i < 4; i++) {
                limitedItems.push(items[i]);
              }
        }
    }, [items])

    console.log(limitedItems)

  return (
    <section className="bg-white space-y-4">
      {limitedItems.length !== 0 &&
        limitedItems.map((item) => {
          return (
            <Link className="flex" key={item.catalog_product_id} to={`/items/${item.id}`}>
              <img
                src={item.thumbnail}
                alt="item-logo"
                width="200px"
                height="200px"
                className="object-fit m-2"
              />
              <div className="flex flex-col w-full ml-4">
                <span className="font-semibold text-lg mt-4">{priceFormat(item.price)}</span>
                <span className="self-end bg-slate-100 p-1 mr-2 text-slate-500">{item.address.state_name}</span>
                <h2 className="text-lg -mt-5">{item.title}</h2>
              </div>
            </Link>
          );
        })}
    </section>
  );
};

export default ItemsResults;
