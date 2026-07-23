import type { Jersey } from "@/lib/data";

export type FilterKey = "type" | "brand" | "team" | "league";

export type SelectedFilters = Record<FilterKey, string[]>;

export const FILTER_LABELS: Record<FilterKey, string> = {
  type: "TYPE",
  brand: "BRAND",
  team: "TEAM",
  league: "LEAGUES",
};

export const FILTER_KEYS = Object.keys(FILTER_LABELS) as FilterKey[];

export const EMPTY_FILTERS: SelectedFilters = {
  type: [],
  brand: [],
  team: [],
  league: [],
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
  selected: SelectedFilters,
  keys: FilterKey[] = FILTER_KEYS
): Jersey[] {
  return jerseys.filter((jersey) =>
    keys.every((key) => {
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
  key: FilterKey,
  keys: FilterKey[] = FILTER_KEYS
): string[] {
  const otherFilters: SelectedFilters = {
    ...selected,
    [key]: [],
  };
  return getFilterOptions(filterJerseys(jerseys, otherFilters, keys), key);
}

export function getAvailableOptionsMap(
  jerseys: Jersey[],
  selected: SelectedFilters,
  keys: FilterKey[] = FILTER_KEYS
): Record<FilterKey, string[]> {
  const map = { ...EMPTY_FILTERS } as unknown as Record<FilterKey, string[]>;
  for (const key of keys) {
    map[key] = getAvailableFilterOptions(jerseys, selected, key, keys);
  }
  return map;
}

/** Drop selected values that are no longer available given the other filters. */
export function pruneSelectedFilters(
  jerseys: Jersey[],
  selected: SelectedFilters,
  keys: FilterKey[] = FILTER_KEYS
): SelectedFilters {
  const pruned: SelectedFilters = { ...EMPTY_FILTERS };

  for (const key of FILTER_KEYS) {
    if (!keys.includes(key)) {
      pruned[key] = [];
      continue;
    }
    const available = new Set(
      getAvailableFilterOptions(jerseys, selected, key, keys)
    );
    pruned[key] = selected[key].filter((value) => available.has(value));
  }

  return pruned;
}

export function filtersEqual(
  a: SelectedFilters,
  b: SelectedFilters,
  keys: FilterKey[] = FILTER_KEYS
): boolean {
  return keys.every(
    (key) =>
      a[key].length === b[key].length &&
      a[key].every((value, index) => value === b[key][index])
  );
}

export function getSelectedChips(
  selected: SelectedFilters,
  keys: FilterKey[] = FILTER_KEYS
): { key: FilterKey; value: string }[] {
  return keys.flatMap((key) =>
    selected[key].map((value) => ({ key, value }))
  );
}
