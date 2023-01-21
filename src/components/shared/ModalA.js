import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useFetchContacts from '../hooks/useFetchContacts';
import ModalC from './ModalC';

const ModalA = () => {
    const [page, setPage] = useState(1);
    const { contacts } = useFetchContacts(page);
    const [contactDetails, setContactDetails] = useState(null);
    const [searchFilter, setSearchFilter] = useState('');
    const [checked, setChecked] = useState(false);

    //contact details
    const handleDetails = (id) => {
        const details = contacts.filter((data) => {
            return data?.id === id
        })
        setContactDetails(details[0]);
    }

    return (
        <>
            <input type="checkbox" id="contact-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className='text-center uppercase font-bold mb-3'>All Contacts</p>
                    <div>
                        <div className="flex justify-center gap-x-4">
                            <label className="btn btn-sm bg-[#46139f]">All Contacts</label>
                            <label htmlFor="us-contact-modal" className="btn btn-sm  bg-[#ff7f50]">US Contacts</label>
                            <label htmlFor="contact-modal" className="btn btn-sm text-black hover:text-white bg-white border-[#46139f]">Close</label>
                        </div>
                        <div className='flex justify-center mt-3'>
                            <input
                                className='px-4 py-2 shadow-xl rounded-md bg-slate-100'
                                placeholder='Search'
                                onChange={(e) => setSearchFilter(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* table */}
                    <div className="overflow-x-auto mt-1 max-h-96">

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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        checked ?
                                            contacts?.filter((item) => {
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
                                                        <td onClick={() => handleDetails(data.id)} ><label htmlFor="details-modal" className='btn btn-xs'>Details</label></td>
                                                    </tr>
                                                )
                                            :
                                            contacts?.filter((val) => {
                                                if (searchFilter === '') {
                                                    return val
                                                } else if (val.phone.includes(searchFilter)) {
                                                    return val
                                                }
                                            })?.map((data, index) =>
                                                <tr key={index}>
                                                    <th>{data.id}</th>
                                                    <td>{data.phone}</td>
                                                    <td onClick={() => handleDetails(data.id)} ><label htmlFor="details-modal" className='btn btn-xs'>Details</label></td>
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
            <ModalC contactDetails={contactDetails} />
        </>
    )
}

export default ModalA