import { Octokit } from "@octokit/core";
import { OctokitResponse } from "@octokit/types";
import { Contents } from "../types";

const octokit = new Octokit({
  baseUrl: "https://api.github.com",
});

export const parse = async () => {
  const newList: OctokitResponse<Contents> = await octokit.request(
    "GET /repos/naver/fe-news/contents/issues?ref=master"
  );

  const result: { data: Contents[] } = JSON.parse(JSON.stringify(newList));

  return result.data;
};
