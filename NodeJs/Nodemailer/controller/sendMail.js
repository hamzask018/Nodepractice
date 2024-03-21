const nodemailer=require("nodemailer");
const sendMail=async(req,res)=>{
    let testacc=await nodemailer.createTestAccount(); //not real mail id

    let transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'mariam.dibbert@ethereal.email',
            pass: 'akNkY21E7aZA2ByBzd'
        }
    });
   
    let info=await transporter.sendMail({
        from: '"Hamza sk 👻" <mariam.dibbert@ethereal.email>', // sender address
        to: "hamzask.018@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
    console.log('Message sent: %s',info.messageId);
 res.json(info);
};

module.exports=sendMail;

// Ethereal is a fake SMTP service
