import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import "../styles/globals.scss";

const key = "custom";
const cache = createCache({ key });

function MyApp({ Component, pageProps }) {
	return (
		<CacheProvider value={cache}>
			<Component {...pageProps} />
		</CacheProvider>
	);
}
export default MyApp;
