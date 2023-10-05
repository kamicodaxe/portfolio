

const db = {
	"projects": [
		{
			"name": "Gesmax Point-of-sale platform",
			"description": "Gesmax is a full-fledged POS system built with React-Native, available on web, desktop, and mobile. One click e-commerce solution.",
			"tools": ["React Native", "Jira", "Golang", "Next JS", "Node JS", "Firebase", "Tailwind CSS"],
			"links": [
				{
					"title": "GitHub",
					"url": "https://github.com/kamicodaxe/gesmax.web"
				},
				{
					"title": "Landing Page",
					"url": "http://gesmax.vercel.app/"
				},
				{
					"title": "Web Demo",
					"url": "http://gesmaxapp.vercel.app/"
				}
			],
			"media": {
				"type": "image",
				"src": "/images/gesmax.jpeg",
				"alt": "Gesmax landing page screenshot"
			}
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
			"media": {
				"type": "image",
				"src": "/images/bogital.jpeg",
				"alt": "Bogital site screenshot"
			}
		}
	]
}


export type TProject = typeof db.projects[0]

export default db;