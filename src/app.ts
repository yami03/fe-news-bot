import * as core from "@actions/core";
import parser from "./parser";
import slack from "./lib/slack";

(async () => {
  const WEBHOOKS = process.env.WEBHOOKS;
  if (null == WEBHOOKS) throw new Error("WEBHOOK Error");

  const webhookList = WEBHOOKS.split(",");
  const parsed = await parser();

  webhookList.map(async (url) => {
    // Slack webhook
    if (url.includes("hooks.slack.com")) {
      await slack({
        data: parsed.news,
        url,
      });
    }
  });

  console.log("✅ OK");
})().catch((e) => {
  console.log("error", e);
  core.setFailed(e);
});
