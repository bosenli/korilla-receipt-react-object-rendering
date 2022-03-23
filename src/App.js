import './App.css';
import { receipts } from "./components/Receipts";
import Receipt from "./components/Receipt"
const receiptList = receipts; 
function App() {
  //object list
  return (
    <div className="App">
      <Receipt receiptList={receiptList} />
    </div>
  );
}

export default App;
