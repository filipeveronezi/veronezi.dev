"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { PencilIcon, SearchIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const defaultSearch = "How should I structure a Bible study about grace?";

export function SearchPromptEditor() {
  const [submittedSearch, setSubmittedSearch] = useState(defaultSearch);
  const [editableSearch, setEditableSearch] = useState(submittedSearch);
  const [isEditingSearch, setIsEditingSearch] = useState(false);
  const editInputRef = useRef<HTMLTextAreaElement>(null);

  const hasModifiedSearch = editableSearch.trim() !== "" && editableSearch !== submittedSearch;

  useEffect(() => {
    if (submittedSearch) {
      setEditableSearch(submittedSearch);
      setIsEditingSearch(false);
    }
  }, [submittedSearch]);

  useEffect(() => {
    if (isEditingSearch) {
      editInputRef.current?.focus();
    }
  }, [isEditingSearch]);

  const submitSearch = () => {
    if (hasModifiedSearch) {
      setSubmittedSearch(editableSearch.trim());
      setIsEditingSearch(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitSearch();
  };

  return (
    <AnimatePresence>
      {isEditingSearch ? (
        <>
          <motion.div
            className="absolute inset-0 z-50 h-screen w-full bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="absolute inset-0 z-50 m-auto h-max w-full max-w-xl px-4"
            layoutId="editable-search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <form
              className="relative w-full max-w-2xl rounded-xl border border-zinc-200 bg-zinc-50 p-1 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]"
              onSubmit={handleSubmit}
            >
              <div className="rounded-lg border border-zinc-100 bg-white">
                <textarea
                  id="search-input"
                  ref={editInputRef}
                  aria-label="Search prompt"
                  placeholder="Type your search"
                  className="w-full resize-none overflow-hidden rounded-lg px-4 pt-4 pb-32 font-medium wrap-break-word whitespace-pre-wrap text-zinc-600 outline-none placeholder:text-zinc-300"
                  value={editableSearch}
                  onChange={(e) => setEditableSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      submitSearch();
                    }
                    if (e.key === "Escape") {
                      e.preventDefault();
                      setIsEditingSearch(false);
                    }
                  }}
                  onFocus={(e) => {
                    const length = e.target.value.length;
                    e.target.setSelectionRange(length, length);
                  }}
                />
              </div>
              <div className="absolute right-6 bottom-4 flex gap-4">
                <button
                  type="button"
                  className="flex cursor-pointer items-center justify-center gap-2 font-medium text-zinc-500 transition-colors hover:text-zinc-700"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsEditingSearch(false);
                  }}
                >
                  <span className="rounded-sm border border-zinc-200 p-[0.2rem] text-xs">Esc</span>
                  <span className="underline decoration-zinc-300 underline-offset-2">Cancel</span>
                </button>
                <button
                  type="submit"
                  className={`flex h-max cursor-pointer items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 font-medium text-white transition-all active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50`}
                  disabled={!hasModifiedSearch}
                >
                  <SearchIcon className="size-4" />
                  <span className="font-semibold">New search</span>
                </button>
              </div>
            </form>
          </motion.div>
        </>
      ) : (
        <motion.div
          className="flex items-center justify-center"
          layoutId="editable-search"
          key="display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => {
              setIsEditingSearch(true);
              setEditableSearch(submittedSearch);
            }}
            className="group cursor-pointer items-center gap-2 py-10 text-left text-xl font-semibold text-balance text-zinc-800 transition-colors hover:text-zinc-600"
          >
            <span className="underline decoration-zinc-500 decoration-dotted underline-offset-2">
              {submittedSearch}
            </span>
            <PencilIcon
              className="ml-2 inline size-4 text-zinc-400 opacity-80 transition-opacity group-hover:opacity-100"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
