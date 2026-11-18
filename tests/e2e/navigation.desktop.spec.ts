import { expect, test } from "@playwright/test";

const destinations = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "portfolio"],
  ["Contact", "contact"],
] as const;

test("desktop navigation scrolls without changing the URL", async ({ page }) => {
  await page.goto("/?source=e2e");
  const initialUrl = page.url();
  const navigation = page.getByRole("navigation", { name: "Primary navigation" });

  for (const [label, sectionId] of destinations) {
    const button = navigation.getByRole("button", { name: label, exact: true });
    await button.click();

    await expect(page.locator(`#${sectionId}`)).toBeInViewport({ ratio: 0.15 });
    await expect(button).toHaveAttribute("aria-current", "location");
    expect(page.url()).toBe(initialUrl);
  }
});

test("hero controls scroll to projects and contact without changing the URL", async ({
  page,
}) => {
  await page.goto("/?source=hero");
  const initialUrl = page.url();

  await page.getByRole("button", { name: "Explore my work" }).click();
  await expect(page.locator("#portfolio")).toBeInViewport({ ratio: 0.15 });
  expect(page.url()).toBe(initialUrl);

  await page.getByRole("button", { name: "Let's work together" }).click();
  await expect(page.locator("#contact")).toBeInViewport({ ratio: 0.15 });
  expect(page.url()).toBe(initialUrl);
});
