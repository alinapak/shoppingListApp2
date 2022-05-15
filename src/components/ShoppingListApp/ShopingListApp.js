import React, { useEffect, useState } from 'react';

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
   const [newItem, setNewItem] = useState();

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
      <div className="card m-3">
         <form onSubmit={(e) => addItem(e)} className="card-body m-3 list-group list-group-flush">
            <input className="list-group-item border border-warning rounded" value={newItem} onChange={(e) => setNewItem(e.target.value)} required>
            </input>
            <button className=" btn mt-3 btn-warning">Add item</button>
         </form>
         <div className="container">{items.map((item, idx) => (
            <ul className="row justify-content-center" key={idx}>
               <li className="list-group-item rounded col-4">{item.item}</li>
               <button className="btn col-2 btn-danger" onClick={() => checkItem(item.id)}>Check</button>
               <button onClick={() => { removeItem(item); }} className="btn col-2 btn-dark">Delete</button>
            </ul>
         )
         )}
         </div>
      </div>
   );
};

export default ShoppingListApp;