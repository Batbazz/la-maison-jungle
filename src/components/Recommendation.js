function Recommendation() {
  const currentMonth = new Date().getMonth()
  const isSpring = currentMonth >= 2 && currentMonth <= 5

  if (!isSpring) {
    return <div>Ce n'est pas encore moment de rempoter !</div>
  }

  return <div>C'est le printemps, c'est le moment de rempoter !</div>
}

export default Recommendation
