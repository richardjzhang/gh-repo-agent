import dotenv from "dotenv";
import { codingAgent } from "./agent";

dotenv.config({ path: ".env.local" });
codingAgent({
  prompt:
    "Add a contributing section to the readme of this project. Use standard format.",
  repoUrl: "https://github.com/richardjzhang/gh-repo-agent",
})
  .then(console.log)
  .catch(console.error);
