import { LessonContent } from "../../types/lesson";
import { ImmersionPager } from "./ImmersionPager";

interface Props {
  content: LessonContent;
  onContinue: () => void;
}

export function ImmersionPhase({ content, onContinue }: Props) {
  return <ImmersionPager content={content} onContinue={onContinue} />;
}
