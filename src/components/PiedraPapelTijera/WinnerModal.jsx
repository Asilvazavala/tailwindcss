export const WinnerModal = ({ winner, resetGame }) => {
  function getRandomString() {
    const strings = [
      '💎',
      '💪',
      '😀',
      '👌',
      '❤️',
      '🙉',
      '🤩'
    ];
  
    const randomIndex = Math.floor(Math.random() * strings.length);
    return strings[randomIndex];
  }

  if (winner === null) return null
  const winnerText = winner === false ? '😱Empate😱' : `${getRandomString()}Ganó: ${winner}`

  return (
    <section>
      <div className="flex justify-center">
        <h2 className="text-lg text-red-800 font-bold p-2 border-4 border-red-800 bg-maroon md:text-2xl">{winnerText}</h2>
      </div>
    </section>
  )
}
