import { stitch } from "@google/stitch-sdk";
import { writeFileSync, mkdirSync } from "fs";

const PROJECT_ID = "7838732476698723837";

const SCREENS = [
  { name: "password-gate", id: "5d6b0809af5548188da14053bc2a5d9e" },
  { name: "timeline", id: "0d90247458964dfdacafedcee8ee0af6" },
  { name: "wrapped-grid", id: "c92a86b060d246ef8b9176f8b9c927f7" },
  { name: "the-confession", id: "e1222dc3f1f342b4a0d7a9c15349616b" },
];

async function main() {
  const project = stitch.project(PROJECT_ID);

  // Collect download URLs so we can use curl -L
  const downloads = [];

  for (const s of SCREENS) {
    console.log(`\n--- Fetching screen: ${s.name} (${s.id}) ---`);
    const screen = await project.getScreen(s.id);

    const htmlUrl = await screen.getHtml();
    const imageUrl = await screen.getImage();

    console.log(`  HTML URL : ${htmlUrl}`);
    console.log(`  Image URL: ${imageUrl}`);

    downloads.push({ name: s.name, htmlUrl, imageUrl });
  }

  // Write a batch download script (PowerShell)
  const outDir = "stitch-screens";
  mkdirSync(outDir, { recursive: true });

  let script = `# Auto-generated download script\n`;
  script += `# Run: powershell -ExecutionPolicy Bypass -File download_screens.ps1\n\n`;
  script += `New-Item -ItemType Directory -Force -Path "${outDir}" | Out-Null\n\n`;

  for (const d of downloads) {
    script += `Write-Host "Downloading ${d.name}..."\n`;
    script += `curl -L -o "${outDir}/${d.name}.html" "${d.htmlUrl}"\n`;
    script += `curl -L -o "${outDir}/${d.name}.png" "${d.imageUrl}"\n\n`;
  }

  writeFileSync("download_screens.ps1", script);
  console.log("\n✅ Wrote download_screens.ps1 — run it to download all files.");

  // Also write a JSON manifest
  writeFileSync(
    `${outDir}/manifest.json`,
    JSON.stringify(downloads, null, 2)
  );
  console.log(`✅ Wrote ${outDir}/manifest.json`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
