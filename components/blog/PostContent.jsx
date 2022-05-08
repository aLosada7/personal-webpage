import { MDXRemote } from "next-mdx-remote";

import { Title, Text, Image } from "dana-react";

const H2Title = (props) => <Title size="h3" mt={8} {...props} />;
const PText = (props) => <Text mt={4} {...props} />;

const components = {
	h2: H2Title,
	p: PText,
	pre: (props) => <div {...props} />,
	code: (props) => <pre style={{ color: "pink" }} {...props} />,
	img: (props) => <Image {...props} />,
};

const PostContent = ({ content }) => <MDXRemote {...content} components={components} />;

export default PostContent;
