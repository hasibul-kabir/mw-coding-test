import React from 'react';
import ModalA from './shared/ModalA';
import ModalB from './shared/ModalB';

const Problem2 = () => {

    return (
        <div className="">
            <h4 className='uppercase text-center my-5'>Problem-2</h4>

            <div className="flex justify-center items-center h-screen gap-x-10">
                <label htmlFor="contact-modal" className="btn btn-md bg-[#46139f]">All Contacts</label>
                <label htmlFor="us-contact-modal" className="btn btn-md bg-[#ff7f50]">US Contacts</label>
            </div>
            <ModalA />
            <ModalB />

        </div>
    );
};

export default Problem2;