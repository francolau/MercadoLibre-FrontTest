import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchItems } from "../services/itemsServices";

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

  return (
    <section>
      {limitedItems.length !== 0 &&
        limitedItems.map((item) => {
          return (
            <div className="flex" key={item.catalog_product_id}>
              <img
                src={item.thumbnail}
                alt="item-logo"
                width="100px"
                height="100px"
              />
              <div className="flex flex-col">
                <span>$ {item.price}</span>
                <h1>{item.title}</h1>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default ItemsResults;
