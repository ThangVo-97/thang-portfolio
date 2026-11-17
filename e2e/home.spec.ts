import { expect, test } from "@playwright/test";

test.describe("Portfolio home page", () => {
  test("shows name, title and SEO metadata", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Võ Đình Thắng");
    await expect(page.getByText("Full-stack Developer", { exact: true }).first()).toBeVisible();
    await expect(page).toHaveTitle(/Vo Dinh Thang/);

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute("content", /React/);

    const jsonLd = await page.locator('script[type="application/ld+json"]').textContent();
    expect(JSON.parse(jsonLd ?? "{}")).toMatchObject({ "@type": "Person", name: "Vo Dinh Thang" });
  });

  test("renders every main section", async ({ page }) => {
    await page.goto("/");
    for (const name of ["Building products people use every day", "Tools I work with", "Where I've worked", "Let's work together"]) {
      await expect(page.getByRole("heading", { level: 2, name })).toBeAttached();
    }
    await expect(page.getByRole("heading", { name: "Galaxy Finx" })).toBeAttached();
  });

  test("skip link moves focus to main content", async ({ page, isMobile }) => {
    test.skip(isMobile, "Keyboard navigation is a desktop concern");
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skip = page.getByRole("link", { name: "Skip to content" });
    await expect(skip).toBeFocused();
    await skip.press("Enter");
    await expect(page).toHaveURL(/#main$/);
  });

  test("external links open safely in a new tab", async ({ page }) => {
    await page.goto("/");
    const external = page.locator('a[target="_blank"]');
    const count = await external.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++) {
      await expect(external.nth(i)).toHaveAttribute("rel", /noopener/);
    }
  });

  test("CV download link points to an existing PDF", async ({ page, request }) => {
    await page.goto("/");
    const href = await page.getByRole("link", { name: "Download CV (PDF)" }).getAttribute("href");
    expect(href).toMatch(/\.pdf$/);
    const res = await request.get(href!);
    expect(res.ok()).toBeTruthy();
    expect(res.headers()["content-type"]).toContain("pdf");
  });

  test("page has no horizontal overflow", async ({ page }) => {
    await page.goto("/");
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
    );
    expect(overflow).toBeLessThanOrEqual(0);
  });
});

test.describe("Mobile navigation", () => {
  test("menu opens, navigates and closes", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Menu button is only shown on small screens");
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: "Open menu" });
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
    await menuButton.click();

    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav.getByRole("link", { name: "Experience" })).toBeVisible();
    await nav.getByRole("link", { name: "Experience" }).click();

    await expect(page).toHaveURL(/#experience$/);
    await expect(nav.getByRole("link", { name: "Experience" })).toBeHidden();
  });

  test("Escape closes the menu", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Menu button is only shown on small screens");
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("button", { name: "Close menu" })).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
  });
});
