function Show(props) {
  const id = props.match.params.id
  const games = props.games
  const game = games.find(p => p._id === id)

  return (
    <div className="game">
      <h1>{game.name}</h1>
      <h2>{game.title}</h2>
      <img src={game.image} alt={game.name} />
    </div>
  )
}

export default Show