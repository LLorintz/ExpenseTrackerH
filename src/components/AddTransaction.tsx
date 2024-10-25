

const AddTransaction = () => {
  return (
    <div>
        <h3>Add transaction</h3>
        <form action="">
            <div className="form-control">
                <label htmlFor="text">text</label>
                <input type="text" placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="">negative-expense, positive-income</label>
                <input type="number" />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction