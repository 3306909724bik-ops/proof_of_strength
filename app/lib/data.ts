export type Hand = "left" | "right";
export type Weight = "65kg" | "75kg" | "85kg" | "open";


export const players = [
  { id: "1", name: "小凯", country: "中国",city: "南昌" },
  { id: "2", name: "阿杰", country: "中国",city: "南昌" },
  { id: "3", name: "小杜", country: "中国",city: "南昌" },
  { id: "4", name: "比小迪", country: "中国",city: "海南" },
  { id: "5", name: "小果", country: "中国",city: "南昌" },
  { id: "6", name: "潘文兵", country: "中国",city: "婺源" },
  { id: "7", name: "徐日成", country: "中国",city: "南昌" },
  { id: "8", name: "程宽", country: "中国",city: "南昌" },
  { id: "9", name: "张近立", country: "中国",city: "南昌" },
  { id: "10", name: "杨鹏", country: "中国",city: "南昌" },
  { id: "11", name: "齐宪凡", country: "中国",city: "南昌" },
  { id: "12", name: "小龙包", country: "中国",city: "南昌" },
  { id: "13", name: "江科亮", country: "中国",city: "南昌" },
  { id: "14", name: "吴显林", country: "中国",city: "南昌" },
  { id: "15", name: "乌兰发", country: "中国",city: "南昌" },
  { id: "16", name: "项龙", country: "中国",city: "南昌" },
  { id: "17", name: "程鑫", country: "中国",city: "南昌" },
  { id: "18", name: "胡含旭", country: "中国",city: "九江" },
  { id: "19", name: "马超", country: "中国",city: "南昌" },
  { id: "20", name: "梁健平", country: "中国",city: "南昌" },
  { id: "21", name: "徐江顺", country: "中国",city: "九江" },
  { id: "22", name: "朱志霖", country: "中国",city: "南昌" },
  { id: "23", name: "叶若", country: "中国",city: "南昌" },
  { id: "24", name: "张文毅", country: "中国",city: "南昌" },
  { id: "25", name: "朱军强", country: "中国",city: "南昌" },
  { id: "26", name: "李林炜", country: "中国",city: "九江" },
  { id: "27", name: "姚庚飞", country: "中国",city: "南昌" },
  { id: "28", name: "子俊", country: "中国",city: "南昌" },
  { id: "29", name: "短神", country: "中国",city: "南昌" },
  { id: "30", name: "周行", country: "中国",city: "南昌" },
  { id: "31", name: "周先生", country: "中国",city: "南昌" },
  { id: "32", name: "舒保林", country: "中国",city: "南昌" },
  { id: "33", name: "斗腕仙道", country: "中国",city: "南昌" },
  { id: "34", name: "华哥", country: "中国",city: "南昌" },
  { id: "35", name: "望春风", country: "中国",city: "南昌" },
  { id: "36", name: "熊逸鸣", country: "中国",city: "南昌" },
  { id: "37", name: "周仓", country: "中国",city: "南昌" },
];


export const rankings: Record<
  Hand,
  Record<Weight, string[]>
> = {
  left: {
    "65kg": ["8", "11", "3", "12", "13", "14"],
    "75kg": ["1", "19", "5", "2", "20", "17"],
    "85kg": [],
    "open": ["1", "7", "25", "28", "26", "27", "24", "29"],
  },
  right: {
    "65kg": ["3", "4", "6", "8", "9", "10"],
    "75kg": ["2", "15", "16", "17", "18", "1"],
    "85kg": [],
    "open": ["7", "21", "22", "23", "28", "24", "29"],
  },
};


export const matches = [
  {
    id: "0",
    event:"pos0",
    player1: "1",
    player2: "7",
    winner: "1",
    date: "2025-11-15",
    score: "2-0",
    video: "/videos/XiaoKai_vs_Xuricheng.mp4"
  },
  {
    id: "1",
    event: "pos1",
    player1: "31", // 周先生
    player2: "32", // 舒保林
    date: "2025-12-13",
    weight: "75kg",
    hand: "右手",
    format: "3局2胜",
    winner: "",
    score: "",
    video: "",
  },

  {
    id: "2",
    event: "pos1",
    player1: "4",  // 比小迪
    player2: "33", // 斗腕仙道
    date: "2025-12-13",
    weight: "65kg",
    hand: "右手",
    format: "3局2胜",
    winner: "",
    score: "",
    video: "",
  },

  {
    id: "3",
    event: "pos1",
    player1: "5",  // 小果
    player2: "3",  // 小杜
    date: "2025-12-13",
    weight: "75kg",
    hand: "右手",
    format: "5局3胜（打满五局）",
    winner: "",
    score: "",
    video: "",
  },

  {
    id: "4",
    event: "pos1",
    player1: "5",  // 小果
    player2: "8",  // 程宽
    date: "2025-12-13",
    weight: "75kg",
    hand: "左手",
    format: "5局3胜",
    winner: "",
    score: "",
    video: "",
  },

  {
    id: "5",
    event: "pos1",
    player1: "34", // 华哥
    player2: "35", // 望春风
    date: "2025-12-13",
    weight: "85kg",
    hand: "右手",
    format: "5局3胜",
    winner: "",
    score: "",
    video: "",
  },

  {
    id: "6",
    event: "pos1",
    player1: "35", // 望春风
    player2: "36", // 熊逸鸣（熊神）
    date: "2025-12-13",
    weight: "85kg",
    hand: "左手",
    format: "5局3胜",
    winner: "",
    score: "",
    video: "",
  },

  {
    id: "7",
    event: "pos1",
    player1: "30", // 周行
    player2: "37", // 周仓
    date: "2025-12-13",
    weight: "85kg",
    hand: "右手",
    format: "5局3胜",
    winner: "",
    score: "",
    video: "",
  },
];

/*git add .*/
/*git commit -m "update ]"*/
/*git push*/