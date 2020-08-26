import ReactHtmlParser from "react-html-parser";
// Injection protection package
// by type of XSS attacks
import DOMPurify from "dompurify";

export const getReactNode = (str: string) => {
  const clean = DOMPurify.sanitize(str);
  return ReactHtmlParser(clean);
};
