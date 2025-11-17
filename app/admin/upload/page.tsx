"use client";

import { useState } from "react";

export default function UploadPage() {
  const [status, setStatus] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    setStatus("（演示版本）已提交表单，但还未连接数据库与视频存储。");
  }

  return (
    <div>
      <h1>后台上传比赛</h1>
      
      <form onSubmit={handleSubmit}>
        <p>选手1 ID: <input name="p1" /></p>
        <p>选手2 ID: <input name="p2" /></p>
        <p>胜者 ID: <input name="win" /></p>
        <p>日期: <input name="date" type="date" /></p>
        <p>视频链接: <input name="video" /></p>

        <button type="submit">提交</button>
      </form>

      <p>{status}</p>
    </div>
  );
}
