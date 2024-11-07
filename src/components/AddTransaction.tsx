import { FormEvent, useContext, useState } from "react"
import { GlobalContext } from "./GlobalContext/GlobalContext"


const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext)
  const [text,settext] = useState('')
  const [amount,setAmount] = useState(0)

  const handleTextChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
     settext(e.target.value)
  }

  const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setAmount(parseInt(e.target.value))
 }

const handleSubmit= (e:FormEvent)=>{
  e.preventDefault()
  addTransaction({
    id:Math.floor(Math.random()*1000000),
    text,
    amount,
  })
  settext('');
  setAmount(0);
}

  return (
    <div>
        <h3>Add transaction</h3>
        <form onSubmit={handleSubmit} action="">
            <div className="form-control">
                <label htmlFor="text">text</label>
                <input value={text} onChange={handleTextChange} type="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="">negative-expense, positive-income</label>
                <input value={amount} onChange={handleAmountChange} type="number" />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction