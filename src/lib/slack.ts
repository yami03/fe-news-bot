import { Contents } from "../types";
import fetch from "node-fetch";

interface slackArgs {
  data: Contents[];
  url: string;
}

export default async ({ data, url }: slackArgs) => {
  const today = new Date();
  const year = today.getUTCFullYear();
  const date = today.getDate();
  let month = String(today.getUTCMonth() + 1);
  month = month.length > 1 ? month : `0${month}`;

  const message: any = {
    attachments: [],
  };

  if (!data[data.length - 1].name.includes(`${year}-${10}`) || date > 7) {
    return;
  }

  message.attachments.push({
    pretext: `${month}월의 FE News 👩🏻‍💻`,

    fields: [
      {
        type: "mrkdwn",
        title: "",
        value: data[data.length - 1].html_url,
      },
    ],
    footer: "fe-news-bot",
  });

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
};
