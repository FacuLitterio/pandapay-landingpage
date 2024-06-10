export const PHONE_NUMBER = "+541125442829";

const onClickWhatsApp = () => {
  const message = encodeURIComponent(
    "¡Hola! Quiero información sobre PandaPay y sus servicios de medios de pago. ¿Podemos hablar?"
  );
  window.open(`https://wa.me/${PHONE_NUMBER}/?text=${message}`, "_blank");
};

export default onClickWhatsApp;
