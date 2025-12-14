// app/lib/data.ts

/**
 * 核心类型定义
 */
export type Hand = "left" | "right";
export type Weight = "65kg" | "75kg" | "85kg" | "open";

/**
 * 选手接口
 */
export interface Player {
  id: string;
  name: string;
  country: string;
  city: string;
}

/**
 * 比赛接口
 */
export interface Match {
  id: string;
  event: string;
  player1: string; // 选手ID
  player2: string; // 选手ID
  winner: string; // 选手ID
  date: string; // YYYY-MM-DD 格式
  weight: Weight | string; // 如果不确定重量级别，可以保留 string
  hand: Hand;
  format: string; // 如 "5局3胜"
  score: string; // 如 "2-0"
  video: string; // 视频链接或路径
}

/**
 * 选手数据
 */
export const players: Player[] = [
  { id: "1", name: "小凯", country: "中国", city: "南昌" },
  { id: "2", name: "阿杰", country: "中国", city: "南昌" },
  { id: "3", name: "小杜", country: "中国", city: "南昌" },
  { id: "4", name: "比小迪", country: "中国", city: "海南" },
  { id: "5", name: "小果", country: "中国", city: "南昌" },
  { id: "6", name: "潘文兵", country: "中国", city: "婺源" },
  { id: "7", name: "徐日成", country: "中国", city: "南昌" },
  { id: "8", name: "程宽", country: "中国", city: "南昌" },
  { id: "9", name: "张近立", country: "中国", city: "南昌" },
  { id: "10", name: "杨鹏", country: "中国", city: "南昌" },
  { id: "11", name: "齐宪凡", country: "中国", city: "南昌" },
  { id: "12", name: "小龙包", country: "中国", city: "南昌" },
  { id: "13", name: "江科亮", country: "中国", city: "南昌" },
  { id: "14", name: "吴显林", country: "中国", city: "南昌" },
  { id: "15", name: "乌兰发", country: "中国", city: "南昌" },
  { id: "16", name: "项龙", country: "中国", city: "南昌" },
  { id: "17", name: "程鑫", country: "中国", city: "南昌" },
  { id: "18", name: "胡含旭", country: "中国", city: "九江" },
  { id: "19", name: "马超", country: "中国", city: "南昌" },
  { id: "20", "name": "梁健平", "country": "中国", "city": "南昌" },
  { id: "21", name: "徐江顺", country: "中国", city: "九江" },
  { id: "22", name: "朱志霖", country: "中国", city: "南昌" },
  { id: "23", name: "叶若", country: "中国", city: "南昌" },
  { id: "24", name: "张文毅", country: "中国", city: "南昌" },
  { id: "25", name: "朱军强", country: "中国", city: "南昌" },
  { id: "26", name: "李林炜", country: "中国", city: "九江" },
  { id: "27", name: "姚庚飞", country: "中国", city: "南昌" },
  { id: "28", name: "子俊", country: "中国", city: "南昌" },
  { id: "29", name: "短神", country: "中国", city: "南昌" },
  { id: "30", name: "周行", country: "中国", city: "南昌" },
  { id: "31", name: "周先生", country: "中国", city: "南昌" },
  { id: "32", name: "舒保林", country: "中国", city: "南昌" },
  { id: "33", name: "斗腕仙道", country: "中国", city: "南昌" },
  { id: "34", name: "华哥", country: "中国", city: "南昌" },
  { id: "35", name: "望春风", country: "中国", city: "南昌" },
  { id: "36", name: "熊逸鸣", country: "中国", city: "南昌" },
  { id: "37", name: "周仓", country: "中国", city: "南昌" },
  { id: "38", name: "田振", country: "中国", city: "常德" },
];


/**
 * 排名数据 (使用 Player ID)
 */
export const rankings: Record<
  Hand,
  Record<Weight, string[]>
> = {
  left: {
    "65kg": ["8", "11", "3", "12", "13", "14"],
    "75kg": ["1", "19", "8", "5", "2", "20", "17"],
    "85kg": ["36", "35"],
    "open": ["1", "7", "25", "28", "26", "27", "24", "29"],
  },
  right: {
    // 排名保持不变，田振(38)胜比小迪(4)验证了当前排名顺序
    "65kg": ["3", "38", "4", "6", "8", "9", "10"], 
    "75kg": ["2", "15", "16", "17", "18", "1"],
    "85kg": ["30", "35", "34"],
    "open": ["7", "21", "22", "23", "28", "24", "29"],
  },
};


/**
 * 比赛数据
 * 统一 hand 字段为 "left" 或 "right"
 * 简化 format 字段
 */
export const matches: Match[] = [
  // 示例比赛 (pos0)
  {
    id: "0",
    event: "pos0",
    player1: "1",
    player2: "7",
    winner: "1",
    date: "2025-11-15",
    weight: "open", 
    hand: "left", 
    format: "3局2胜", 
    score: "2-0",
    video: "/videos/XiaoKai_vs_Xuricheng.mp4",
  },

  // ① 周先生 vs 程宽｜右手｜0-3（程宽胜）
  {
    id: "1",
    event: "pos1",
    player1: "31", // 周先生
    player2: "8",  // 程宽
    date: "2025-12-13",
    weight: "75kg",
    hand: "right",
    format: "5局3胜",
    winner: "8",
    score: "0-3",
    video: "",
  },

  // ② 田振 vs 比小迪｜右手｜2-0（田振胜）
  {
    id: "2",
    event: "pos1",
    player1: "38", // 田振
    player2: "4",  // 比小迪
    date: "2025-12-13",
    weight: "65kg",
    hand: "right",
    format: "3局2胜",
    winner: "38", // 更新为 田振 (38)
    score: "2-0",
    video: "",
  },

  // ③ 小果 vs 小杜｜右手｜4-1（小果胜）
  {
    id: "3",
    event: "pos1",
    player1: "5", // 小果
    player2: "3", // 小杜
    date: "2025-12-13",
    weight: "75kg",
    hand: "right",
    format: "5局3胜",
    winner: "5",
    score: "4-1",
    video: "",
  },

  // ④ 程宽 vs 小果｜左手｜3-1（程宽胜）
  {
    id: "4",
    event: "pos1",
    player1: "8", // 程宽
    player2: "5", // 小果
    date: "2025-12-13",
    weight: "75kg",
    hand: "left",
    format: "5局3胜",
    winner: "8",
    score: "3-1",
    video: "",
  },

  // ⑤ 春风 vs 华哥｜右手｜3-0（春风胜）
  {
    id: "5",
    event: "pos1",
    player1: "35", // 望春风
    player2: "34", // 华哥
    date: "2025-12-13",
    weight: "85kg",
    hand: "right",
    format: "5局3胜",
    winner: "35",
    score: "3-0",
    video: "",
  },

  // ⑥ 春风 vs 熊神｜左手｜1-3（熊神胜）
  {
    id: "6",
    event: "pos1",
    player1: "35", // 望春风
    player2: "36", // 熊逸鸣（熊神）
    date: "2025-12-13",
    weight: "85kg",
    hand: "left",
    format: "5局3胜",
    winner: "36",
    score: "1-3",
    video: "",
  },

  // ⑦ 周行 vs 周仓｜右手｜3-0（周行胜）
  {
    id: "7",
    event: "pos1",
    player1: "30", // 周行
    player2: "37", // 周仓
    date: "2025-12-13",
    weight: "85kg",
    hand: "right",
    format: "5局3胜",
    winner: "30",
    score: "3-0",
    video: "",
  },
];

// ----------------------------------------------------
// ⚙️ 数据获取函数 (为了支持 match/[id]/page.tsx)
// ----------------------------------------------------

/**
 * 根据 ID 获取选手信息
 * @param id 选手 ID
 * @returns 选手对象或 undefined
 */
export function getPlayerById(id: string) {
  return players.find((player) => player.id === id);
}

/**
 * 根据 ID 获取比赛信息
 * @param id 比赛 ID
 * @returns 比赛对象或 undefined
 */
export function getMatchById(id: string) {
  return matches.find((match) => match.id === id);
}

/*git add .*/
/*git commit -m "update ]"*/
/*git push*/

