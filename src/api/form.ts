// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'


type ResponseData = {
    sent: boolean
    errorMessage: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {

    // create reusable transporter object using the default SMTP transport
    let transporter = createTransport({
        // @ts-ignore TODO: Research why!
        host: process.env.HOST,
        port: process.env.PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"Portfolio form from" <${req.body.firstName}>`,
            to: req.body._email,
            subject: req.body._subject,
            text: "",
            html: `
            <p>First Name: ${req.body.firstName}</p>
            <hr />
            <p>Last Name: ${req.body.lastName}</p>
            <hr />
            <p>Téléphone: ${req.body.phone}</p>
            <hr />
            <p>Email: ${req.body.email}</p>
            <hr />
            <p>Message:</p>
            <p>${req.body.message}</p>
            <hr />
            <br />
            <br />
            <h6>FORMS by bogital</h6>
        `,
        });

        console.log(info)

        res.json({
            sent: true,
            errorMessage: ''
        })

    } catch (e) {
        console.warn(e)
        res.json({
            sent: false,
            errorMessage: 'There was an issue submiting your message, please retry later...'
        })
    }


}
