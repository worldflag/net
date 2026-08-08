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
  { code: "sa", name: "Saudi Arabia", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Kingdom of Saudi Arabia flag. Saudi Arabia national flag. Vector Illustration." },
  { code: "de", name: "Germany", region: "Europe", ratio: "3:5", size: "13000 X 8014 Pixels", desc: "Federal Republic of Germany flag. Germany national flag. Vector Illustration.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/this-image-displays-national-flag-germany-2824692355?trackingId=98d946f8-493e-4954-b331-8e9788ad211a&listId=undefined" },
  { code: "pk", name: "Pakistan", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Islamic Republic of Pakistan flag. Pakistan national flag. Vector Illustration." },
  { code: "us", name: "United States", region: "Americas", ratio: "10:19", size: "13000 X 8014 Pixels", desc: "United States of America flag. United States national flag. Vector Illustration.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/classic-united-states-banner-displayed-within-2824663881?trackingId=dbbaaebd-4e1a-4b5a-a5a5-5ba2b65de4e6&listId=undefined" },
  { code: "au", name: "Australia", region: "Oceania", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Commonwealth of Australia flag. Australia national flag. Vector Illustration.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/australian-flag-iconic-national-symbol-representing-2825064021?trackingId=9af15a5d-e46d-4810-af79-9e9018a03cd0&listId=undefined" },
  { code: "qa", name: "Qatar", region: "Asia", ratio: "11:28", size: "13000 X 8014 Pixels", desc: "State of Qatar flag. Qatar national flag. Vector Illustration.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/qatar-flag-features-distinctive-deep-maroon-2825082015?trackingId=27f7cc1c-f837-4088-a34b-895223382dca&listId=undefined" },
  { code: "jp", name: "Japan", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Japan flag. Japan national flag. Vector Illustration." },
  { code: "fr", name: "France", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "French Republic flag. France national flag. Vector Illustration." },
  { code: "gb", name: "United Kingdom", region: "Europe", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "United Kingdom of Great Britain and Northern Ireland flag. United Kingdom national flag. Vector Illustration.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/united-kingdom-flag-commonly-known-union-2825062471?trackingId=8c241af1-bd77-4318-b460-554cec9b08be&listId=undefined" },
  { code: "br", name: "Brazil", region: "Americas", ratio: "7:10", size: "13000 X 8014 Pixels", desc: "Federative Republic of Brazil flag. Brazil national flag. Vector Illustration." },
  { code: "cn", name: "China", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "People's Republic of China flag. China national flag. Vector Illustration." },
  { code: "ca", name: "Canada", region: "Americas", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Canada flag. Canada national flag. Vector Illustration.", shutterstockUrl: "https://www.shutterstock.com/image-illustration/this-clean-highquality-vector-illustration-canadian-2820361281?trackingId=12fabedf-7a6b-4a8f-a01f-b405ace86c24&listId=undefined" },
  { code: "za", name: "South Africa", region: "Africa", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of South Africa flag. South Africa national flag. Vector Illustration." },
  { code: "eg", name: "Egypt", region: "Africa", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Arab Republic of Egypt flag. Egypt national flag. Vector Illustration." },
  { code: "mx", name: "Mexico", region: "Americas", ratio: "4:7", size: "13000 X 8014 Pixels", desc: "United Mexican States flag. Mexico national flag. Vector Illustration." },
  { code: "it", name: "Italy", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Italian Republic flag. Italy national flag. Vector Illustration." },
  { code: "es", name: "Spain", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Kingdom of Spain flag. Spain national flag. Vector Illustration." },
  { code: "kr", name: "South Korea", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Korea flag. South Korea national flag. Vector Illustration." },
  { code: "ru", name: "Russia", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Russian Federation flag. Russia national flag. Vector Illustration." },
  { code: "ae", name: "United Arab Emirates", region: "Asia", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "United Arab Emirates flag. United Arab Emirates national flag. Vector Illustration." },
  { code: "tr", name: "Turkey", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Turkiye flag. Turkey national flag. Vector Illustration." },
  { code: "ng", name: "Nigeria", region: "Africa", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Federal Republic of Nigeria flag. Nigeria national flag. Vector Illustration." },
  { code: "ke", name: "Kenya", region: "Africa", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Kenya flag. Kenya national flag. Vector Illustration." },
  { code: "ar", name: "Argentina", region: "Americas", ratio: "5:8", size: "13000 X 8014 Pixels", desc: "Argentine Republic flag. Argentina national flag. Vector Illustration." },
  { code: "se", name: "Sweden", region: "Europe", ratio: "5:8", size: "13000 X 8014 Pixels", desc: "Kingdom of Sweden flag. Sweden national flag. Vector Illustration." },
  { code: "no", name: "Norway", region: "Europe", ratio: "8:11", size: "13000 X 8014 Pixels", desc: "Kingdom of Norway flag. Norway national flag. Vector Illustration." },
  { code: "ch", name: "Switzerland", region: "Europe", ratio: "1:1", size: "13000 X 8014 Pixels", desc: "Swiss Confederation flag. Switzerland national flag. Vector Illustration." },
  { code: "nl", name: "Netherlands", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Kingdom of the Netherlands flag. Netherlands national flag. Vector Illustration." },
  { code: "pt", name: "Portugal", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Portuguese Republic flag. Portugal national flag. Vector Illustration." },
  { code: "gr", name: "Greece", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Hellenic Republic flag. Greece national flag. Vector Illustration." },
  { code: "th", name: "Thailand", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Kingdom of Thailand flag. Thailand national flag. Vector Illustration." },
  { code: "vn", name: "Vietnam", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Socialist Republic of Vietnam flag. Vietnam national flag. Vector Illustration." },
  { code: "id", name: "Indonesia", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Indonesia flag. Indonesia national flag. Vector Illustration." },
  { code: "ph", name: "Philippines", region: "Asia", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Republic of the Philippines flag. Philippines national flag. Vector Illustration." },
  { code: "gh", name: "Ghana", region: "Africa", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Ghana flag. Ghana national flag. Vector Illustration." },
  { code: "ma", name: "Morocco", region: "Africa", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Kingdom of Morocco flag. Morocco national flag. Vector Illustration." },
  { code: "co", name: "Colombia", region: "Americas", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Colombia flag. Colombia national flag. Vector Illustration." },
  { code: "cl", name: "Chile", region: "Americas", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Chile flag. Chile national flag. Vector Illustration." },
  { code: "pe", name: "Peru", region: "Americas", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Peru flag. Peru national flag. Vector Illustration." },
  { code: "nz", name: "New Zealand", region: "Oceania", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "New Zealand flag. New Zealand national flag. Vector Illustration." },
  { code: "ie", name: "Ireland", region: "Europe", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Republic of Ireland flag. Ireland national flag. Vector Illustration." },
  { code: "pl", name: "Poland", region: "Europe", ratio: "5:8", size: "13000 X 8014 Pixels", desc: "Republic of Poland flag. Poland national flag. Vector Illustration." },
  { code: "ua", name: "Ukraine", region: "Europe", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Ukraine flag. Ukraine national flag. Vector Illustration." },
  { code: "il", name: "Israel", region: "Asia", ratio: "8:11", size: "13000 X 8014 Pixels", desc: "State of Israel flag. Israel national flag. Vector Illustration." },
  { code: "bd", name: "Bangladesh", region: "Asia", ratio: "3:5", size: "13000 X 8014 Pixels", desc: "People's Republic of Bangladesh flag. Bangladesh national flag. Vector Illustration." },
  { code: "sg", name: "Singapore", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of Singapore flag. Singapore national flag. Vector Illustration." },
  { code: "my", name: "Malaysia", region: "Asia", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Malaysia flag. Malaysia national flag. Vector Illustration." },
  { code: "et", name: "Ethiopia", region: "Africa", ratio: "1:2", size: "13000 X 8014 Pixels", desc: "Federal Democratic Republic of Ethiopia flag. Ethiopia national flag. Vector Illustration." },
  { code: "is", name: "Iceland", region: "Europe", ratio: "18:25", size: "13000 X 8014 Pixels", desc: "Republic of Iceland flag. Iceland national flag. Vector Illustration." },
  { code: "in", name: "India", region: "Asia", ratio: "2:3", size: "13000 X 8014 Pixels", desc: "Republic of India flag. India national flag. Vector Illustration." }
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
      </div>
      <div class="card-body">
        <h3 class="card-title">${f.name}</h3>
        <p class="card-desc">${f.desc}</p>
        <p class="card-size">Size: ${f.size}</p>
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
