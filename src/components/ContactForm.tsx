'use client';

import { FormEvent, useState } from "react";
import Ruler from "./Ruler";
import TextInput from "./TextInput";

const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    function onSubmit(e: FormEvent) {
        e.preventDefault()
        console.log({
            firstName,
            lastName,
            email,
            phone,
            message
        })
    }

    return (
        <form onSubmit={onSubmit} className='w-full'>
            <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput onTextChange={setFirstName} label='First Name' />
                <TextInput onTextChange={setLastName} label='Last Name' />
            </div>
            <Ruler height='32px' />
            <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput onTextChange={setEmail} label='Email' />
                <TextInput onTextChange={setPhone} label='Phone' />
            </div>
            <Ruler height='32px' />

            <div className='relative'>
                <label htmlFor={"Message"} className=' absolute leading-4 -top-2 bg-white px-2'>{"Message"}</label>
                <textarea
                    className='w-full leading-6 px-2 pt-4 border-2 border-black'
                    name="message"
                    id="message"
                    onChange={e => setMessage(e.target.value)}
                    rows={6}
                />
            </div>
            <Ruler height='32px' />

            <button type='submit' className='uppercase border-2 border-black p-4 text-white bg-black'>Send Message</button>

        </form>
    )
}

export default ContactForm;