"use client";

import { useEffect, useMemo, useState } from "react";
import {
  interviewCategories,
  interviewQuestions,
  type QuestionCategory,
} from "@/lib/interview-questions";

const STORAGE_KEY = "fjt.interview.v1";

type Status = "learned" | "revision";
type StatusMap = Record<string, Status>;

const categoryLabels: Record<QuestionCategory, string> = {
  hr: "HR & Intro",
  javascript: "JavaScript",
  frontend: "Frontend",
  internship: "Internship",
};

export default function InterviewLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | QuestionCategory>("all");
  const [practiceMode, setPracticeMode] = useState(false);
  const [statuses, setStatuses] = useState<StatusMap>({});
  const [openId, setOpenId] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  /* Load revision/learned marks from localStorage (client only). */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setStatuses(JSON.parse(raw) as StatusMap);
    } catch {
      // ignore corrupted data
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
    } catch {
      // ignore
    }
  }, [statuses, hydrated]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return interviewQuestions.filter((item) => {
      const matchesCategory = category === "all" || item.category === category;
      const matchesQuery =
        q.length === 0 ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const learnedCount = useMemo(
    () => Object.values(statuses).filter((s) => s === "learned").length,
    [statuses]
  );
  const revisionCount = useMemo(
    () => Object.values(statuses).filter((s) => s === "revision").length,
    [statuses]
  );

  const toggleStatus = (id: string, status: Status) =>
    setStatuses((prev) => {
      const next = { ...prev };
      if (prev[id] === status) delete next[id];
      else next[id] = status;
      return next;
    });

  const resetProgress = () => {
    setStatuses({});
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const tabButton = (
    id: "all" | QuestionCategory,
    label: string,
    count: number
  ) => (
    <button
      type="button"
      aria-pressed={category === id}
      onClick={() => setCategory(id)}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
        category === id
          ? "bg-brand-600 text-white"
          : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
      }`}
    >
      {label} <span className="opacity-70">{count}</span>
    </button>
  );

  const progressPercent = Math.round(
    (learnedCount / interviewQuestions.length) * 100
  );

  return (
    <div className="space-y-6">
      {/* Privacy + how-to note */}
      <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-4 text-sm leading-relaxed text-slate-700">
        <strong className="text-slate-900">How to use this:</strong> read a
        question, try answering it <em>out loud</em> in your own words, then open
        the sample answer and compare. Mark questions as{" "}
        <strong>learned</strong> or <strong>for revision</strong> — your marks are
        saved only in this browser. Memorising scripts doesn&apos;t get you
        selected; understanding the reasoning does.
      </div>

      {/* Progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">Your progress</p>
            <p className="text-sm text-slate-600">
              {learnedCount} of {interviewQuestions.length} marked as learned
              {revisionCount > 0 && (
                <>
                  {" "}· <span className="text-amber-700">{revisionCount} to revise</span>
                </>
              )}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPracticeMode((v) => !v)}
              aria-pressed={practiceMode}
              className={`btn ${practiceMode ? "btn-primary" : "btn-secondary"}`}
            >
              {practiceMode ? "Practice mode: ON" : "Practice mode: OFF"}
            </button>
            <button type="button" onClick={resetProgress} className="btn btn-danger">
              Reset progress
            </button>
          </div>
        </div>
        <div
          className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Questions learned"
        >
          <div
            className="h-full rounded-full bg-green-500 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        {practiceMode && (
          <p className="mt-3 text-sm text-brand-800">
            Practice mode is on: answers are hidden until you choose{" "}
            <strong>Reveal sample answer</strong>. Say your answer out loud first!
          </p>
        )}
      </div>

      {/* Search + filters */}
      <div className="flex flex-col gap-3">
        <div>
          <label className="label" htmlFor="interview-search">
            Search questions
          </label>
          <input
            id="interview-search"
            type="search"
            className="input"
            placeholder="Try: closure, strengths, flexbox, STAR…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {tabButton("all", "All", interviewQuestions.length)}
          {interviewCategories.map((c) =>
            tabButton(
              c.id,
              c.label,
              interviewQuestions.filter((q) => q.category === c.id).length
            )
          )}
        </div>
      </div>

      {/* Question list */}
      <p className="text-sm text-slate-500" aria-live="polite">
        Showing {filtered.length} of {interviewQuestions.length} questions.
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="font-semibold text-slate-800">No questions match your search.</p>
          <p className="mt-1 text-sm text-slate-500">
            Try a different keyword, or{" "}
            <button
              type="button"
              className="text-brand-600 hover:underline"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
            >
              clear the filters
            </button>
            .
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {filtered.map((item) => {
            const isOpen = openId === item.id;
            const status = statuses[item.id];
            return (
              <li
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setOpenId(isOpen ? null : item.id);
                      setRevealed(false);
                    }}
                    aria-expanded={isOpen}
                    className="flex-1 text-left"
                  >
                    <span className="font-semibold text-slate-900">
                      {item.question}
                    </span>
                    {status && (
                      <span
                        className={`ml-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                          status === "learned"
                            ? "bg-green-100 text-green-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {status === "learned" ? "Learned" : "Revision"}
                      </span>
                    )}
                  </button>
                  <span className="badge shrink-0">{categoryLabels[item.category]}</span>
                </div>

                {isOpen && (
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    {practiceMode && !revealed ? (
                      <div>
                        <p className="text-sm text-slate-500">
                          Try answering this out loud in your own words first,
                          then reveal the sample answer.
                        </p>
                        <button
                          type="button"
                          onClick={() => setRevealed(true)}
                          className="btn btn-ghost mt-2"
                        >
                          Reveal sample answer
                        </button>
                      </div>
                    ) : (
                      <>
                        <button
                          type="button"
                          onClick={() => {
                            setOpenId(null);
                            setRevealed(false);
                          }}
                          className="btn btn-ghost"
                        >
                          Hide answer
                        </button>
                        <div className="mt-3 space-y-3">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                              Sample answer
                            </p>
                            <p className="mt-1 leading-relaxed text-slate-700">
                              {item.answer}
                            </p>
                          </div>
                          <div className="rounded-xl bg-amber-50 p-3">
                            <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                              Why this answer works
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-amber-900">
                              {item.why}
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => toggleStatus(item.id, "learned")}
                        aria-pressed={status === "learned"}
                        className={`btn ${
                          status === "learned" ? "btn-primary" : "btn-secondary"
                        }`}
                      >
                        {status === "learned" ? "✓ Marked as learned" : "Mark as learned"}
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleStatus(item.id, "revision")}
                        aria-pressed={status === "revision"}
                        className={`btn ${
                          status === "revision" ? "btn-secondary" : "btn-secondary"
                        } ${status === "revision" ? "border-amber-400 bg-amber-50 text-amber-800" : ""}`}
                      >
                        {status === "revision" ? "★ Marked for revision" : "Mark for revision"}
                      </button>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
