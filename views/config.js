// Public base URL the pages talk to (no trailing slash). Season 10: the
// grind proxy in front of the fysca server, so the server's own address
// never reaches the browser. The pages fetch channel data from its keyless
// /public/s9_data endpoint, so this site can be hosted as plain static
// files (GitHub Pages) on its own domain.
window.FYSC_API_BASE = 'https://grindapi.lilianax.lol';
window.FYSC_DATA_URL = window.FYSC_API_BASE + '/public/s9_data';
