import Link from "next/link";
import { players } from "../lib/data";

export default function PlayersPage() {
  return (
    <div>
      <h1>选手列表</h1>

      <ul>
        {players.map(p => (
          <li key={p.id}>
            <Link href={`/players/${p.id}`}>
              {p.name}（{p.country}{p.city}）
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
