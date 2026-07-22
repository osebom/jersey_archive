"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Jersey } from "@/lib/data";
import JerseyGrid from "@/components/JerseyGrid";
import {
  EMPTY_FILTERS,
  FILTER_KEYS,
  FILTER_LABELS,
  filterJerseys,
  filtersEqual,
  getAvailableOptionsMap,
  getSelectedChips,
  pruneSelectedFilters,
  type FilterKey,
  type SelectedFilters,
} from "@/lib/filters";

type CategoryBrowseProps = {
  title: string;
  jerseys: Jersey[];
};

function FilterDropdown({
  label,
  filterKey,
  options,
  selected,
  count,
  open,
  onToggleOpen,
  onClose,
  onToggleValue,
}: {
  label: string;
  filterKey: FilterKey;
  options: string[];
  selected: string[];
  count: number;
  open: boolean;
  onToggleOpen: () => void;
  onClose: () => void;
  onToggleValue: (value: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open, onClose]);

  return (
    <div ref={ref} className={`relative ${open ? "z-50" : "z-0"}`}>
      <button
        type="button"
        onClick={onToggleOpen}
        className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] sm:text-xs"
        aria-expanded={open}
      >
        <span>
          {label}
          {count > 0 ? ` (${count})` : ""}
        </span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="square"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-64 w-56 overflow-y-auto border border-black bg-white py-2 shadow-sm">
          {options.length === 0 ? (
            <p className="px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[#b3b3b3]">
              NO OPTIONS
            </p>
          ) : (
            options.map((option) => {
              const checked = selected.includes(option);
              return (
                <label
                  key={`${filterKey}-${option}`}
                  className="flex cursor-pointer items-center gap-2 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] hover:bg-[#f5f5f5] sm:text-xs"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onToggleValue(option)}
                    className="h-3.5 w-3.5 accent-black"
                  />
                  <span>{option}</span>
                </label>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}

function SelectedChips({
  chips,
  onRemove,
}: {
  chips: { key: FilterKey; value: string }[];
  onRemove: (key: FilterKey, value: string) => void;
}) {
  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {chips.map(({ key, value }) => (
        <button
          key={`${key}-${value}`}
          type="button"
          onClick={() => onRemove(key, value)}
          className="flex items-center gap-2 border border-black px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] transition-colors hover:bg-black hover:text-white sm:text-xs"
        >
          <span>{value}</span>
          <span aria-hidden="true">×</span>
        </button>
      ))}
    </div>
  );
}

export default function CategoryBrowse({ title, jerseys }: CategoryBrowseProps) {
  const [selected, setSelected] = useState<SelectedFilters>(EMPTY_FILTERS);
  const [openFilter, setOpenFilter] = useState<FilterKey | null>(null);

  const options = useMemo(
    () => getAvailableOptionsMap(jerseys, selected),
    [jerseys, selected]
  );

  useEffect(() => {
    const pruned = pruneSelectedFilters(jerseys, selected);
    if (!filtersEqual(pruned, selected)) {
      setSelected(pruned);
    }
  }, [jerseys, selected]);

  const filtered = useMemo(
    () => filterJerseys(jerseys, selected),
    [jerseys, selected]
  );

  const chips = useMemo(() => getSelectedChips(selected), [selected]);

  const toggleValue = (key: FilterKey, value: string) => {
    setSelected((prev) => {
      const exists = prev[key].includes(value);
      const next: SelectedFilters = {
        ...prev,
        [key]: exists
          ? prev[key].filter((item) => item !== value)
          : [...prev[key], value],
      };
      return pruneSelectedFilters(jerseys, next);
    });
  };

  const removeValue = (key: FilterKey, value: string) => {
    setSelected((prev) => {
      const next: SelectedFilters = {
        ...prev,
        [key]: prev[key].filter((item) => item !== value),
      };
      return pruneSelectedFilters(jerseys, next);
    });
  };

  const filterKeys = FILTER_KEYS;

  const filters = (
    <div className="space-y-4 lg:space-y-8">
      <p className="text-[10px] uppercase tracking-[0.15em] sm:text-xs">
        {title}
      </p>

      <SelectedChips chips={chips} onRemove={removeValue} />

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 lg:flex-col lg:items-start lg:gap-y-5">
        {filterKeys.map((key) => (
          <FilterDropdown
            key={key}
            label={FILTER_LABELS[key]}
            filterKey={key}
            options={options[key]}
            selected={selected[key]}
            count={selected[key].length}
            open={openFilter === key}
            onToggleOpen={() =>
              setOpenFilter((current) => (current === key ? null : key))
            }
            onClose={() => setOpenFilter(null)}
            onToggleValue={(value) => toggleValue(key, value)}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-[90rem] px-4 pb-16 pt-2 sm:px-6 lg:pl-3 lg:pr-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-6">
        <aside className="relative z-20 w-full shrink-0 lg:sticky lg:top-20 lg:w-40 lg:self-start">
          {filters}
        </aside>

        <div className="min-w-0 flex-1">
          <JerseyGrid jerseys={filtered} showNames />
          {filtered.length === 0 && (
            <p className="py-16 text-center text-[10px] uppercase tracking-[0.15em] text-[#b3b3b3] sm:text-xs">
              NO JERSEYS MATCH
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
