"use server"
import nodemailer from 'nodemailer'

export async function sendMail({ to, name, subject, body }: {
  to: string,
  subject: string,
  name: string,
  body: string,
}) {
  const { NODEMAILER_PW, NODEMAILER_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NODEMAILER_EMAIL,
      pass: NODEMAILER_PW,
    }
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult)
  }
  catch (error) {
    console.log(error)

  }

  try {
    const sendResult = await transport.sendMail({
      from: NODEMAILER_EMAIL,
      subject,
      to,
      html: body
    })
  }
  catch (error) {


  }



}