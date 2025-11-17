import { matches, players } from "../../lib/data";

export default function MatchDetail({ params }: { params: { id: string } }) {
  const match = matches.find(m => m.id === params.id);
  if (!match) return <div>未找到比赛</div>;

  return (
    <div>
      <h1>比赛详情</h1>

      <p>时间：{match.date}</p>
      <p>
        选手：
        {players.find(p => p.id === match.player1)?.name} vs{" "}
        {players.find(p => p.id === match.player2)?.name}
      </p>
      <p>胜者：{players.find(p => p.id === match.winner)?.name}</p>

      <h2>比赛视频链接</h2>
      <a href={match.video} target="_blank">观看视频</a>
    </div>
  );
}
