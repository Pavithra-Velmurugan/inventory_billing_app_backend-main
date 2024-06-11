
import nodemailer from "nodemailer"

let sendmail =async (receiver, text, html, subject) => {
  let transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pavithravelmurugan1497@gmail.com",
      pass: "quvs uyhs mbwo jqgx",
    },
  });


  let mailOption = {
    from: "pavithravelmurugan1497@gmail.com",
    to: receiver,
    subject: subject,
    text: text,
    html: html,
  };
  
  
  transport.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
   return error.message;

    } else {
      console.log("Email sent: " + info.response);
      return info.response;
    }
  });
};

// sendmail("tonyjeyatj@gmail.com","hello","<h1>hello</h1>","hello")

export default sendmail
