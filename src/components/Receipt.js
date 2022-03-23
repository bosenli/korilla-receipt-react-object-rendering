import React, { useState } from "react";
import "./Receipt.css"

const Receipt = ({ receiptList }) => { 

  const [receipts, updateReceipts] = useState(receiptList);
  console.log(receipts)
  //click event to remove 
  const removeReceipt = (e) => { 
    // console.log(e.target.getAttribute("name"));
    const nameOfReceipt = e.target.getAttribute("name"); //name attribute from line 22
    
    updateReceipts(receipts.filter(item => item.person !== nameOfReceipt));

  }

//Render the list of receipts
  const renderedList = receipts.map((receipt, index) => { 
    return (
      <div className="flexItems">
        <div>
          <h2>{receipt.person} <span className="delete" name={receipt.person} onClick={removeReceipt}>❌</span></h2>
          <p><span className="purple">Main:</span> {receipt.order.main}</p>
          <p><span className="purple">Protein:</span> {receipt.order.protein}</p>
          <p><span className="purple">Rice:</span> {receipt.order.rice}</p>
          <p><span className="purple">Sauce:</span> {receipt.order.sauce}</p>
          <p><span className="purple">Drink:</span> {receipt.order.drink}</p>
          <p><span className="purple">Cost:</span> {receipt.order.cost}</p>
        </div>
      </div>
    )
  });

return (
  <div>
    <h1>Korilla</h1>
    <div className="flex">
      {renderedList}
    </div>
  </div>
)

}

export default Receipt;