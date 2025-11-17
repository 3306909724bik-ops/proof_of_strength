import Link from "next/link";
import { matches, players } from "../lib/data";

export default function MatchesPage() {
  return (
    <div>
      <h1>比赛列表</h1>

      <ul>
        {matches.map(m => (
          <li key={m.id}>
            <Link href={`/matches/${m.id}`}>
              {m.date} - {players.find(p => p.id === m.player1)?.name}
              {" vs "}
              {players.find(p => p.id === m.player2)?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
