

const TransactionList = () => {
  return (
    <div >
        <h3>History</h3>
        <ul className="list"> 
            <li className="minus">
                Flowers<span>-$30</span><button className="deleteBtn">X</button>
            </li>
        </ul>
    </div>
  )
}

export default TransactionList