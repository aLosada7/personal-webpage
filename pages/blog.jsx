import Link from "next/link";

import Layout from "../components/Layout";
import blogs from "../blogs.json";

export default function Blog() {
	return (
		<Layout>
			<section className="page-section first-section py-section">
				<div className="container">
					<div className="row">
						<div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
							<h2 className="page-title">
								<strong>Blog.</strong>
							</h2>
						</div>
					</div>
				</div>
			</section>
			<section className="page-section py-section">
				<div className="container">
					<div className="col-16 offset-4 col-mobile-24 col-mobile-offset-0">
						<p className="text-center">
							<strong>
								I am working on it and hope it will be available soon. <br />
								Come later for more updates :)
							</strong>
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
}
