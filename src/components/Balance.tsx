import { useContext } from "react"
import { GlobalContext } from "./GlobalContext/GlobalContext"

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction=>(transaction.amount))
  const total = amounts.reduce((acc, amount)=>(acc+=amount),0).toFixed(2)

  return (
    <div className="balanceContainer">
        <h3>Your Balance</h3>
        <h4>${total}</h4>
    </div>
  )
}

export default Balance