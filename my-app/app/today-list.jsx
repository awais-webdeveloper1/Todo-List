'use client'
import { useState } from "react";

export default function TodayForm() {


    const [itemName, setName] = useState('');
    const [itemWeight, setWeight] = useState('');
    const [itemPrice, setPrice] = useState('');
    const [submittedItems, setSubmittedItems] = useState([]);
    const [loading, setLoading] = useState('');
    

    const handleItemChane = (e) => {
        setName(e.target.value);
    }
    const handleweightChane = (e) => {
        setWeight(e.target.value);
    }
    const handlePriceChane = (e) => {
        setPrice(e.target.value);
    }

    const handleSubmit = () => {
        setLoading(true)
        const newItem = {
            itemName: itemName,
            itemWeight: itemWeight,
            itemPrice: itemPrice,
        };

        setSubmittedItems([...submittedItems, newItem]);
        alerted()
        setName('')
        setPrice('')
        setWeight('')
    }
    const alerted = () => {
        setLoading(false)
        alert("Form Submited")
    }

    console.log("Form Submited", submittedItems)
    return (
        <>
            <section className="pt-16 h-screen w-full bg-white">

                <div className="flex flex-col justify-center items-center pt-8">
                    <h1 className="text-black font-extrabold text-4xl ">Today List</h1>
                    <input
                        type="text"
                        value={itemName}
                        onChange={handleItemChane}
                        placeholder="ItemName"
                        className="mt-6 h-12 w-xl shadow-xl rounded-[10] text-black p-6"
                    />
                    <input
                        type="text"
                        value={itemWeight}
                        onChange={handleweightChane}
                        placeholder="ItemWeight"
                        className="mt-6 h-12 w-xl shadow-xl rounded-[10] text-black p-6"
                    />
                    <input
                        type="text"
                        value={itemPrice}
                        onChange={handlePriceChane}
                        placeholder="ItemPrice"
                        className="mt-6 h-12 w-xl shadow-xl rounded-[10] text-black p-6"
                    />
                    <button onClick={handleSubmit} type="submit" className="mt-6 bg-emerald-600 text-white border h-12 w-36 rounded-2xl shadow-xl cursor-pointer font-semibold">Submit</button>
                </div>
            </section>





            <section className="pt-20 h-screen w-full bg-white ">
                <div className="flex flex-col items-center">
                <table className="border text-black text-center">
                    <thead>
                        <tr className="border">
                            <th className="border py-2 px-4">Item Name</th>
                            <th className="border py-2 px-4">Item Weight</th>
                            <th className="border py-2 px-4">Item Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {submittedItems.map((item, index) => (
                            <tr key={index} className="border">
                                <td className="border py-2 px-4">{item.itemName}</td>
                                <td className="border py-2 px-4">{item.itemWeight}</td>
                                <td className="border py-2 px-4">{item.itemPrice}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                </div>
            </section>

        </>
    )
}






