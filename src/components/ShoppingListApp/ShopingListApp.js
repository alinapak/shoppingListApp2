import React from 'react';
import { useState } from 'react';

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
   return (
      <div className="card m-3">
         <form onSubmit={(e) => addItem(e)} className="card-body m-3 list-group list-group-flush">
            <input className="list-group-item border border-warning rounded" value={newItem} onChange={(e) => setNewItem(e.target.value)}>
            </input>
            <button className=" btn mt-3 btn-warning">Add item</button>
         </form>
         <div className="m-3">{items.map((item, idx) => (
            <div key={idx}>
               <p className="border p-3 rounded">{item}</p>
            </div>
         )
         )}
         </div>
      </div>
   );
};

export default ShoppingListApp;