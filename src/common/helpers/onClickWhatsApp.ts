const onClickWhatsApp = () => {
  const phoneNumber = "1163046642";
  const message = encodeURIComponent(
    "¡Hola! Quiero información sobre PandaPay y sus servicios de medios de pago. ¿Podemos hablar?"
  );
  window.open(`https://wa.me/${phoneNumber}/?text=${message}`, "_blank");
};

export default onClickWhatsApp;
