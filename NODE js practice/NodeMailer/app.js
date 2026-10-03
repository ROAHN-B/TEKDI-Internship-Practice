const nodeMailer = require('nodemailer')

const html = `
    <h1>Hello World</h1>
    <p>Isn't NodeMiler useful?</p>
`;

async function main(){

    const Transporter=nodeMailer.createTransport({
        host:'mail.openjavascript.info',
        port:465,
        secure:true,
        auth:{
            user:'test@openjavascript.info',
            pass:'NodeMailer123!'
        }
    });

    const info = await Transporter.sendMail({
        from:'test@openjavascript.info',
        to:'rohanbelsare113@gmail.com',
        subject:'Mail testing ',
        html:html,
        attachments: [{
            filename:'img1.jpg',
            path:'./img1.jpg',
            cid:'unique@openjavascript.info'
        }]
    })

    console.log("Message sent: " +info.messageId);
}

main()
.catch(e => console.log(e));
