"use client";

import { useEffect, useMemo, useState } from "react";

type Status = "Applied" | "Interview" | "Offer" | "Rejected" | "On hold";

type Application = {
  id: string;
  company: string;
  role: string;
  url: string;
  dateApplied: string; // yyyy-mm-dd
  status: Status;
  notes: string;
  followUpDate: string; // yyyy-mm-dd or ""
};

const STORAGE_KEY = "fjt.tracker.v1";

const STATUSES: Status[] = ["Applied", "Interview", "Offer", "Rejected", "On hold"];

const statusStyles: Record<Status, string> = {
  Applied: "bg-blue-100 text-blue-800",
  Interview: "bg-amber-100 text-amber-800",
  Offer: "bg-green-100 text-green-800",
  Rejected: "bg-red-100 text-red-800",
  "On hold": "bg-slate-200 text-slate-700",
};

const uid = () => Math.random().toString(36).slice(2, 10);

const todayISO = () => {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
};

const blankForm = (): Application => ({
  id: uid(),
  company: "",
  role: "",
  url: "",
  dateApplied: todayISO(),
  status: "Applied",
  notes: "",
  followUpDate: "",
});

type SortKey = "date-desc" | "date-asc" | "status";

function csvEscape(value: string): string {
  return `"${value.replace(/"/g, '""')}"`;
}

function toCsv(rows: Application[]): string {
  const header = [
    "Company",
    "Role",
    "Job URL",
    "Date Applied",
    "Status",
    "Follow-up Date",
    "Notes",
  ];
  const lines = rows.map((r) =>
    [
      r.company,
      r.role,
      r.url,
      r.dateApplied,
      r.status,
      r.followUpDate,
      r.notes,
    ]
      .map(csvEscape)
      .join(",")
  );
  return [header.join(","), ...lines].join("\n");
}

export default function JobTracker() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [form, setForm] = useState<Application>(() => blankForm());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | Status>("all");
  const [sortBy, setSortBy] = useState<SortKey>("date-desc");
  const [errors, setErrors] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  /* Load from localStorage on mount (client only). */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setApplications(JSON.parse(raw) as Application[]);
    } catch {
      // ignore corrupted data
    }
    setHydrated(true);
  }, []);

  /* Persist on change. */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
    } catch {
      // storage full or blocked — tracker keeps working in memory
    }
  }, [applications, hydrated]);

  const validate = (entry: Application): string[] => {
    const errs: string[] = [];
    if (!entry.company.trim()) errs.push("Company name is required.");
    if (!entry.role.trim()) errs.push("Role is required.");
    if (!entry.dateApplied) errs.push("Date applied is required.");
    if (
      entry.url.trim() &&
      !/^https?:\/\/|^www\./i.test(entry.url.trim())
    ) {
      // Soft check: warn but don't block — users paste partial links too.
      errs.push("The job URL should start with http://, https://, or www.");
    }
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate(form);
    setErrors(errs);
    if (errs.length > 0) return;

    if (editingId) {
      setApplications((prev) =>
        prev.map((a) => (a.id === editingId ? { ...form, id: editingId } : a))
      );
      setEditingId(null);
    } else {
      setApplications((prev) => [{ ...form, id: uid() }, ...prev]);
    }
    setForm(blankForm());
  };

  const handleEdit = (entry: Application) => {
    setForm({ ...entry });
    setEditingId(entry.id);
    setErrors([]);
  };

  const handleDelete = (id: string) => {
    setApplications((prev) => prev.filter((a) => a.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm(blankForm());
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setForm(blankForm());
    setErrors([]);
  };

  const handleExportCsv = () => {
    if (applications.length === 0) return;
    const csv = toCsv(applications);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "firstjob-toolkit-applications.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleClearAll = () => {
    setApplications([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const counts = useMemo(() => {
    const map: Record<Status, number> = {
      Applied: 0,
      Interview: 0,
      Offer: 0,
      Rejected: 0,
      "On hold": 0,
    };
    for (const a of applications) map[a.status] += 1;
    return map;
  }, [applications]);

  const upcomingFollowUps = useMemo(() => {
    const today = todayISO();
    const inSevenDays = new Date();
    inSevenDays.setDate(inSevenDays.getDate() + 7);
    const limit = `${inSevenDays.getFullYear()}-${String(
      inSevenDays.getMonth() + 1
    ).padStart(2, "0")}-${String(inSevenDays.getDate()).padStart(2, "0")}`;
    return applications
      .filter((a) => a.followUpDate && a.followUpDate >= today && a.followUpDate <= limit)
      .sort((a, b) => a.followUpDate.localeCompare(b.followUpDate));
  }, [applications]);

  const visible = useMemo(() => {
    const q = search.trim().toLowerCase();
    const filtered = applications.filter((a) => {
      const matchesStatus = statusFilter === "all" || a.status === statusFilter;
      const matchesQuery =
        q.length === 0 ||
        a.company.toLowerCase().includes(q) ||
        a.role.toLowerCase().includes(q) ||
        a.notes.toLowerCase().includes(q);
      return matchesStatus && matchesQuery;
    });
    const sorted = [...filtered];
    if (sortBy === "date-desc") {
      sorted.sort((a, b) => b.dateApplied.localeCompare(a.dateApplied));
    } else if (sortBy === "date-asc") {
      sorted.sort((a, b) => a.dateApplied.localeCompare(b.dateApplied));
    } else {
      sorted.sort((a, b) => {
        const byStatus = STATUSES.indexOf(a.status) - STATUSES.indexOf(b.status);
        if (byStatus !== 0) return byStatus;
        return b.dateApplied.localeCompare(a.dateApplied);
      });
    }
    return sorted;
  }, [applications, search, statusFilter, sortBy]);

  const today = todayISO();

  return (
    <div className="space-y-6">
      {/* Privacy note */}
      <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-4 text-sm leading-relaxed text-slate-700">
        <strong className="text-slate-900">Where is my data stored?</strong>{" "}
        Your applications are saved in this browser&apos;s local storage only —
        nothing is uploaded to a server. That means the data may be lost if you
        clear your browser&apos;s site data or switch devices, and it is{" "}
        <em>not</em> a secure database. Use <strong>Export CSV</strong> regularly
        to keep your own backup.
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {STATUSES.map((status) => (
          <div
            key={status}
            className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
          >
            <p className="text-2xl font-bold text-slate-900">{counts[status]}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {status}
            </p>
          </div>
        ))}
      </div>

      {/* Upcoming follow-ups */}
      {upcomingFollowUps.length > 0 && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-bold text-amber-900">
            Follow-ups due in the next 7 days ({upcomingFollowUps.length})
          </h2>
          <ul className="mt-3 space-y-2">
            {upcomingFollowUps.map((a) => (
              <li key={a.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-slate-900">
                  {a.followUpDate}
                </span>
                <span className="text-slate-700">
                  {a.company} — {a.role}
                </span>
                <span className={`badge ${statusStyles[a.status]}`}>{a.status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add / edit form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">
          {editingId ? "Edit application" : "Add an application"}
        </h2>

        {errors.length > 0 && (
          <div
            role="alert"
            className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4"
          >
            <ul className="list-disc pl-5 text-sm text-red-700">
              {errors.map((err) => (
                <li key={err}>{err}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="jt-company">Company *</label>
            <input
              id="jt-company"
              className="input"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="TechStart Solutions"
            />
          </div>
          <div>
            <label className="label" htmlFor="jt-role">Role *</label>
            <input
              id="jt-role"
              className="input"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              placeholder="Frontend Developer Intern"
            />
          </div>
          <div>
            <label className="label" htmlFor="jt-url">Job URL</label>
            <input
              id="jt-url"
              className="input"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              placeholder="https://company.com/careers/123"
            />
          </div>
          <div>
            <label className="label" htmlFor="jt-date">Date applied *</label>
            <input
              id="jt-date"
              type="date"
              className="input"
              value={form.dateApplied}
              onChange={(e) => setForm({ ...form, dateApplied: e.target.value })}
            />
          </div>
          <div>
            <label className="label" htmlFor="jt-status">Status</label>
            <select
              id="jt-status"
              className="select"
              value={form.status}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value as Status })
              }
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="label" htmlFor="jt-followup">Follow-up date</label>
            <input
              id="jt-followup"
              type="date"
              className="input"
              value={form.followUpDate}
              onChange={(e) => setForm({ ...form, followUpDate: e.target.value })}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="jt-notes">Notes</label>
            <textarea
              id="jt-notes"
              className="textarea"
              style={{ minHeight: "5rem" }}
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Referred by a friend; HR round scheduled on 5 Nov; sent thank-you email…"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" onClick={handleSubmit} className="btn btn-primary">
            {editingId ? "Save changes" : "Add application"}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancelEdit} className="btn btn-secondary">
              Cancel edit
            </button>
          )}
        </div>
      </div>

      {/* List */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Your applications ({applications.length})
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div>
              <label className="label" htmlFor="jt-search">Search</label>
              <input
                id="jt-search"
                type="search"
                className="input"
                placeholder="Company, role, or notes…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <label className="label" htmlFor="jt-filter">Status</label>
              <select
                id="jt-filter"
                className="select"
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value as "all" | Status)
                }
              >
                <option value="all">All statuses</option>
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label" htmlFor="jt-sort">Sort by</label>
              <select
                id="jt-sort"
                className="select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
              >
                <option value="date-desc">Newest first</option>
                <option value="date-asc">Oldest first</option>
                <option value="status">By status</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleExportCsv}
            disabled={applications.length === 0}
            className="btn btn-secondary"
          >
            Export CSV
          </button>
          <button
            type="button"
            onClick={handleClearAll}
            disabled={applications.length === 0}
            className="btn btn-danger"
          >
            Clear all
          </button>
        </div>

        {visible.length === 0 ? (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 p-10 text-center">
            <p className="font-semibold text-slate-800">
              {applications.length === 0
                ? "No applications yet."
                : "No applications match your filters."}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {applications.length === 0
                ? "Add your first application above — every application you track is one less you forget to follow up on."
                : "Try clearing the search or changing the status filter."}
            </p>
          </div>
        ) : (
          <ul className="mt-6 space-y-3">
            {visible.map((a) => {
              const overdue =
                a.followUpDate && a.followUpDate < today && a.status === "Applied";
              return (
                <li
                  key={a.id}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">{a.role}</p>
                      <p className="text-sm text-slate-600">{a.company}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                        <span>Applied: {a.dateApplied}</span>
                        {a.followUpDate && (
                          <span
                            className={
                              overdue ? "font-semibold text-red-600" : ""
                            }
                          >
                            Follow-up: {a.followUpDate}
                            {overdue ? " (overdue)" : ""}
                          </span>
                        )}
                        {a.url.trim() && (
                          <a
                            href={
                              /^https?:\/\//i.test(a.url.trim())
                                ? a.url.trim()
                                : `https://${a.url.trim()}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-600 hover:underline"
                          >
                            Job posting ↗
                          </a>
                        )}
                      </div>
                      {a.notes.trim() && (
                        <p className="mt-2 text-sm text-slate-600">{a.notes}</p>
                      )}
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <span className={`badge ${statusStyles[a.status]}`}>
                        {a.status}
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(a)}
                          className="text-sm font-medium text-brand-600 hover:underline"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(a.id)}
                          className="text-sm font-medium text-red-600 hover:underline"
                          aria-label={`Delete application to ${a.company}`}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
