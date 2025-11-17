import { players, matches } from "../../lib/data";

export default function PlayerDetail({ params }: { params: { id: string } }) {
  const player = players.find(p => p.id === params.id);
  const playerMatches = matches.filter(
    m => m.player1 === params.id || m.player2 === params.id
  );

  if (!player) return <div>未找到该选手</div>;

  return (
    <div>
      <h1>{player.name}</h1>
      <p>国家：{player.country}</p>
      

      <h2>比赛记录</h2>
      <ul>
        {playerMatches.map(m => (
          <li key={m.id}>
            <a href={`/matches/${m.id}`}>
              {m.date} 比赛 - 胜者：{players.find(p => p.id === m.winner)?.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
