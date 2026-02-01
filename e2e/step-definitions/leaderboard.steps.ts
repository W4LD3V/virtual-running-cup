import { Given, Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";

Given("I open the home page", async () => {
  await browser.url("/");
});

Then("I see {string}", async (text: string) => {
  const title = await $("[data-testid='leaderboard-title']");
  await expect(title).toBeDisplayed();
  await expect(title).toHaveText(text);
});

Then("I see places {string}, {string}, {string}", async (one: string, two: string, three: string) => {
  const podium1 = await $("[data-testid='podium-1']");
  const podium2 = await $("[data-testid='podium-2']");
  const podium3 = await $("[data-testid='podium-3']");

  await expect(podium1).toBeDisplayed();
  await expect(podium2).toBeDisplayed();
  await expect(podium3).toBeDisplayed();

  await expect(podium1).toHaveText(new RegExp(`Place ${one}`, "i"));
  await expect(podium2).toHaveText(new RegExp(`Place ${two}`, "i"));
  await expect(podium3).toHaveText(new RegExp(`Place ${three}`, "i"));
});

Then("I see athlete name {string}", async (name: string) => {
  await expect($("body")).toHaveText(new RegExp(name, "i"));
});
