// The Best Meal You Ever Had — one sentence, at most 200 characters.
// One midnight memory, served plain: the pot, the floor, the sleeping house.
const ENTRY =
  "At midnight, cross-legged on my grandmother's kitchen floor, I ate rendang straight from the pot, coconut oil glistening on my fingers while the whole house slept.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, ENTRY);
