import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const getPost = (slug) => {
	const dirFiles = fs.readdirSync(path.join(process.cwd(), "public", "blogs"), {
		withFileTypes: true,
	});

	const post = dirFiles
		.map((file) => {
			if (!file.name.endsWith(".mdx")) return;

			const fileContent = fs.readFileSync(path.join(process.cwd(), "public", "blogs", file.name), "utf-8");
			const { data, content } = matter(fileContent);

			const slug = file.name.replace(/.mdx$/, "");
			return {
				frontmatter: {
					...data,
					readingTime: readingTime(content).text,
				},
				content,
				slug,
			};
		})
		.find((post) => {
			if (!post) return false;
			return post.slug && post.slug === slug;
		});

	return post;
};

export default getPost;
