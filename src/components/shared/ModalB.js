import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchContacts from '../hooks/useFetchContacts';

const ModalB = () => {
    const [page, setPage] = useState(1);
    const { contacts } = useFetchContacts(page);
    const [searchFilter, setSearchFilter] = useState('');
    const [checked, setChecked] = useState(false);

    const usContacts = contacts.filter((data) => {
        return data?.country?.name === "United States"
    })
    return (
        <>
            <input type="checkbox" id="us-contact-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className='text-center uppercase font-bold mb-3'>US Contacts</p>
                    <div>
                        <div className="flex justify-center gap-x-4">
                            <label htmlFor="contact-modal" className="btn btn-sm bg-[#46139f]">All Contacts</label>
                            <label className="btn btn-sm  bg-[#ff7f50]">US Contacts</label>
                            <label htmlFor="us-contact-modal" className="btn btn-sm text-black hover:text-white bg-white border-[#46139f]">Close</label>
                        </div>
                        <div className='flex justify-center mt-2'>
                            <input
                                className='px-4 py-2 shadow-xl rounded-md bg-slate-100'
                                placeholder='Search'
                                onChange={(e) => setSearchFilter(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* table */}
                    <div className="overflow-x-auto mt-2 max-h-96">
                        <InfiniteScroll
                            dataLength={contacts.length}
                            next={() => setPage((prev) => prev + 1)}
                            hasMore={true}
                            loader={<h4 className='text-center'>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>You have seen it all</b>
                                </p>
                            }
                        >
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Contact</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        checked ?
                                            usContacts?.filter((item) => {
                                                const converted = parseInt(item.phone.replace(/[^a-zA-Z0-9]/g, ''))
                                                if (converted % 2 == 0) {
                                                    return item
                                                }
                                            })
                                                ?.filter((val) => {
                                                    if (searchFilter === '') {
                                                        return val
                                                    } else if (val.phone.includes(searchFilter)) {
                                                        return val
                                                    }
                                                })?.map((data, index) =>
                                                    <tr key={index}>
                                                        <th>{data.id}</th>
                                                        <td>{data.phone}</td>
                                                        <td>{data.country.name}</td>
                                                    </tr>
                                                )
                                            :
                                            usContacts?.filter((val) => {
                                                if (searchFilter === '') {
                                                    return val
                                                } else if (val.phone.includes(searchFilter)) {
                                                    return val
                                                }
                                            })?.map((data, index) =>
                                                <tr key={index}>
                                                    <th>{data.id}</th>
                                                    <td>{data.phone}</td>
                                                    <td>{data.country.name}</td>
                                                </tr>
                                            )
                                    }

                                </tbody>
                            </table>
                        </InfiniteScroll>
                    </div>
                    <div className='flex gap-x-2'>
                        <input type="checkbox" checked={checked} className="checkbox" onChange={(e) => setChecked(e.target.checked)} />
                        <p className='font-bold'>Show only even</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalB