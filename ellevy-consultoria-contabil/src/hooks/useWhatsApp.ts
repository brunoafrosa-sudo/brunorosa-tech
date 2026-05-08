const PHONE = '5531995851044' // (31) 99585-1044

export function useWhatsApp(message = 'Olá! Gostaria de saber mais sobre a Ellevy Consultoria.') {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
  const open = () => window.open(url, '_blank', 'noopener,noreferrer')
  return { url, open }
}
