import NextImage from "next/image";
import { Image } from "@edene/components";

const SocialNetworks = () => (
	<div className="social-networks-wrapper">
		<a href="https://www.linkedin.com/in/alvarolosadadecastro/" target="_blank">
			<Image component={NextImage} src="/linkedin.svg" width="18" height="18" alt="My linkedin page" />
		</a>
		<a href="https://twitter.com/aLosada_dev" target="_blank">
			<Image component={NextImage} src="/twitter.svg" width="18" height="18" alt="My twitter page" />
		</a>
		<a href="https://medium.com/@alvarolosada" target="_blank">
			<Image component={NextImage} src="/medium.svg" width="18" height="18" alt="My medium page" />
		</a>
		<a href="https://github.com/aLosada7" target="_blank">
			<Image component={NextImage} src="/github.svg" width="18" height="18" alt="My github page" />
		</a>
	</div>
);

export default SocialNetworks;
