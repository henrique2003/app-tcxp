const editDate = (date: string): string => {
  const arrayDate = date.split(':')
  const tDate = arrayDate[0].split('T')
  const traceDate = tDate[0].split('-')
  const invertDate = traceDate[2] + '/' + traceDate[1] + '/' + traceDate[0]

  return invertDate
}

export default editDate
