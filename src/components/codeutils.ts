declare function prettyPrintOne(code: string, lang: string): string;
declare var PR: any;
export const pp = PR.prettyPrintOne;

export function escapeHtml(str: string) {
  return str.replace(/\</g, '&#60').replace(/\>/g, '&#62')
    .replace(/\&BOLD/g, '<b>').replace(/\&\!BOLD/g, '</b>');
}