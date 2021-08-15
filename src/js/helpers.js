export const getTimestamp = () => {
  return (Date.now()/1000).toFixed(1)
}

export const capitalize = text => {
  return text.replace(/^\w/, (c) => c.toUpperCase());
}