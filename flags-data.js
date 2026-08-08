/* ============================================================
   FLAG DATA
   code   -> ISO 3166-1 alpha-2 (used for image source)
   name   -> display name
   region -> for the region filter
   ratio  -> official width:height ratio
   desc   -> 90–120 char description
   ============================================================
   Image source: flagcdn.com serves the public-domain national
   flag artwork (Wikimedia-derived) as free-to-use PNG/SVG at
   any resolution — swap FLAG_BASE below for Flagpedia/Wikimedia
   if you'd rather self-host the vector originals.
   ============================================================ */

const FLAG_BASE = "https://flagcdn.com/w640"; // preview size; site upsamples via CSS for the "HD preview" look

const FLAGS = [
  { code: "sa", name: "Saudi Arabia", region: "Asia", ratio: "2:3", desc: "Green field bearing the Shahada in white Thuluth script above a white horizontal sabre." },
  { code: "de", name: "Germany", region: "Europe", ratio: "3:5", desc: "Three horizontal bands of black, red and gold, dating back to the 1848 democratic movement.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/this-image-displays-national-flag-germany-2824692355?trackingId=98d946f8-493e-4954-b331-8e9788ad211a&listId=undefined" },
  { code: "pk", name: "Pakistan", region: "Asia", ratio: "2:3", desc: "A dark green field with a white star and crescent, and a white vertical band at the hoist." },
  { code: "us", name: "United States", region: "Americas", ratio: "10:19", desc: "Thirteen alternating red and white stripes with a blue canton of 50 white five-pointed stars.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/classic-united-states-banner-displayed-within-2824663881?trackingId=dbbaaebd-4e1a-4b5a-a5a5-5ba2b65de4e6&listId=undefined" },
  { code: "au", name: "Australia", region: "Oceania", ratio: "1:2", desc: "The Union Jack in the canton beneath the Commonwealth Star, with the Southern Cross on blue." },
  { code: "qa", name: "Qatar", region: "Asia", ratio: "11:28", desc: "Maroon field with a broad white serrated band of nine points running along the hoist." },
  { code: "jp", name: "Japan", region: "Asia", ratio: "2:3", desc: "A crimson disc — the sun — centred on a plain white field, known formally as Nisshoki." },
  { code: "fr", name: "France", region: "Europe", ratio: "2:3", desc: "Three vertical bands of blue, white and red, adopted in its current form after the Revolution." },
  { code: "gb", name: "United Kingdom", region: "Europe", ratio: "1:2", desc: "The Union Jack overlays the crosses of St George, St Andrew and St Patrick in red, white and blue." },
  { code: "br", name: "Brazil", region: "Americas", ratio: "7:10", desc: "A green field with a yellow rhombus enclosing a starry blue globe bearing the motto Ordem e Progresso." },
  { code: "cn", name: "China", region: "Asia", ratio: "2:3", desc: "Red field with one large gold star and four smaller stars arranged in an arc in the canton." },
  { code: "ca", name: "Canada", region: "Americas", ratio: "1:2", desc: "A red maple leaf centred on a white square, flanked by two vertical red bands.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/this-clean-highquality-vector-illustration-canadian-2820361281?trackingId=12fabedf-7a6b-4a8f-a01f-b405ace86c24&listId=undefined" },
  { code: "za", name: "South Africa", region: "Africa", ratio: "2:3", desc: "A horizontal Y of green on black, white and red bands over blue and red, unified at the hoist." },
  { code: "eg", name: "Egypt", region: "Africa", ratio: "2:3", desc: "Red, white and black horizontal bands with the golden Eagle of Saladin centred on the white." },
  { code: "mx", name: "Mexico", region: "Americas", ratio: "4:7", desc: "Green, white and red vertical bands with the national coat of arms — an eagle on a cactus — at centre." },
  { code: "it", name: "Italy", region: "Europe", ratio: "2:3", desc: "Three equal vertical bands of green, white and red, modelled on the French tricolour." },
  { code: "es", name: "Spain", region: "Europe", ratio: "2:3", desc: "Horizontal red-yellow-red bands, the yellow band twice the width, bearing the national coat of arms." },
  { code: "kr", name: "South Korea", region: "Asia", ratio: "2:3", desc: "A white field with a central red-and-blue Taegeuk circle flanked by four black trigrams." },
  { code: "ru", name: "Russia", region: "Europe", ratio: "2:3", desc: "Three equal horizontal bands of white, blue and red, the Pan-Slavic colours." },
  { code: "ae", name: "United Arab Emirates", region: "Asia", ratio: "1:2", desc: "Green, white and black horizontal bands with a thicker red vertical band at the hoist." },
  { code: "tr", name: "Turkey", region: "Asia", ratio: "2:3", desc: "A red field with a white crescent moon and a five-pointed white star just off-centre." },
  { code: "ng", name: "Nigeria", region: "Africa", ratio: "1:2", desc: "Three vertical bands of green, white and green, the green representing agriculture and land." },
  { code: "ke", name: "Kenya", region: "Africa", ratio: "2:3", desc: "Black, red and green bands separated by thin white fringes, overlaid with a Maasai shield and spears." },
  { code: "ar", name: "Argentina", region: "Americas", ratio: "5:8", desc: "Light blue and white horizontal bands with the golden Sun of May centred on the white stripe." },
  { code: "se", name: "Sweden", region: "Europe", ratio: "5:8", desc: "A gold Scandinavian cross offset toward the hoist on a field of blue." },
  { code: "no", name: "Norway", region: "Europe", ratio: "8:11", desc: "A blue Scandinavian cross fimbriated in white, set on a red field." },
  { code: "ch", name: "Switzerland", region: "Europe", ratio: "1:1", desc: "A square red field with a bold white couped cross at its centre, one of only two square flags." },
  { code: "nl", name: "Netherlands", region: "Europe", ratio: "2:3", desc: "Three equal horizontal bands of red, white and blue, among the oldest tricolours still in use." },
  { code: "pt", name: "Portugal", region: "Europe", ratio: "2:3", desc: "A vertical green-and-red field bearing the national coat of arms and armillary sphere at the boundary." },
  { code: "gr", name: "Greece", region: "Europe", ratio: "2:3", desc: "Nine alternating blue and white stripes with a white cross on a blue canton." },
  { code: "th", name: "Thailand", region: "Asia", ratio: "2:3", desc: "Five horizontal bands of red, white, blue, white and red, the blue band twice the width." },
  { code: "vn", name: "Vietnam", region: "Asia", ratio: "2:3", desc: "A large yellow five-pointed star centred on a red field." },
  { code: "id", name: "Indonesia", region: "Asia", ratio: "2:3", desc: "Two equal horizontal bands of red over white, nearly identical to Monaco's flag." },
  { code: "ph", name: "Philippines", region: "Asia", ratio: "1:2", desc: "Blue and red horizontal bands with a white hoist triangle bearing a sun and three stars." },
  { code: "gh", name: "Ghana", region: "Africa", ratio: "2:3", desc: "Red, gold and green bands with a black five-pointed star at the centre of the gold." },
  { code: "ma", name: "Morocco", region: "Africa", ratio: "2:3", desc: "A red field bearing a green five-pointed Seal of Solomon outlined at the centre." },
  { code: "co", name: "Colombia", region: "Americas", ratio: "2:3", desc: "Yellow, blue and red horizontal bands, the yellow band equal to the other two combined." },
  { code: "cl", name: "Chile", region: "Americas", ratio: "2:3", desc: "White over red horizontal bands with a blue canton bearing a single white star." },
  { code: "pe", name: "Peru", region: "Americas", ratio: "2:3", desc: "Vertical red-white-red bands, the state variant charged with the national coat of arms." },
  { code: "nz", name: "New Zealand", region: "Oceania", ratio: "1:2", desc: "The Union Jack in the canton with four red, white-fringed stars of the Southern Cross on blue." },
  { code: "ie", name: "Ireland", region: "Europe", ratio: "1:2", desc: "Vertical bands of green, white and orange symbolising tradition, peace and unity." },
  { code: "pl", name: "Poland", region: "Europe", ratio: "5:8", desc: "Two equal horizontal bands, white above red, among Europe's oldest national colour pairings." },
  { code: "ua", name: "Ukraine", region: "Europe", ratio: "2:3", desc: "Two equal horizontal bands of blue over gold, representing sky above wheat fields." },
  { code: "il", name: "Israel", region: "Asia", ratio: "8:11", desc: "A white field with two horizontal blue stripes and a central blue Star of David." },
  { code: "bd", name: "Bangladesh", region: "Asia", ratio: "3:5", desc: "A dark green field with a red disc set slightly toward the hoist." },
  { code: "sg", name: "Singapore", region: "Asia", ratio: "2:3", desc: "Red over white horizontal bands, the red bearing a white crescent and five stars." },
  { code: "my", name: "Malaysia", region: "Asia", ratio: "1:2", desc: "Fourteen red-and-white stripes with a blue canton bearing a crescent and a fourteen-point star." },
  { code: "et", name: "Ethiopia", region: "Africa", ratio: "1:2", desc: "Green, yellow and red horizontal bands with a blue disc and radiating gold star at the centre." },
  { code: "is", name: "Iceland", region: "Europe", ratio: "18:25", desc: "A red Nordic cross fimbriated in white, set on a field of blue." },
  { code: "in", name: "India", region: "Asia", ratio: "2:3", desc: "Horizontal tricolour of saffron, white and green, charged with a navy 24-spoke Ashoka Chakra." }
];

/* ---------------- rendering ---------------- */

function flagImgUrl(code) {
  return `${FLAG_BASE}/${code}.png`;
}

function downloadUrl(f) {
  // Use a specific Shutterstock asset link when provided, otherwise fall
  // back to a generic search on Shutterstock for that country's flag.
  return f.shutterstockUrl
    ? f.shutterstockUrl
    : `https://www.shutterstock.com/search/${encodeURIComponent(f.name + ' flag')}?utm_source=worldflags&utm_medium=affiliate&utm_campaign=gallery`;
}

function cardTemplate(f) {
  const url = downloadUrl(f);
  return `
    <article class="card" data-name="${f.name.toLowerCase()}" data-region="${f.region}">
      <a class="card-flag" href="${url}" target="_blank" rel="noopener sponsored" aria-label="Download ${f.name} flag on Shutterstock">
        <img src="${flagImgUrl(f.code)}" alt="Flag of ${f.name}" loading="lazy" width="640" height="427" />
        <div class="watermark"><span>WORLDFLAGS.PREVIEW</span></div>
      </a>
      <div class="spec-plate">
        <span class="spec-code">${f.code.toUpperCase()}</span>
        <span class="spec-ratio">RATIO ${f.ratio}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${f.name}</h3>
        <p class="card-desc">${f.desc}</p>
        <a class="btn-download" href="${url}"
           target="_blank" rel="noopener sponsored"
           aria-label="Download ${f.name} flag on Shutterstock">
          ↓ Download ${f.name} Flag
        </a>
      </div>
    </article>
  `;
}

function renderGrid(list) {
  const grid = document.getElementById("flagGrid");
  const count = document.getElementById("resultCount");
  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results">No flags match that search — try a different country or region.</div>`;
  } else {
    grid.innerHTML = list.map(cardTemplate).join("");
  }
  if (count) count.textContent = `${list.length} of ${FLAGS.length} flags`;
}

function applyFilters() {
  const q = (document.getElementById("search")?.value || "").trim().toLowerCase();
  const region = document.getElementById("region")?.value || "all";
  const filtered = FLAGS.filter(f => {
    const matchesQuery = f.name.toLowerCase().includes(q);
    const matchesRegion = region === "all" || f.region === region;
    return matchesQuery && matchesRegion;
  });
  renderGrid(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("flagGrid")) return;
  renderGrid(FLAGS);
  document.getElementById("search")?.addEventListener("input", applyFilters);
  document.getElementById("region")?.addEventListener("change", applyFilters);
});
