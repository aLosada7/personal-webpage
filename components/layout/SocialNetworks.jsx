import NextImage from "next/image";
import { Box, Image, Link } from "@edene/components";

const SocialNetworks = () => (
	<Box className="social-networks-wrapper">
		<Link href="https://www.linkedin.com/in/alvarolosadadecastro/" target="_blank">
			<Image component={NextImage} src="/linkedin.svg" width="18" height="18" alt="My linkedin page" />
		</Link>
		<Link href="https://twitter.com/aLosada_dev" target="_blank">
			<Image component={NextImage} src="/twitter.svg" width="18" height="18" alt="My twitter page" />
		</Link>
		<Link href="https://medium.com/@alvarolosada" target="_blank">
			<Image component={NextImage} src="/medium.svg" width="18" height="18" alt="My medium page" />
		</Link>
		<Link href="https://github.com/aLosada7" target="_blank">
			<Image component={NextImage} src="/github.svg" width="18" height="18" alt="My github page" />
		</Link>
	</Box>
);

export default SocialNetworks;
