import { MDXRemote } from "next-mdx-remote";

import { Title, Text, Image } from "dana-react";
import CodeBlock from "./CodeBlock";

const H2Title = (props) => <Title size="h3" mt={8} {...props} />;
const PText = (props) => <Text mt={4} {...props} />;

const components = {
	h2: H2Title,
	p: PText,
	pre: (props) => <div {...props} />,
	code: CodeBlock,
	img: (props) => <Image {...props} />,
	ul: (props) => <ul style={{ marginLeft: "2rem", listStyle: "disc !important" }} {...props} />,
};

const PostContent = ({ content }) => <MDXRemote {...content} components={components} />;

export default PostContent;
