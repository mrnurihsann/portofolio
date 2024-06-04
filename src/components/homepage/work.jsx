import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./style/work.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./react.png"
								alt="react"
								className="work-image"
							/>
							<div className="work-title">React Js</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./vue.png"
								alt="vue"
								className="work-image"
							/>
							<div className="work-title">Vue Js</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./next.png"
								alt="next"
								className="work-image"
							/>
							<div className="work-title">Next Js</div>
							<div className="work-subtitle">
								Frontend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./node.png"
								alt="node"
								className="work-image"
							/>
							<div className="work-title">Node Js</div>
							<div className="work-subtitle">
								Backend Developer
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./postgree.png"
								alt="postgree"
								className="work-image"
							/>
							<div className="work-title">Postgree SQL</div>
							<div className="work-subtitle">
								backend Developer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
