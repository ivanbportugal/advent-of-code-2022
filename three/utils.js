const isNum = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

return { isNum }
