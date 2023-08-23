// * @ Name: Hook useForm
// * @ Since: Version 1.0
// * @ Description: This hook is used to retrieve all the data entered by the user
// * @ -- in any contact form of the application.
// * @ Creator: Carlos Moctezuma aka @crdgom


import {useState, useEffect} from 'react'

function useForm (callback, defaults) {
    const [input, setInput] = useState(defaults)

    useEffect(()=> {
        setInput({...defaults})
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        callback(input)
    }

    return {
        input,
        handleInputChange,
        handleSubmit
    }

}

export default useForm