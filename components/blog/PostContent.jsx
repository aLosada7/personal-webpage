import { MDXRemote } from "next-mdx-remote";
import NextImage from "next/image";
import { css } from "@emotion/react";
import { Heading, Text, Image, Box } from "@edene/components";
import { from } from "@edene/foundations";

import CodeBlock from "./CodeBlock";

const H2Heading = (props) => <Heading size="h2" mt={8} {...props} />;
const PText = (props) => <Text mt={4} {...props} />;

const components = {
	h2: H2Heading,
	p: PText,
	pre: (props) => <div {...props} />,
	code: CodeBlock,
	img: (props) => {
		return (
			<Box
				css={css`
					position: relative;
					width: 100%;
					min-height: 80px;
					${from.tablet} {
						min-height: 150px;
					}
				`}
			>
				<Image component={NextImage} layout="fill" objectFit="contain" {...props} />
			</Box>
		);
	},
	ul: (props) => <ul style={{ marginLeft: "2rem", listStyle: "disc !important" }} {...props} />,
};

const PostContent = ({ content }) => <MDXRemote {...content} components={components} />;

export default PostContent;
