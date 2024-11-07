import { createContext, ReactNode, useState } from "react"

type childrenProps = {
    children:ReactNode
}

type transactionType={
  id:number,
  text: string,
  amount:number,
}

type GlobalState={
  transactions:transactionType[],
  deleteTransaction:(id:number)=>void,
  addTransaction:(t:transactionType)=>void;
}

const initialState = {
    transactions:[
        {id:1, text:'Flowers', amount:-30},
        {id:2, text:'Salary', amount:300},
        {id:3, text:'Book', amount:-10},
    ]
  }

  export const GlobalContext = createContext<GlobalState>({
    transactions:initialState.transactions,
    deleteTransaction:()=>{},
    addTransaction:()=>{},
  })

const GlobalProvider = ({children}:childrenProps) => {

const [transactions, setTransactions] = useState<transactionType[]>(initialState.transactions)

const deleteTransaction = (id:number)=>{
  setTransactions(transactions.filter(transaction=>transaction.id!==id))
}

const addTransaction=(t:transactionType)=>{
    setTransactions(prev=>([...prev,t]))
}

    return (
    <GlobalContext.Provider value={{transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider