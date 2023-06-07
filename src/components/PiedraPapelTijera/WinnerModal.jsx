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
  const winnerText = winner === false ? '😱Empate😱' : `${getRandomString()}Ganó: ${winner}${getRandomString()}`

  return (
    <section>
      <div className="flex justify-center">
        <h2 className="text-2xl text-red-maroon font-bold p-2">{winnerText}</h2>
      </div>
    </section>
  )
}
