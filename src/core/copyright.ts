/**
 * Generates a copyright notice string based on the provided build year.
 *
 * @param buildYear - The year the project was originally built.
 * @returns A formatted copyright string. Returns a single year if it matches the current year, otherwise a year range.
 * @throws {Error} If buildYear is greater than the current year.
 * @example
 * copyright(2020);
 * // "Copyright © 2020–2026"
 */
export function copyright(buildYear: number): string {
  const currentYear = new Date().getFullYear();

  if (buildYear > currentYear) {
    throw new Error(
      `buildYear (${buildYear}) cannot be greater than the current year (${currentYear}).`,
    );
  }

  return buildYear === currentYear
    ? `Copyright © ${buildYear}`
    : `Copyright © ${buildYear}–${currentYear}`;
}
