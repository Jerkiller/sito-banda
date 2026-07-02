import CMS from "decap-cms-app";
import { de } from 'decap-cms-locales';

CMS.init();

CMS.registerLocale('de', de);

// Esempio: template di anteprima personalizzato per le news
const NewsPreview = ({ entry }) => (
  <div>
    <h1>{entry.getIn(["data", "title"])}</h1>
    <p>{entry.getIn(["data", "body"])}</p>
  </div>
);

CMS.registerPreviewTemplate("news", NewsPreview);