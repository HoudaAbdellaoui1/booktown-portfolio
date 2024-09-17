import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="subtitle about-subtitle">
									{INFO.about.subdescription}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="title about-title">{INFO.about.title2}</div>
					<br></br>

					<div className="about-main">
						<div className="about-left-side">
							<Image
								src="../portfolio.JPG"
								roundedCircle
								width={"250px"}
								style={{ paddingRight: "50px" }}
							/>
							<div
								className="subtitle about-subtitle"
								style={{
									paddingBottom: "10px",
									textAlign: "center",
									fontSize: "20px",
								}}
							>
								Houda Abdellaoui
							</div>

							<div className="about-socials">
								<div className="social">
									<a
										href={INFO.socials.githubAccount}
										target="_blank"
										rel="noreferrer"
									>
										<div className="social-icon">
											<FontAwesomeIcon
												icon={faGithub}
												className="social-icon"
											/>
										</div>
										<div className="social-text">
											Follow me on Github
										</div>
									</a>
								</div>
								<div className="social">
									<a
										href={INFO.socials.linkedin}
										target="_blank"
										rel="noreferrer"
									>
										<div className="social-icon">
											<FontAwesomeIcon
												icon={faLinkedin}
												className="social-icon"
											/>
										</div>
										<div className="social-text">
											Let's connect on Linkedin
										</div>
									</a>
								</div>{" "}
								<div className="email">
									<div className="email-wrapper">
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noreferrer"
										>
											<div className="social-icon">
												<FontAwesomeIcon
													icon={faEnvelope}
												/>
											</div>

											<div className="social-text">
												{INFO.main.email}
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="about-right-side">
							<div className="subtitle about-subtitle">
								{INFO.about.teamdescription}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
