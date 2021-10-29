const nodemailer = require("nodemailer");

// email sender function
exports.sendEmail = function (req, res) {
  // Definimos el transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "thecrewmusicstore@gmail.com",
      pass: "tcstore123",
    },
  });

  const cart = req.body.map((order) => {
    return `<li>${order.product.name} ${order.product.name} Precio: ${order.product.price} Cantidad:${order.quantity}</li><br>`;
  });

  // Definimos el email para el cliente
  const mailOptions = {
    from: "TC-Store <thecrewmusicstore@gmail.com>",
    to: req.user.email,
    subject: "Confirmación de compra en TC-Store",
    html: ` <h4>Hola ${req.user.name}, </h4>
            <p>"Felicitaciones!! Tu compra se ha realizado de forma exitosa!"</p>
            <p>${JSON.stringify(cart)}</p>
    `,
  };

  // Definimos el email para la tienda
  const mailOptionsToMe = {
    from: "TC-Store <thecrewmusicstore@gmail.com>",
    to: "thecrewmusicstore@gmail.com",
    subject: "Confirmación de compra en TC-Store",
    html: ` <h4>Has recibido una compra de ${req.user.name} </h4>
            <p>Contactalo a su email: ${req.user.email} </p>
            <p>${JSON.stringify(cart)}</p>
        `,
  };

  // Enviamos el email al cliente
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(500, error.message);
    } else {
      console.log("Email sent");
      res.status(200).jsonp(req.body);
    }
  });

  // Enviamos el email a la tienda
  transporter.sendMail(mailOptionsToMe, function (error, info) {
    if (error) {
      console.log(error);
      res.send(500, error.message);
    } else {
      console.log("Email sent");
      res.status(200).jsonp(req.body);
    }
  });
};
