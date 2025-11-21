export type Hand = "left" | "right";
export type Weight = "65kg" | "75kg" | "85kg" | "open";


export const players = [
  { id: "1", name: "小凯", country: "中国",city: "南昌" },
  { id: "2", name: "阿杰", country: "中国",city: "南昌" },
  { id: "3", name: "小杜", country: "中国",city: "南昌" },
  { id: "4", name: "比小迪", country: "中国",city: "南昌" },
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
  { id: "18", name: "胡含旭", country: "中国",city: "南昌" },
  { id: "19", name: "马超", country: "中国",city: "南昌" },
  { id: "20", name: "梁健平", country: "中国",city: "南昌" },
  { id: "21", name: "徐江顺", country: "中国",city: "九江" },
  { id: "22", name: "朱志霖", country: "中国",city: "南昌" },
  { id: "23", name: "叶若", country: "中国",city: "南昌" },
  { id: "24", name: "张文毅", country: "中国",city: "南昌" },
  { id: "25", name: "朱军强", country: "中国",city: "南昌" },
  { id: "26", name: "李林炜", country: "中国",city: "南昌" },
  { id: "27", name: "姚庚飞", country: "中国",city: "南昌" },
  { id: "28", name: "子俊", country: "中国",city: "南昌" },
];


export const rankings: Record<
  Hand,
  Record<Weight, string[]>
> = {
  left: {
    "65kg": ["8", "11", "3", "12", "13", "14"],
    "75kg": ["1", "19", "5", "2", "20", "17"],
    "85kg": [],
    "open": ["1", "7", "25", "28", "26", "27", "24"],
  },
  right: {
    "65kg": ["3", "4", "6", "8", "9", "10"],
    "75kg": ["2", "15", "16", "17", "18", "1"],
    "85kg": [],
    "open": ["7", "21", "22", "23", "28", "24"],
  },
};


export const matches = [
  {
    id: "1",
    player1: "1",
    player2: "7",
    winner: "1",
    date: "2025-11-15",
    score: "2-0",
    video: "/videos/XiaoKai_vs_Xuricheng.mp4"
  },
  
];

/*git add .*/
/*git commit -m "update player pages UI"*/
/*git push*/