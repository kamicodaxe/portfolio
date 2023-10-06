const db = {
	"projects": [
		{
			"name": "KBOOM.gg Clone Project",
			"description": "Explore the world of esports with this comprehensive KBOOM.gg clone developed using Next.js. This project showcases my expertise in building interactive and visually appealing web applications inspired by the gaming industry.",
			"tools": ["Next.js", "React", "Tailwind CSS", "Node.js"],
			"links": [
				{
					"title": "GitHub Repository",
					"url": "https://github.com/kamicodaxe/kboom.gg"
				},
				{
					"title": "Live Demo",
					"url": "https://nextjs-kboom.vercel.app/"
				}
			],
			"media": [
				{
					"type": "image",
					"src": "/images/kb-1.PNG",
					"alt": "KBOOM.gg Clone Screenshot"
				},
				{
					"type": "image",
					"src": "/images/kb-2.PNG",
					"alt": "KBOOM.gg Clone Blog Screenshot"
				},
				{
					"type": "image",
					"src": "/images/kb-3.PNG",
					"alt": "KBOOM.gg Clone light mode Screenshot"
				}
			],
			"info": ""
		},
		{
			"name": "React Pannellum Next - Interactive 360 Panorama Library",
			"description": "React Pannellum Next is an advanced npm package that seamlessly integrates interactive 360-degree panoramas into Next.js applications. It offers features such as 360-degree panoramas rendering, interactive hotspots, customization options, responsive design and event handling.",
			"tools": ["React", "Next.js", "Pannellum JS", "JavaScript"],
			"links": [
				{
					"title": "NPM Package",
					"url": "https://www.npmjs.com/package/react-pannellum-next"
				}
			],
			"media": [
				{
					"type": "video",
					"src": "images/react-pannellum-next.mp4",
					"alt": ""
				},
			]
		},
		{
			"name": "Gesmax Point-of-sale platform",
			"description": "Gesmax is a full-fledged POS system built with React-Native, available on web, desktop, and mobile. One click e-commerce solution.",
			"tools": ["React Native", "Jira", "Golang", "Next JS", "Node JS", "Firebase", "Tailwind CSS"],
			"links": [
				{
					"title": "Webapp Demo",
					"url": "http://gesmaxapp.vercel.app/"
				},
				{
					"title": "Landing Page",
					"url": "http://gesmax.vercel.app/"
				}

			],
			"media": [
				{
					"type": "image",
					"src": "/images/ges-1.PNG",
					"alt": "Gesmax webapp screenshot"
				},
				{
					"type": "image",
					"src": "/images/ges-2.PNG",
					"alt": "Gesmax landing page screenshot"
				}
			],
			"info": "Demo credentials: nailsnbody@bogital.com | passlynette2022"
		},
		{
			"name": "Civil Engineering Club Website",
			"description": "The Civil Engineering Club website, led by me as the Chief of the IT commission in 2020-2021, is a dynamic hub showcasing the club's vibrant activities, innovative projects, and valuable resources. It offers insights into civil engineering, fostering a vibrant learning community.",
			"tools": ["Hugo", "Gulp", "Netlify CMS", "JAMstack", "HTML", "CSS", "JavaScript"],
			"links": [
				{
					"title": "Website",
					"url": "https://clubgcenstp.netlify.app/"
				},
				{
					"title": "GitHub Repository",
					"url": "https://github.com/kamicodaxe/clubgcenstp"
				}
			],
			"media": [
				{
					"type": "image",
					"src": "/images/cgc.jpeg",
					"alt": "Ismatech Business School website screenshot"
				}
			]
		},
		{
			"name": "Environmental Secrets Manager (envzy-cli)",
			"description": "A project developed in Golang, specifically a CLI tool named envzy-cli, focused on managing environmental secrets.",
			"tools": ["Golang"],
			"links": [
				{
					"title": "GitHub",
					"url": "https://github.com/kamicodaxe/envzy-cli/"
				}
			],
			"media": [
				{
					"type": "video",
					"src": "/images/envzy-cli.mp4",
					"alt": "envzy-cli video"
				}
			]
		},
		{
			"name": "Ismatech Business School demo prototype",
			"description": "ISMATECH Business School offers tailored education and consulting services to businesses and professionals, empowering them to excel in the ever-evolving corporate landscape.",
			"tools": ["Next.js", "Tailwind CSS"],
			"links": [
				{
					"title": "Website",
					"url": "http://ismatech.vercel.app/"
				}
			],
			"media": [
				{
					"type": "image",
					"src": "/images/ism-1.PNG",
					"alt": "Ismatech Business School website screenshot"
				},
				{
					"type": "image",
					"src": "/images/ism-2.PNG",
					"alt": "Ismatech Business School website screenshot"
				}
			]
		},
		{
			"name": "FENASSCO 2022 Ligue A Website",
			"description": "A sports website developed using Next.js and Tailwind CSS within a strict one-week deadline. It showcased your ability to thrive under pressure.",
			"tools": ["Next.js", "Tailwind CSS"],
			"links": [
				{
					"title": "Website",
					"url": "https://fenassco.vercel.app/"
				}
			],
			"media": [
				{
					"type": "image",
					"src": "/images/fen-1.PNG",
					"alt": "FENASSCO 2022 Ligue A Website screenshot"
				},
				{
					"type": "image",
					"src": "/images/fen-2.PNG",
					"alt": "FENASSCO 2022 Ligue A Website screenshot"
				}
			]
		},
		{
			"name": "Bogital Web Agency",
			"description": "Bogital is a software development agency founded in 2017.",
			"tools": ["Next JS", "Wordpress API", "Figma", "GraphQL", "Tailwind CSS", "i18n"],
			"links": [
				{
					"title": "GitHub",
					"url": "https://github.com/kamicodaxe/bogital.com"
				},
				{
					"title": "Landing Page",
					"url": "http://bogital.com/"
				}
			],
			"media": [
				{
					"type": "image",
					"src": "/images/bogital.jpeg",
					"alt": "Bogital site screenshot"
				}
			]
		},



	]
};

export type TProject = typeof db.projects[0];

export default db;
