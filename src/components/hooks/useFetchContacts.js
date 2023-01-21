import React, { useEffect, useState } from 'react'

const useFetchContacts = (page) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/contacts/?page=${page}`)
            .then(response => response.json())
            .then(data => setContacts((prev) => [...prev, ...data.results]));
    }, [page])
    return {
        contacts
    }
}

export default useFetchContacts
