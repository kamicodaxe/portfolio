'use client';

import { FormEvent, useState } from "react";
import Ruler from "./Ruler";
import TextInput from "./TextInput";

type ResponseData = {
    sent: boolean
    errorMessage: string
}

const ContactForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [messageSent, setMessageSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    function onSubmit(e: FormEvent) {
        e.preventDefault()

        // Make the POST request
        fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                message,
                // Change the email to receive in another email account
                _email: 'lkami@bogital.com',
                _subject: 'Portfolio Website Message'
            }),
        })
            .then<ResponseData>((response) => response.json())
            .then((data) => {
                console.log("Response from server:", data);
                // Handle the response from the server
                setMessageSent(data.sent)
                setErrorMessage(data.errorMessage)
            })
            .catch((error) => {
                setErrorMessage('There was an issue submiting your message, please retry later.')

            });

    }

    return (
        <form
            className='w-full'
            onSubmit={onSubmit}
            method="POST"
        >
            
            <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput name="firstName" onTextChange={setFirstName} label='First Name' />
                <TextInput name="lastName" onTextChange={setLastName} label='Last Name' />
            </div>
            <Ruler height='32px' />
            <div className='w-full space-y-8 md:space-y-0 md:space-x-4 md:flex'>
                <TextInput name="email" onTextChange={setEmail} label='Email' />
                <TextInput name="phone" onTextChange={setPhone} label='Phone' />
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
            

            <div className='w-full'>
                <Ruler height='32px' />
                {
                    messageSent && (
                        <p className='bg-green-500 text-white text-center py-4'>Thanks, I will reply in less than 24 hours.</p>
                    )
                }

                {
                    errorMessage && (
                        <p className='bg-red-500 transition-colors text-white text-center py-4'>{errorMessage}</p>
                    )
                }
            </div>

        </form>
    )
}

export default ContactForm;