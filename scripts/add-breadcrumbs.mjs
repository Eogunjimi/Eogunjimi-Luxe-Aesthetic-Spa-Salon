import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const pages = [
  { file: "src/pages/About.tsx", pagePath: "/about", crumbs: [{name:"Home",path:"/"},{name:"About",path:"/about"}] },
  { file: "src/pages/Contact.tsx", pagePath: "/contact", crumbs: [{name:"Home",path:"/"},{name:"Contact",path:"/contact"}] },
  { file: "src/pages/Blog.tsx", pagePath: "/blog", crumbs: [{name:"Home",path:"/"},{name:"Blog",path:"/blog"}] },
  { file: "src/pages/BeforeAfter.tsx", pagePath: "/before-after", crumbs: [{name:"Home",path:"/"},{name:"Before & After",path:"/before-after"}] },
  { file: "src/pages/Treatments.tsx", pagePath: "/treatments", crumbs: [{name:"Home",path:"/"},{name:"Treatments",path:"/treatments"}] },
];

for (const page of pages) {
  const fp = path.join(ROOT, page.file);
  let s = fs.readFileSync(fp, "utf8");
  if (s.includes("breadcrumbSchema")) { console.log("skip", page.file); continue; }

  const importLine = 'import { breadcrumbSchema } from "../utils/schema";';
  const lastImportIdx = s.lastIndexOf("import ");
  const lastImportEnd = s.indexOf(";\n", lastImportIdx);
  s = s.slice(0, lastImportEnd + 2) + importLine + "\n" + s.slice(lastImportEnd + 2);

  s = s.replace(
    /useSeo\(\s*\n\s*"([^"]+)",\s*\n\s*"([^"]+)"\s*\n\s*\);/,
    (_m, title, desc) =>
      `useSeo({\n    title: "${title}",\n    description: "${desc}",\n    path: "${page.pagePath}",\n    schema: [breadcrumbSchema(${JSON.stringify(page.crumbs)})],\n  });`
  );

  fs.writeFileSync(fp, s);
  console.log("updated", page.file);
}
