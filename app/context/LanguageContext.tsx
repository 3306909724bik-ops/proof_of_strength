"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { dictionary, Locale } from '@/app/lib/dictionary';

// 定义 Context 类型
type LanguageContextType = {
  lang: Locale;
  toggleLanguage: () => void;
  t: (key: keyof typeof dictionary['zh']) => string;
  isLoaded: boolean; // 新增：防止闪屏的加载状态
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 默认先给中文，但我们加一个 loading 状态来避免“先显示中文再闪变英文”
  const [lang, setLang] = useState<Locale>('zh');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 1. 优先检查：用户以前是否手动切换过语言并保存了？
    const savedLang = localStorage.getItem('app_lang') as Locale;
    
    if (savedLang) {
      setLang(savedLang);
    } else {
      // 2. 如果没有历史记录，检测浏览器语言
      // navigator.language 例如：'en-US', 'zh-CN', 'ja-JP'
      // 注意：在服务端渲染时 navigator 是 undefined，所以必须放在 useEffect 里
      const browserLang = navigator.language.toLowerCase();
      
      // 逻辑：如果是 'zh' 开头（zh, zh-CN, zh-TW），就用中文
      // 否则（英语、日语、法语等），全部默认给英文
      if (browserLang.startsWith('zh')) {
        setLang('zh');
      } else {
        setLang('en');
      }
    }
    
    // 标记初始化完成
    setIsLoaded(true);
  }, []);

  // 切换语言函数（手动切换具有最高优先级，需写入 localStorage）
  const toggleLanguage = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    setLang(newLang);
    localStorage.setItem('app_lang', newLang);
  };

  // 翻译辅助函数
  const t = (key: keyof typeof dictionary['zh']) => {
    return dictionary[lang][key] || key;
  };

  // 渲染逻辑：为了避免“闪屏”（比如在英文浏览器上一闪而过中文），
  // 我们可以让页面在判断完语言前显示空白，或者显示一个简单的加载色块
  // 如果你不介意瞬间的闪烁，可以去掉这个 if 判断
  if (!isLoaded) {
    // 这里返回一个与你背景色相同的空 div，起到“隐形加载”的作用
    return <div style={{ minHeight: '100vh', background: '#2e2828' }} />; 
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 自定义 Hook
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}