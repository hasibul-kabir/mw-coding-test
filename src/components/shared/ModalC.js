import React from 'react'

const ModalC = ({ contactDetails }) => {
    return (
        <>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <p className='text-center uppercase font-bold mb-3'>Contact Details</p>
                    <div>
                        <div className="flex justify-center gap-x-4">
                            <label htmlFor="details-modal" className="btn btn-sm text-black hover:text-white bg-white border-[#46139f]">Close</label>
                        </div>
                    </div>

                    {/* table */}
                    <div className="overflow-x-auto mt-5 max-h-96">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Contact</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr >
                                    <th>{contactDetails?.id}</th>
                                    <td>{contactDetails?.phone}</td>
                                    <td>{contactDetails?.country.name}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalC