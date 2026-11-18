import { expect, test, type Locator } from "@playwright/test";

const projectFixtures = [
  {
    title: "Learning Management System",
    imageAlt: "Learning Management System dashboard preview",
    liveUrl: "https://lms-silk-phi.vercel.app/",
    sourceUrl: "https://github.com/Anyadiegwu/lms",
  },
  {
    title: "Bank AI Assistant",
    imageAlt: "Bank AI Assistant conversational interface",
    liveUrl: "https://bank-ai-react-assistant.vercel.app/",
    sourceUrl: "https://github.com/Anyadiegwu/bank-ai-react-assistant",
  },
  {
    title: "Spotify Clone",
    imageAlt: "Spotify-inspired music player interface",
    liveUrl: "https://a-spotify-clone.vercel.app/",
    sourceUrl: "https://github.com/Anyadiegwu/a-spotify-clone",
  },
  {
    title: "ShopHub",
    imageAlt: "ShopHub e-commerce storefront preview",
    liveUrl: "https://shophub-wine.vercel.app/",
    sourceUrl: "https://github.com/Anyadiegwu/shophub",
  },
  {
    title: "Savora Restaurant",
    imageAlt: "Savora restaurant website preview",
    liveUrl: "https://savora-restaurant-beta.vercel.app/",
    sourceUrl: "https://github.com/Anyadiegwu/savora-restaurant",
  },
  {
    title: "Shopify Dashboard Clone",
    imageAlt: "Shopify merchant dashboard clone preview",
    liveUrl: "https://shopify-challenge-xi.vercel.app/",
    sourceUrl: "https://github.com/Anyadiegwu/shopify-challenge-",
  },
] as const;

async function expectSafeExternalLink(link: Locator, expectedHref: string) {
  await expect(link).toHaveAttribute("href", expectedHref);
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", /\bnoopener\b/);
  await expect(link).toHaveAttribute("rel", /\bnoreferrer\b/);
}

async function expectImageLoaded(image: Locator) {
  await image.scrollIntoViewIfNeeded();
  await expect(image).toBeVisible();
  await expect
    .poll(() =>
      image.evaluate((element) => {
        const renderedImage = element as HTMLImageElement;
        return renderedImage.complete && renderedImage.naturalWidth > 0;
      }),
    )
    .toBe(true);
}

test.describe("portfolio shell and theme", () => {
  test.use({ colorScheme: "dark" });

  test("defaults to light mode even when the operating system prefers dark", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Victor Anyadiegwu | Full-Stack & AI Engineer");
    await expect(page.locator("html")).not.toHaveClass(/\bdark\b/);
    await expect(page.locator("html")).toHaveCSS("color-scheme", "light");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /Victor\s+Anyadiegwu\./,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }),
    ).toBeVisible();
  });

  test("persists an explicit dark-mode choice after reload", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Toggle color theme" }).click();

    await expect(page.locator("html")).toHaveClass(/\bdark\b/);
    await expect(page.locator("html")).toHaveCSS("color-scheme", "dark");
    await expect
      .poll(() => page.evaluate(() => window.localStorage.getItem("theme")))
      .toBe("dark");

    await page.reload();
    await expect(page.locator("html")).toHaveClass(/\bdark\b/);
    await expect(page.locator("html")).toHaveCSS("color-scheme", "dark");
  });
});

test("renders every project image and preserves safe external links", async ({
  page,
}) => {
  await page.goto("/");
  const portfolioSection = page.locator("#portfolio");
  await portfolioSection.scrollIntoViewIfNeeded();

  await expect(portfolioSection.getByRole("article")).toHaveCount(
    projectFixtures.length,
  );

  for (const project of projectFixtures) {
    const card = portfolioSection
      .getByRole("article")
      .filter({ has: page.getByRole("heading", { level: 3, name: project.title }) });

    await expect(card).toHaveCount(1);
    await expect(card.getByRole("heading", { level: 3 })).toHaveText(project.title);
    await expectImageLoaded(card.getByRole("img", { name: project.imageAlt }));
    await expectSafeExternalLink(
      card.getByRole("link", { name: "Live demo" }),
      project.liveUrl,
    );
    await expectSafeExternalLink(
      card.getByRole("link", { name: "Source" }),
      project.sourceUrl,
    );
  }
});

test("serves the résumé, metadata, favicon, contact, and social links", async ({
  page,
  request,
}) => {
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Portfolio of Victor Anyadiegwu, a Full-Stack and AI Engineer building intelligent applications, resilient web systems, and connected IoT experiences.",
  );

  const iconHref = await page.locator('link[rel~="icon"]').getAttribute("href");
  expect(iconHref).toMatch(/^\/favicon\.ico/);
  const iconResponse = await request.get(iconHref!);
  expect(iconResponse.ok()).toBe(true);
  expect(iconResponse.headers()["content-type"]).toContain("image/x-icon");
  expect((await iconResponse.body()).byteLength).toBeGreaterThan(0);

  const resumeLink = page.getByRole("link", { name: "View résumé" });
  await expect(resumeLink).toHaveAttribute(
    "href",
    "/documents/victor-anyadiegwu-resume.pdf",
  );
  await expect(resumeLink).toHaveAttribute("target", "_blank");
  await expect(resumeLink).toHaveAttribute("rel", /\bnoopener\b/);
  await expect(resumeLink).toHaveAttribute("rel", /\bnoreferrer\b/);

  const resumeResponse = await request.get(
    "/documents/victor-anyadiegwu-resume.pdf",
  );
  expect(resumeResponse.ok()).toBe(true);
  expect(resumeResponse.headers()["content-type"]).toContain("application/pdf");
  expect((await resumeResponse.body()).subarray(0, 5).toString()).toBe("%PDF-");

  const contact = page.locator("#contact");
  await expect(contact.getByRole("link", { name: "Send an email" })).toHaveAttribute(
    "href",
    "mailto:victoranyadiegwu610@gmail.com",
  );
  await expect(contact.getByRole("link", { name: "Call Victor" })).toHaveAttribute(
    "href",
    "tel:+2348102680872",
  );

  const socialLinks = [
    ["LinkedIn", "https://www.linkedin.com/in/victor-anyadiegwu-8286a9238"],
    ["GitHub", "https://github.com/Anyadiegwu"],
    ["X (Twitter)", "https://x.com/iam_veek_thor"],
    ["Instagram", "https://www.instagram.com/veek__thor"],
  ] as const;

  for (const [name, href] of socialLinks) {
    await expectSafeExternalLink(
      contact.getByRole("link", { name, exact: true }),
      href,
    );
  }
});
