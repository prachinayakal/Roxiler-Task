import { useEffect, useState } from 'react'
import axios from 'axios'
import Statistics from '../Statistics'
import BarChartComponent from '../BarChart'
import './index.css'

const months = [
    { name: "January" },
    { name: "February" },
    { name: "March" },
    { name: "April" },
    { name: "May" },
    { name: "June" },
    { name: "July" },
    { name: "August" },
    { name: "September" },
    { name: "October" },
    { name: "November" },
    { name: "December" },
]

const Transactions = () => {
    const [transactionList, setTransactionList] = useState([])
    const [selectedMonth, setSelectedMonth] = useState(months[2].name)
    const [searchInput, setSearchInput] = useState('')
    const [page, setPage] = useState(1)

    useEffect(() => {
        const getTransactions = async () => {
            const list = await axios.get(`/api/transactions-data?month=${selectedMonth}&page=${page}&search=${searchInput}&perPage=10`)
            if (list) {
                setTransactionList(list.data.transactions)
            }
        }
        getTransactions()
    }, [page, searchInput, selectedMonth])

    return (
        <div className='main-container'>
            <div className='first-container'>
                <h3>Transaction Dashboard</h3>
            </div>
            <div className='second-container'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='input-element'
                    type="search"
                    placeholder='Search transaction'
                />
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className='dropdown-list'
                >
                    {months.map(o => <option className='selector-element' key={o.name} value={o.name}>{o.name}</option>)}
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {transactionList.map((o) => {
                        const { id, title, description, price, category, sold, image } = o
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{title}</td>
                                <td>{description}</td>
                                <td>{price}</td>
                                <td>{category}</td>
                                <td>{sold}</td>
                                <td><img className='product-image' src={image} alt={title} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='last-container'>
                <p>Page No: {page}</p>
                <p>
                    <span onClick={() => setPage(prevValue => prevValue + 1)} className='next-button'>Next</span> - 
                    <span onClick={() => setPage(prevValue => prevValue > 1 ? prevValue - 1 : prevValue)} className='previous-button'>Previous</span>
                </p>
                <p>Per Page: 10</p>
            </div>
            <Statistics selectedMonth={selectedMonth} />
            <BarChartComponent selectedMonth={selectedMonth} />
        </div>
    )
}

export default Transactions;
