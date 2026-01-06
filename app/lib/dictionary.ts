export type Locale = 'zh' | 'en';

export const dictionary = {
  zh: {
    // --- 导航栏 (Navbar) ---
    nav_home: "首页",
    nav_match: "赛事",
    nav_about: "关于",
    nav_left: "左手",
    nav_right: "右手",
    nav_open: "无差别",
    nav_switch_lang: "EN", // 按钮显示的文字

    // --- 通用词汇 (Common) ---
    common_left: "左手",
    common_right: "右手",
    common_unknown_player: "未知选手",
    common_date: "比赛日期",
    common_loading: "加载中...",

    // --- 排行榜页面 (Ranking Page) ---
    ranking_title_suffix: "排行榜", // 用于 "- 力之证排行榜 -"
    ranking_col_rank: "排名",
    ranking_col_name: "选手姓名",
    ranking_tip_click: "点击选手名字",
    ranking_tip_detail: "查看详细信息",
    ranking_quote_prefix: "“", // 引号也可以根据语言变，英文用 "
    ranking_quote_suffix: "”",

    // --- 比赛详情页 (Match Page) ---
    match_not_found: "❌ 找不到该比赛信息",
    match_back_list: "⬅ 返回赛事列表",
    match_tag_left: "左手 LEFT",
    match_tag_right: "右手 RIGHT",
    match_status_finished: "已完赛",
    match_result_title: "MATCH RESULT", // 或者 "比赛结果"
    match_winner_label: "获胜者",
    match_replay_title: "比赛回放",
    match_no_video: "🎥 暂无比赛视频",

    // --- 视频列表页 (Videos Page) ---
    video_list_empty: "暂无比赛视频",
    video_btn_bilibili: "🚀 去 Bilibili 观看",
    video_overlay_click: "📺 点击放大观看", // 如果你保留了之前的弹窗逻辑

    // --- 城市翻译 (用于映射数据库里的中文城市) ---
    city_NanChang: "南昌",
    city_ChangDe: "常德",
    city_HaiNan: "海南",
    city_JiuJiang: "九江",
    city_WuHan: "武汉",
    city_ShangHai: "上海",
    city_China: "中国",
    // 你可以根据实际数据库里的城市继续添加
  },
  
  en: {
    // --- Navbar ---
    nav_home: "HOME",
    nav_match: "EVENTS",
    nav_about: "ABOUT",
    nav_left: "LEFT ARM",
    nav_right: "RIGHT ARM",
    nav_open: "OPEN",
    nav_switch_lang: "中",

    // --- Common ---
    common_left: "Left Arm",
    common_right: "Right Arm",
    common_unknown_player: "Unknown",
    common_date: "Date",
    common_loading: "Loading...",

    // --- Ranking Page ---
    ranking_title_suffix: "RANKINGS",
    ranking_col_rank: "RANK",
    ranking_col_name: "ATHLETE",
    ranking_tip_click: "CLICK NAME",
    ranking_tip_detail: "FOR DETAILS",
    ranking_quote_prefix: "\"",
    ranking_quote_suffix: "\"",

    // --- Match Page ---
    match_not_found: "❌ Match not found",
    match_back_list: "⬅ Back to List",
    match_tag_left: "LEFT ARM",
    match_tag_right: "RIGHT ARM",
    match_status_finished: "FINISHED",
    match_result_title: "MATCH RESULT",
    match_winner_label: "WINNER",
    match_replay_title: "MATCH REPLAY",
    match_no_video: "🎥 No Video Available",

    // --- Videos Page ---
    video_list_empty: "No videos available",
    video_btn_bilibili: "🚀 Watch on Bilibili",
    video_overlay_click: "📺 Click to Expand",

    // --- City Translation ---
    city_NanChang: "Nanchang",
    city_ChangDe: "Changde",
    city_HaiNan: "Hainan",
    city_JiuJiang: "Jiujiang",
    city_WuHan: "Wuhan",
    city_ShangHai: "Shanghai",
    city_China: "China",
  }
};