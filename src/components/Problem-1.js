import React, { useState } from 'react';

const Problem1 = () => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [show, setShow] = useState([]);
    const [info, setInfo] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let infoArr = [];
        if (name && status !== '') {
            infoArr.push({
                name: name,
                status: status
            })
            setShow((prev) => {
                return [...prev, ...infoArr]
            })
        }
    }

    const showActive = () => {
        let activeArr = [];
        show?.forEach((element) => {
            if (element.status.toLowerCase() === 'active') {
                activeArr.push(element)
                // console.log(activeArr);
                setInfo(activeArr)
            }
        })
    }
    const showCompleted = () => {
        let completedArr = [];
        show?.forEach((element) => {
            if (element.status.toLowerCase() === 'completed') {
                completedArr.push(element)
                // console.log(activeArr);
                setInfo(completedArr)
            }
        })
    }
    const showAll = () => {
        let allArr = [];
        const active = show.filter((element) => {
            return element.status.toLowerCase() === 'active'
        })
        const completed = show.filter((element) => {
            return element.status.toLowerCase() === 'completed'
        })
        const rest = show.filter((element) => {
            return element.status.toLowerCase() !== 'active' && element.status !== 'completed'
        })

        allArr.push(...active, ...completed, ...rest);
        setInfo(allArr);
    }

    return (
        <>
            <h4 className='text-center uppercase my-5'>Problem-1</h4>
            <div className='flex justify-evenly'>
                <div className="">
                    <form className="flex flex-col gap-3 mb-4" onSubmit={handleSubmit}>
                        <div className="">
                            <input type="text" className="px-3 py-2 bg-slate-200 rounded" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" />
                        </div>
                        <div className="">
                            <input type="text" className="px-3 py-2 bg-slate-200 rounded" onChange={(e) => setStatus(e.target.value)} value={status} placeholder="Status" />
                        </div>
                        <div className="">
                            <button type="submit" className=" bg-cyan-900 w-full text-white hover:bg-cyan-800">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="">
                    <ul className="flex gap-x-5" id="pills-tab" role="tablist">
                        <li className="px-3 py-2 bg-blue-800 rounded-full text-white">
                            <button type="button" onClick={showAll}>All</button>
                        </li>
                        <li className="px-3 py-2 bg-blue-800 rounded-full text-white">
                            <button type="button" onClick={showActive}>Active</button>
                        </li>
                        <li className="px-3 py-2 bg-blue-800 rounded-full text-white">
                            <button type="button" onClick={showCompleted}>Completed</button>
                        </li>
                    </ul>
                    <table className="table table-zebra w-full mt-5">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                info?.map((info, index) =>
                                    <tr key={index}>
                                        <td>{info.name}</td>
                                        <td>{info.status}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Problem1;