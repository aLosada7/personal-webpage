import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/vsDark";

const CodeBlock = ({ children, className }) => {
	const language = className.replace(/language-/, "");

	return (
		<Highlight {...defaultProps} theme={theme} code={children} language={language}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre className={`${className} codeBlock pre`} style={style}>
					{tokens.slice(0, -1).map((line, i) => (
						<div key={i} className="line" {...getLineProps({ line, key: i })}>
							<span className="lineNo">{i + 1}</span>
							<span className="lineContent">
								{line.map((token, key) => (
									<span key={key} {...getTokenProps({ token, key })} />
								))}
							</span>
						</div>
					))}
					<span className="language">{language}</span>
				</pre>
			)}
		</Highlight>
	);
};

export default CodeBlock;
