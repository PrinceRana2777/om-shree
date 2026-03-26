export const openWhatsApp = (name: string = '', phone: string = '', message: string = '') => {
  const baseUrl = 'https://wa.me/919892105881';
  let text = 'Hello Om Shree Interiors!';
  
  if (name || phone || message) {
    text += `\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`;
  } else {
    text += '\nI would like to enquire about your services.';
  }
  
  const encodedText = encodeURIComponent(text);
  window.open(`${baseUrl}?text=${encodedText}`, '_blank');
};
