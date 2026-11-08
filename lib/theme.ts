export const THEME_STORAGE_KEY = "kvantics-theme";
export type Theme = "light" | "dark";

/**
 * Runs synchronously in <head>, before the first paint, so the page never
 * flashes the wrong theme. Light is the site's default experience, so a
 * first-time visitor always gets light regardless of OS preference; once
 * someone picks a theme with the toggle, that stored choice always wins.
 * Sets both the data attribute (for our CSS) and color-scheme (for native
 * form controls and scrollbars).
 */
export const themeBootScript = `
(function () {
  try {
    var key = ${JSON.stringify(THEME_STORAGE_KEY)};
    var stored = localStorage.getItem(key);
    var theme = stored === "light" || stored === "dark" ? stored : "light";
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
  } catch (e) {}
})();
`;
