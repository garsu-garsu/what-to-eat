import { getTossShareLink, share } from "@apps-in-toss/web-framework";
import { isInTossApp } from "../lib/tossEnv";

export async function shareMenu(menuName: string): Promise<boolean> {
  const text = `오늘은 "${menuName}" 어때요? 🍽️ [오늘 뭐먹지]`;
  if (!isInTossApp()) return true; // 브라우저 개발
  try {
    let link = "";
    try {
      link = await getTossShareLink("/");
    } catch {
      /* noop */
    }
    await share({ message: link ? `${text}\n${link}` : text });
    return true;
  } catch {
    return false;
  }
}
