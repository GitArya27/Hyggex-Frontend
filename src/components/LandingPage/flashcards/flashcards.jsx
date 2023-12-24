import React, { useState } from 'react'

const Flashcards = () => {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([{ id: 1, name: "English" },
        { id: 2, name: "Science" },
        { id: 3, name: "Mathematics"},
        { id: 4, name: "Commerce" },
        { id: 5, name: "Physics" },
        { id: 6, name: "Chemistry" }
    ]);

    const Filter = items.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <div className='pt-28 px-28 bg-[#f9f9f9] pb-8'>

            <section className='flex justify-between items-center mb-8'>
                <div className='relative w-[50%]'>
                    <span className='absolute inset-y-0 left-2 top-2 pl-3 rotate-[330deg] flex items-center text-[#06286E]'>
                        &#9906;
                    </span>
                    <input
                        type='search'
                        name='search'
                        placeholder='Search'
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        className='w-[100%] pl-10 h-[40px] text-sm px-4 py-2 rounded-2xl border-2 border-blue-500'
                    />
                </div>

                <select
                    name=""
                    id=""
                    className='w-[20%] h-[46px] text-[#4E5563] text-sm px-2 py-2 rounded-md border-2 border-blue-500'
                >
                    <option value="">Select class</option>
                    <option value="">Class1</option>
                    <option value="">Class2</option>
                    <option value="">Class3</option>
                </select>

            </section>

            <section className='py-4'>
                <div className="grid md:grid-cols-3 gap-12 sm:grid-cols-2 grid-cols-1">
                    {Filter.map((item) => (
                        <div key={item.id}
                            className="bg-gradient bg-blue-600 w-[100%] font-semibold text-center p-24 text-[#fff] rounded-[18px]">
                            <p className='text-center m-auto'>{item.name}</p>
                        </div>

                    ))}
                </div>

            </section>

            <section className='bg-gradient1'>{/*FAQ*/}
                <h2>FAQ</h2>
                <div>

                </div>
            </section>

        </div>
    )
}

export default Flashcards
