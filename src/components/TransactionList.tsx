import { useContext } from "react"
import Transaction from "../Transaction"
import { GlobalContext } from "./GlobalContext/GlobalContext"

const TransactionList = () => {
const {transactions} = useContext(GlobalContext)

  return (
    <div >
        <h3>History</h3>
        <ul className="list"> 
          {transactions.map(transaction=>(
            <Transaction key={transaction.id} {...transaction}></Transaction>
          ))}
        </ul>
    </div>
  )
}

export default TransactionList