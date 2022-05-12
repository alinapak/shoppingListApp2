import React, { useEffect, useState } from 'react';

const ShoppingListApp = () => {
   const [items, setItems] = useState([]);
   const [newItem, setNewItem] = useState([]);

   const addItem = (e) => {
      e.preventDefault();
      let createItems = JSON.stringify([...items, newItem]);
      localStorage.setItem("items", createItems);
      setNewItem("");
      setItems([...items, newItem]);
   }
   const removeItem = (shoppingItem) => {
      let filtered = items.filter((shopI) => shopI !== shoppingItem);
      localStorage.setItem("items", JSON.stringify(filtered));
      setItems(filtered);
   };

   useEffect(() => {
      let localStorageItems = JSON.parse(localStorage.getItem("items"));
      setItems(localStorageItems || []);
   }, []);

   return (
      <div className="card m-3">
         <form onSubmit={(e) => addItem(e)} className="card-body m-3 list-group list-group-flush">
            <input className="list-group-item border border-warning rounded" value={newItem} onChange={(e) => setNewItem(e.target.value)} required>
            </input>
            <button className=" btn mt-3 btn-warning">Add item</button>
         </form>
         <div className="container">{items.map((item, idx) => (
            <div className="row justify-content-center" key={idx}>
               <p className="list-group-item rounded col-4">{item}</p>
               <button onClick={() => { removeItem(item); }}className="btn col-2 btn-dark">Delete</button>
            </div>
         )
         )}
         </div>
      </div>
   );
};

export default ShoppingListApp;