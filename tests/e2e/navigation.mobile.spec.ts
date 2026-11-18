import { expect, test } from "@playwright/test";

test("mobile menu opens, closes, and navigates without changing the URL", async ({
  page,
}) => {
  await page.goto("/?source=mobile");
  const initialUrl = page.url();
  const openMenu = page.getByRole("button", { name: "Open navigation menu" });

  await expect(openMenu).toBeVisible();
  await expect(openMenu).toHaveAttribute("aria-expanded", "false");
  await openMenu.click();

  const closeMenu = page.getByRole("button", { name: "Close navigation menu" });
  const mobileNavigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });
  await expect(closeMenu).toHaveAttribute("aria-expanded", "true");
  await expect(mobileNavigation).toBeVisible();
  await expect(mobileNavigation.getByRole("button")).toHaveCount(5);

  await mobileNavigation.getByRole("button", { name: "Projects", exact: true }).click();
  await expect(mobileNavigation).toBeHidden();
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  await expect(page.locator("#portfolio")).toBeInViewport({ ratio: 0.15 });
  expect(page.url()).toBe(initialUrl);

  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page.getByRole("button", { name: "Close navigation menu" }).click();
  await expect(mobileNavigation).toBeHidden();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});
