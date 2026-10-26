import type { Stage } from "./stages";

export type Candidate = {
  id: number;
  name: string;
  role: string;
  stage: Stage;
};
