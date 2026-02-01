// app/lib/data.ts

/**
 * 核心类型定义
 */
export type Hand = "left" | "right";
export type Weight = "65kg" | "75kg" | "85kg" | "open";

/**
 * 选手接口
 * 新增 nameEn 和 cityEn 用于国际化
 */
export interface Player {
  id: string;
  name: string;
  nameEn: string; // 英文名
  country: string;
  city: string;
  cityEn: string; // 英文城市
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
 * 已补充英文名和英文城市
 */
export const players: Player[] = [
  { id: "1", name: "小凯", nameEn: "Xiao Kai", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "2", name: "阿杰", nameEn: "A Jie", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "3", name: "小杜", nameEn: "Xiao Du", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "4", name: "柯智贤", nameEn: "Ke Zhixian", country: "中国", city: "海南", cityEn: "Hainan" },
  { id: "5", name: "小果", nameEn: "Xiao Guo", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "6", name: "潘文兵", nameEn: "Pan Wenbing", country: "中国", city: "婺源", cityEn: "Wuyuan" },
  { id: "7", name: "徐日成", nameEn: "Xu Richeng", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "8", name: "程宽", nameEn: "Cheng Kuan", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "9", name: "张近立", nameEn: "Zhang Jinli", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "10", name: "杨鹏", nameEn: "Yang Peng", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "11", name: "齐宪凡", nameEn: "Qi Xianfan", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "12", name: "小龙包", nameEn: "Xiao Longbao", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "13", name: "江科亮", nameEn: "Jiang Keliang", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "14", name: "吴显林", nameEn: "Wu Xianlin", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "15", name: "乌兰发", nameEn: "Wu Lanfa", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "16", name: "项龙", nameEn: "Xiang Long", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "17", name: "程鑫", nameEn: "Cheng Xin", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "18", name: "胡含旭", nameEn: "Hu Hanxu", country: "中国", city: "九江", cityEn: "Jiujiang" },
  { id: "19", name: "马超", nameEn: "Ma Chao", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "20", name: "梁健平", nameEn: "Liang Jianping", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "21", name: "徐江顺", nameEn: "Xu Jiangshun", country: "中国", city: "九江", cityEn: "Jiujiang" },
  { id: "22", name: "朱志霖", nameEn: "Zhu Zhilin", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "23", name: "叶若", nameEn: "Ye Ruo", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "24", name: "张文毅", nameEn: "Zhang Wenyi", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "25", name: "朱军强", nameEn: "Zhu Junqiang", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "26", name: "李林炜", nameEn: "Li Linwei", country: "中国", city: "九江", cityEn: "Jiujiang" },
  { id: "27", name: "姚庚飞", nameEn: "Yao Gengfei", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "28", name: "子俊", nameEn: "Zi Jun", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "29", name: "短神", nameEn: "Duan Shen", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "30", name: "周行", nameEn: "Zhou Xing", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "31", name: "周先生", nameEn: "Mr. Zhou", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "32", name: "舒保林", nameEn: "Shu Baolin", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "33", name: "斗腕仙道", nameEn: "Dou Wan Xian Dao", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "34", name: "华哥", nameEn: "Brother Hua", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "35", name: "望春风", nameEn: "Wang Chunfeng", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "36", name: "熊逸鸣", nameEn: "Xiong Yiming", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "37", name: "周仓", nameEn: "Zhou Cang", country: "中国", city: "南昌", cityEn: "Nanchang" },
  { id: "38", name: "田振", nameEn: "Tian Zhen", country: "中国", city: "常德", cityEn: "Changde" },
  { id: "39", name: "肖宇杰", nameEn: "Xiao Yujie", country: "中国", city: "吉安", cityEn: "Jian" },
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
    "85kg": ["1","36", "8","35"],
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
// app/lib/data.ts

// ... (前面的 Hand, Weight, Player 接口和 players 数组保持不变) ...

/**
 * 比赛数据
 * 包含 pos0, pos1, pos2
 */
export const matches: Match[] = [
  // ----------------------------------------------------
  // POS 0 (示例比赛)
  // ----------------------------------------------------
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

  // ----------------------------------------------------
  // POS 1 (2025-12-13)
  // ----------------------------------------------------
  {
    id: "1",
    event: "pos1",
    player1: "31", 
    player2: "8",  
    date: "2025-12-13",
    weight: "75kg",
    hand: "right",
    format: "5局3胜",
    winner: "8",
    score: "0-3",
    video: "BV11YmkB2EuV",
  },
  {
    id: "2",
    event: "pos1",
    player1: "38", 
    player2: "4",  
    date: "2025-12-13",
    weight: "65kg",
    hand: "right",
    format: "3局2胜",
    winner: "38", 
    score: "2-0",
    video: "BV11amkB7Emd",
  },
  {
    id: "3",
    event: "pos1",
    player1: "5", 
    player2: "3", 
    date: "2025-12-13",
    weight: "75kg",
    hand: "right",
    format: "5局3胜",
    winner: "5",
    score: "4-1",
    video: "BV1K8mkBSEvf",
  },
  {
    id: "4",
    event: "pos1",
    player1: "8", 
    player2: "5", 
    date: "2025-12-13",
    weight: "75kg",
    hand: "left",
    format: "5局3胜",
    winner: "8",
    score: "3-1",
    video: "BV1A9mzBiEFL",
  },
  {
    id: "5",
    event: "pos1",
    player1: "35", 
    player2: "34", 
    date: "2025-12-13",
    weight: "85kg",
    hand: "right",
    format: "5局3胜",
    winner: "35",
    score: "3-0",
    video: "BV128mkBUEnr",
  },
  {
    id: "6",
    event: "pos1",
    player1: "35", 
    player2: "36", 
    date: "2025-12-13",
    weight: "85kg",
    hand: "left",
    format: "5局3胜",
    winner: "36",
    score: "1-3",
    video: "BV1cdmzBNEoS",
  },
  {
    id: "7",
    event: "pos1",
    player1: "30", 
    player2: "37", 
    date: "2025-12-13",
    weight: "85kg",
    hand: "right",
    format: "5局3胜",
    winner: "30",
    score: "3-0",
    video: "",
  },

  // ----------------------------------------------------
  // POS 2 (2026-01-31) - 力之证第二届单挑赛
  // ----------------------------------------------------
  // 比赛时间：2026年1月31日 15:00
  // 状态：未开赛 (winner为空，score为0-0)
  
  // 第一场：李林炜(26) vs 徐江顺(21) | 无差别 | 左手 | 3局2胜
  {
    id: "pos2_1",
    event: "pos2",
    player1: "26", // 李林炜
    player2: "21", // 徐江顺
    date: "2026-01-31",
    weight: "open",
    hand: "left",
    format: "3局2胜",
    winner: "",    // 未开赛
    score: "0-0",  
    video: "",
  },

  // 第二场：周先生(31) vs 姚庚飞(27) | 75kg | 右手 | 5局3胜
  {
    id: "pos2_2",
    event: "pos2",
    player1: "31", // 周先生
    player2: "27", // 姚庚飞
    date: "2026-01-31",
    weight: "75kg",
    hand: "right",
    format: "5局3胜",
    winner: "",
    score: "0-0",
    video: "",
  },

  // 第三场：程宽(8) vs 望春风(35) | 85kg | 左手 | 3局2胜
  {
    id: "pos2_3",
    event: "pos2",
    player1: "8",  // 程宽
    player2: "35", // 望春风
    date: "2026-01-31",
    weight: "85kg",
    hand: "left",
    format: "3局2胜",
    winner: "8",
    score: "2-0",
    video: "",
  },

  // 第四场：徐江顺(21) vs 徐日成(7) | 85kg | 右手 | 5局3胜
  // 原文写的是"徐日程"，应该是"徐日成"(ID:7)，体重按85kg算
  {
    id: "pos2_4",
    event: "pos2",
    player1: "21", // 徐江顺
    player2: "7",  // 徐日成
    date: "2026-01-31",
    weight: "85kg",
    hand: "right",
    format: "5局3胜",
    winner: "7",
    score: "3-0",
    video: "",
  },

  // 第五场：周先生(31) vs 肖宇杰(39) | 75kg | 左手 | 5局3胜
  {
    id: "pos2_5",
    event: "pos2",
    player1: "31", // 周先生
    player2: "39", // 肖宇杰
    date: "2026-01-31",
    weight: "75kg",
    hand: "left",
    format: "5局3胜",
    winner: "",
    score: "0-0",
    video: "",
  },

  // 第六场：熊神(36) vs 小凯(1) | 无差别冠军战 | 左手 | 3局2胜
  {
    id: "pos2_6",
    event: "pos2",
    player1: "36", // 熊逸鸣
    player2: "1",  // 小凯
    date: "2026-01-31",
    weight: "open",
    hand: "left",
    format: "3局2胜",
    winner: "1",
    score: "2-0",
    video: "",
  },
];

// ... (后面的 getPlayerById 和 getMatchById 保持不变) ...

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
/*git commit -m "update"*/
/*git push*/

