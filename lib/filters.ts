import type { Jersey } from "@/lib/data";

export type FilterKey = "type" | "brand" | "team";

export type SelectedFilters = Record<FilterKey, string[]>;

export const FILTER_LABELS: Record<FilterKey, string> = {
  type: "TYPE",
  brand: "BRAND",
  team: "TEAM",
};

export const FILTER_KEYS = Object.keys(FILTER_LABELS) as FilterKey[];

export const EMPTY_FILTERS: SelectedFilters = {
  type: [],
  brand: [],
  team: [],
};

export function getFilterOptions(
  jerseys: Jersey[],
  key: FilterKey
): string[] {
  const values = jerseys
    .map((jersey) => jersey[key])
    .filter((value) => value.trim().length > 0);
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function filterJerseys(
  jerseys: Jersey[],
  selected: SelectedFilters
): Jersey[] {
  return jerseys.filter((jersey) =>
    FILTER_KEYS.every((key) => {
      const active = selected[key];
      if (active.length === 0) return true;
      return active.includes(jersey[key]);
    })
  );
}

/** Options for a filter based on jerseys matching all *other* active filters. */
export function getAvailableFilterOptions(
  jerseys: Jersey[],
  selected: SelectedFilters,
  key: FilterKey
): string[] {
  const otherFilters: SelectedFilters = {
    ...selected,
    [key]: [],
  };
  return getFilterOptions(filterJerseys(jerseys, otherFilters), key);
}

export function getAvailableOptionsMap(
  jerseys: Jersey[],
  selected: SelectedFilters
): Record<FilterKey, string[]> {
  return {
    type: getAvailableFilterOptions(jerseys, selected, "type"),
    brand: getAvailableFilterOptions(jerseys, selected, "brand"),
    team: getAvailableFilterOptions(jerseys, selected, "team"),
  };
}

/** Drop selected values that are no longer available given the other filters. */
export function pruneSelectedFilters(
  jerseys: Jersey[],
  selected: SelectedFilters
): SelectedFilters {
  const pruned = { ...selected };

  for (const key of FILTER_KEYS) {
    const available = new Set(
      getAvailableFilterOptions(jerseys, selected, key)
    );
    pruned[key] = selected[key].filter((value) => available.has(value));
  }

  return pruned;
}

export function filtersEqual(a: SelectedFilters, b: SelectedFilters): boolean {
  return FILTER_KEYS.every(
    (key) =>
      a[key].length === b[key].length &&
      a[key].every((value, index) => value === b[key][index])
  );
}

export function getSelectedChips(
  selected: SelectedFilters
): { key: FilterKey; value: string }[] {
  return FILTER_KEYS.flatMap((key) =>
    selected[key].map((value) => ({ key, value }))
  );
}
