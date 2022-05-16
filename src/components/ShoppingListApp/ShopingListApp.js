import React, { useEffect, useState } from 'react';
import "./ShoppingListApp.css"

const readLocalItems = () => {
   let shopItems = localStorage.getItem("items");
   if (shopItems) {
      return JSON.parse(localStorage.getItem("items"));
   }
   else {
      return [];
   }
}

const ShoppingListApp = () => {
   const [items, setItems] = useState(readLocalItems());
   const [newItem, setNewItem] = useState([]);

   useEffect(() => {
      localStorage.setItem("items", JSON.stringify(items));
   }, [items]);

   const addItem = (e) => {
      e.preventDefault();
      setItems([...items, { item: newItem, completed: false, id: Math.random() * 1000 }]);
      setNewItem("");
   }

   const removeItem = (shoppingItem) => {
      let filtered = items.filter((shopI) => shopI !== shoppingItem);
      setItems(filtered);
   };

   const identical = (shoppingItem) => {
      items.filter((shopI) => shopI === shoppingItem);
   };

   const checkItem = (x) => {
      setItems(items.map((item) => {
         if (item.id === x) {
            return {
               ...item, completed: !item.completed
            }
         }
         return item;
      }
      ))
   }

   return (
      <>
         <div className="card m-3">
            <h1 className="text-center text-success display-4">Make your list here</h1>
            <form onSubmit={(e) => addItem(e)} className="card-body m-3  justify-content-center row d-flex ">
               <input className="list-group-item border border-success rounded" value={newItem} onChange={(e) => setNewItem(e.target.value)} required>
               </input>
               <button className=" btn btn-lg mt-3 btn-success">Add item</button>
            </form>
            <ul className="row">{items.map((item, idx) => (
               <li className="row my-1 d-flex justify-content-center  " key={idx}>
                  <div className={`list-group-item bg-light rounded col-5 ${item.completed ? "completed" : ""}`}>{item.item}</div>
                  <button className="btn mx-1 col-3 btn btn-outline-danger  flex-wrap" onClick={() => checkItem(item.id)}>{item.completed ? `Uncheck` : `Got it`}</button>
                  <button onClick={() => { removeItem(item); }} className="btn col-3 btn-danger  flex-wrap">Delete</button>
               </li>
            )
            )}
            </ul>
         </div>
      </>
   );
};

export default ShoppingListApp;