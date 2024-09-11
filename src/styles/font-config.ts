export interface fontConfigProps {
  fontFamily: string;
  fontStyle: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
  color: string;
}

export function fontConfig(
  fontFamily: string,
  fontStyle: string,
  fontWeight: number,
  fontSize: string,
  lineHeight: string,
  color: string
): fontConfigProps {
  return { fontFamily, fontStyle, fontWeight, fontSize, lineHeight, color };
}
