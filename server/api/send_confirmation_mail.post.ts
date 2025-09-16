import { randomUUID } from 'crypto';

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const config = useRuntimeConfig()

    const token = randomUUID()

    const verifyUrl = `${config.public.siteUrl}/api/verify?token=${token}&email=${body.email}`

    console.log('Verification URL:', verifyUrl);

    try {
    const response: any = await $fetch('http://mailer.mipsicored.com/send-confirmation-mail', {
        method: 'POST',
        body: new URLSearchParams({
            'email': body.email,
            'firstName': body.firstName,
            'verifyUrl': verifyUrl
        })
    });

    console.log('Mail server response:', response); 

    if(response.status !== 200) {
        return { status: 500, message: 'Failed to send email' }
    } else if(response.status === 200) {
        return { status: 200, message: 'Email sent successfully' }
    }
} catch (error) {
    console.error('Failed to send confirmation mail:', error);
}

    return { status: 500, message: 'Unknown error' };

});