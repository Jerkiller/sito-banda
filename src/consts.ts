// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Banda Vivaldi';
export const SITE_DESCRIPTION = 'Banda musicale di Mestre e Venezia';

const TEST_WEB3FORMS_ACCESS_KEY = 'f820fa57-ede8-4733-bc10-152d3141855d';
const PROD_WEB3FORMS_ACCESS_KEY = '2cd87c4c-42b8-41d4-8305-ad848332949a';

export function getWeb3FormsAccessKey(hostname = '') {
	const override = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY;
	if (override) {
		return override;
	}

	const isProductionHost = hostname === 'bandavivaldi.it' || hostname.endsWith('.bandavivaldi.it');
	return isProductionHost ? PROD_WEB3FORMS_ACCESS_KEY : TEST_WEB3FORMS_ACCESS_KEY;
}