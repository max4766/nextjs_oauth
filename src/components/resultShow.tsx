'use client';

import { useState, useEffect } from "react";

interface Data {
  foo: string;
}

export default function ResultShow({ data }: { data: Data | null }) {
  
  const [state, setState] = useState(false);
  const [fetchState, setFetchState] = useState(null);
  
  useEffect(() => {
    if (!state) return; // state가 true일 때만 호출

    async function fetchData() {
      try {
        const res = await fetch("/api/getDummyJson"); // route.ts 호출
        if (!res.ok) throw new Error("API 호출 실패");
        const data = await res.json();
        setFetchState(data);
      } catch {
        return;
      }
    }

    fetchData();
  }, [state]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
          This is the result of API request;
        </h1>
        <p>
          {data ? JSON.stringify(data) : 'Failed to fetch data.'}
        </p>
        <span onClick={() => setState(true)}>{state ? 'True' : 'False'}</span>
        <span>{fetchState ? JSON.stringify(fetchState) : ''}</span>
      </main>
    </div>
  );
}