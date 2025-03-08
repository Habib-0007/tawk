import { toPng } from "html-to-image";

export const downloadAsImage = async (
  element: HTMLElement,
  fileName: string = "message"
): Promise<void> => {
  try {
    const dataUrl = await toPng(element, { quality: 0.95 });

    const link = document.createElement("a");
    link.download = `${fileName}.png`;
    link.href = dataUrl;
    link.click();
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};
