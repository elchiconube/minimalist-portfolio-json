import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, k as renderComponent } from '../astro_C06vUi-b.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
/* empty css                          */

const basics = {
	name: "Óscar Bustos Garrido",
	label: "Frontend Developer with over 12 years of experience in Web Development.",
	image: "/me.webp",
	email: "oscarbustosgarrido@gmail.com",
	phone: "+34 649131791",
	url: "https://oscarbustos.dev",
	summary: "With over 12 years of experience as a developer. I have worked in diverse environments, from accelerating start-up development to leading projects for multinational corporations. I have experience in defining architecture for long-term applications. I enjoy contributing value to design and product teams.",
	location: {
		address: "Principe de Asturias 6",
		postalCode: "24660",
		city: "León",
		countryCode: "ES",
		region: "Spain"
	},
	profiles: [
		{
			network: "X",
			username: "elchiconube",
			url: "https://x.com/elchiconube"
		},
		{
			network: "GitHub",
			username: "elchiconube",
			url: "https://github.com/elchiconube"
		}
	]
};
const work = [
	{
		name: "Marketgoo",
		position: "Senior Frontend Developer",
		url: "https://marketgoo.com/",
		startDate: "2023-01-09",
		endDate: null,
		summary: "I am leading frontend developent on new projects for the company. I applied a component-based architecture with which I managed to reduce the development time, thus being able to launch new features quickly. I implemented a testing strategy to improve code quality and reduce errors in production. I supported the design and product team in the creation of new features. I work with the backend team to define the API requirements. I am responsible for the performance of the application and the user experience. I mentor new developers. I used technologies like ReactJS, Typescript, CSS Modules, Jest, Cypress, and Git.",
		highlights: [
			"ReactJS",
			"Git",
			"GitHub",
			"CSS modules",
			"Cypress",
			"Astro"
		]
	},
	{
		name: "urbanData Analytics",
		position: "Lead Frontend Developer",
		url: "https://www.urbandataanalytics.com/",
		startDate: "2019-02-01",
		endDate: "2022-12-15",
		summary: "I led a refactor of the company's main product in record time while maintaining the previous one. We migrated from a monolithic architecture to a more flexible and optimized one that improved performance and user experience. I promoted good practices and performance improvements. I increased test coverage and code quality. I created an open-source component library for ReactJS that increased development speed and visual consistency of the application. I accompanied the design and product teams in the creation of new features. I mentored new developers. I used technologies like ReactJS, Typescript, Styled Components, Jest, Cypress, and Git.",
		highlights: [
			"ReactJS",
			"Next.js",
			"StyledComponents",
			"Git",
			"GitHub",
			"Jest",
			"Cypress"
		]
	},
	{
		name: "BTS",
		position: "Full Stack Developer",
		startDate: "2015-03-01",
		endDate: "2019-05-01",
		summary: "I developed a knowledge management platform for the company. I implemented a REST API using Strapi to store the contents. I also created a web application to consume and manage the content. I learned to work in an international environment with teams distributed around the world. I improved the quality of the code and the speed of development. I learned to create a complete structure including frontend, backend, and deployment on AWS. I used technologies like ReactJS, Redux, Strapi, StyledComponents, and AWS.",
		highlights: [
			"ReactJS",
			"Redux",
			"Git",
			"GitHub",
			"Strapi",
			"StyledComponents",
			"AWS"
		]
	},
	{
		name: "Axel Springer",
		position: "Frontend Developer",
		startDate: "2015-02-01",
		endDate: "2013-05-01",
		summary: "I developed websites for different brands within the group. The main sites had very high traffic, so there were high demands in terms of SEO and loading speed. I learned to work in a high-demand environment where advertising was the main source of revenue. I improved the performance of the sites and the user experience. I used technologies like Vanilla Javascript, HTML5, CSS3, SASS, Webpack, Drupal and Git.",
		highlights: [
			"Drupal",
			"HTML",
			"CSS",
			"Javascript",
			"Git",
			"GitHub"
		]
	},
	{
		name: "Vocento",
		position: "Frontend Developer",
		startDate: "2011-04-01",
		endDate: "2013-05-01",
		summary: "I developed various web applications for different brands within the group. I learned how to implement responsive designs in older browsers. I carried out webapp projects that were used to create applications on iOS and Android. I was awarded a prize for the design of one of the applications. I used technologies like HTML, CSS, Javascript, Git, and GitHub.",
		highlights: [
			"HTML",
			"CSS",
			"Javascript",
			"Git",
			"GitHub"
		]
	}
];
const volunteer = [
	{
		organization: "U-tad",
		position: "Profesor asociado",
		url: "https://u-tad.com/",
		startDate: "2015-07-01",
		endDate: "2019-02-01",
		summary: "I taught Web development and programming classes at the university for Design degree students. I supported students in the creation of their final projects. I conducted tutorials to help students enhance their technical skills.",
		highlights: [
			"HTML",
			"CSS",
			"JavaScript"
		]
	}
];
const publications = [
	{
		name: "Desarrollo Frontend",
		publisher: "Leanpub",
		releaseDate: "2018-10-01",
		url: "https://leanpub.com/desarrollo-frontend",
		summary: "A book to get started in frontend development. You'll learn the basics of HTML, CSS, and JavaScript. In addition, I'll teach you how to use tools like Git and GitHub, all without prior knowledge."
	}
];
const skills = [
	{
		name: "HTML",
		level: "Master",
		keywords: [
			"Web development",
			"Frontend"
		]
	},
	{
		name: "CSS",
		level: "Master",
		keywords: [
			"Web development",
			"Frontend",
			"Responsive design"
		]
	},
	{
		name: "JavaScript",
		level: "Master",
		keywords: [
			"Web development",
			"Frontend",
			"Backend",
			"Fullstack"
		]
	},
	{
		name: "TypeScript",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"Backend",
			"JavaScript Superset"
		]
	},
	{
		name: "Git",
		level: "Advanced",
		keywords: [
			"Version control",
			"Collaboration",
			"Source code"
		]
	},
	{
		name: "GitHub",
		level: "Advanced",
		keywords: [
			"Version control",
			"Collaboration",
			"Source code",
			"Git"
		]
	},
	{
		name: "Next.js",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"React Framework",
			"SSR",
			"Static Generation"
		]
	},
	{
		name: "React",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	},
	{
		name: "Astro",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"JavaScript Library",
			"SSR",
			"Static Generation"
		]
	},
	{
		name: "AI",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"Backend",
			"Machine Learning"
		]
	},
	{
		name: "Mapbox",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	},
	{
		name: "ChartJS",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	},
	{
		name: "Cypress",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	},
	{
		name: "Stripe",
		level: "Advanced",
		keywords: [
			"Web development",
			"Frontend",
			"JavaScript Library",
			"UI"
		]
	},
	{
		name: "Node",
		level: "Advanced",
		keywords: [
			"Web development",
			"Backend",
			"JavaScript",
			"Server"
		]
	},
	{
		name: "MongoDB",
		level: "Advanced",
		keywords: [
			"Database",
			"noSQL",
			"Backend"
		]
	},
	{
		name: "MySQL",
		level: "Advanced",
		keywords: [
			"Database",
			"SQL",
			"Backend"
		]
	}
];
const projects = [
	{
		name: "mDI",
		isActive: true,
		description: "mDI is a data solution for companies serving domains or websites to increase retention by uncovering upselling opportunities and customer insights within their user base.",
		highlights: [
			"ReactJS",
			"ChartJS",
			"SWR"
		],
		url: "https://mdi.marketgoo.com/"
	},
	{
		name: "Badger",
		isActive: true,
		description: "Connect all your SEO data sources in one place—and generate custom reports that save you hours and wow your clients!",
		highlights: [
			"ReactJS",
			"ChartJS",
			"SWR",
			"AI"
		],
		url: "https://getbadger.io"
	},
	{
		name: "Topdelmes.com",
		isActive: true,
		description: "Website to discover the best movies and series by month and year, with reviews created using AI. ",
		highlights: [
			"Astro",
			"Strapi",
			"Node",
			"AI"
		],
		url: "https://topdelmes.com"
	},
	{
		name: "Memos.land",
		isActive: true,
		description: "Platform for sharing images and texts among individuals focused on privacy and simplicity.",
		highlights: [
			"ReactJS",
			"SWR",
			"Node",
			"MongoDB",
			"Stripe"
		],
		url: "https://memos.land"
	},
	{
		name: "Pulse",
		isActive: true,
		description: "Real estate investment opportunity assessment and identification software",
		highlights: [
			"ReactJS",
			"Styled Components",
			"Stripe",
			"Mapbox"
		],
		url: "https://www.urbandataanalytics.com/pulse"
	},
	{
		name: "Bento Components",
		description: "Open source component library for ReactJS.",
		highlights: [
			"Open source",
			"ReactJS",
			"Styled Components"
		],
		url: "https://github.com/urbandataanalytics/bento-components",
		github: "https://github.com/urbandataanalytics/bento-components"
	}
];

const $$Astro$B = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$B, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { image, summary, url } = basics;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><title>${title}</title><meta name="description"${addAttribute(summary, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" as="image"${addAttribute(image, "href")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(summary, "content")}><meta property="og:image" content=""><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(url.split("//")[1] ?? "", "content")}><meta property="twitter:url"${addAttribute(url, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(summary, "content")}><meta name="twitter:image" content="">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/layouts/Layout.astro", void 0);

const $$Astro$A = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$A, $$props, $$slots);
  Astro2.self = $$Section;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sh445jdo> ${title && renderTemplate`<h2 data-astro-cid-sh445jdo>${title}</h2>`} ${renderSlot($$result, $$slots["default"])} </section>  `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/Section.astro", void 0);

const $$Astro$z = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$z, $$props, $$slots);
  Astro2.self = $$About;
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/About.astro", void 0);

const $$Astro$y = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$y, $$props, $$slots);
  Astro2.self = $$Experience;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Experience", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-ghubstuj> ${work.map(({ name, startDate, endDate, position, summary, url }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Now";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<li data-astro-cid-ghubstuj> <article data-astro-cid-ghubstuj> <header data-astro-cid-ghubstuj> <div data-astro-cid-ghubstuj> <h3 data-astro-cid-ghubstuj> <a${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj> ${name} </a> </h3> <h4 data-astro-cid-ghubstuj>${position}</h4> </div> <time data-astro-cid-ghubstuj>${years}</time> </header> <footer data-astro-cid-ghubstuj> <p data-astro-cid-ghubstuj>${summary}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/Experience.astro", void 0);

const $$Astro$x = createAstro();
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$x, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/Mail.astro", void 0);

const $$Astro$w = createAstro();
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$Phone;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/Phone.astro", void 0);

const $$Astro$v = createAstro();
const $$X = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/X.astro", void 0);

const $$Astro$u = createAstro();
const $$LinkedIn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$LinkedIn;
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/LinkedIn.astro", void 0);

const $$Astro$t = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/GitHub.astro", void 0);

const $$Astro$s = createAstro();
const $$WorldMap = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$WorldMap;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/WorldMap.astro", void 0);

const $$Astro$r = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Hero;
  const { name, label, image, location, profiles, phone, email } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn,
    X: $$X
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" \u2022 ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <span data-astro-cid-anhloy43> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </span> <footer class="print" data-astro-cid-anhloy43> ${printInfo} </footer> <footer class="no-print" data-astro-cid-anhloy43> ${email && renderTemplate`<a${addAttribute(`mailto:${email}`, "href")}${addAttribute(`Enviar un correo electr\xF3nico a ${name} al correo ${email}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </a>`} ${phone && renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Call ${name}: ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visit ${name}'s profile on ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} </footer> </div> <figure data-astro-cid-anhloy43> <img${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> </figure> </div> ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/Hero.astro", void 0);

const $$Astro$q = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Projects", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-44zkpkd5> ${projects.map(
    ({ url, description, highlights, name, isActive, github }) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5> <article data-astro-cid-44zkpkd5> <header data-astro-cid-44zkpkd5> <h3 data-astro-cid-44zkpkd5> <a${addAttribute(url, "href")} target="_blank"${addAttribute(`Ver el proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${name} </a> ${isActive && renderTemplate`<span data-astro-cid-44zkpkd5>•</span>`} ${github && renderTemplate`<a class="github-code-link"${addAttribute(github, "href")} target="_blank"${addAttribute(`Ver c\xF3digo fuente del proyecto ${name}`, "title")} data-astro-cid-44zkpkd5> ${renderComponent($$result2, "GitHub", $$GitHub, { "data-astro-cid-44zkpkd5": true })} </a>`} </h3> <p data-astro-cid-44zkpkd5>${description}</p> </header> <footer data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
        return renderTemplate`<span data-astro-cid-44zkpkd5>${highlight}</span>`;
      })} </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/Projects.astro", void 0);

const $$Astro$p = createAstro();
const $$Html = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Html;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/html.astro", void 0);

const $$Astro$o = createAstro();
const $$Css = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Css;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/css.astro", void 0);

const $$Astro$n = createAstro();
const $$Javascript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/javascript.astro", void 0);

const $$Astro$m = createAstro();
const $$Type = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Type;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/type.astro", void 0);

const $$Astro$l = createAstro();
const $$React = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$React;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/react.astro", void 0);

const $$Astro$k = createAstro();
const $$Node = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Node;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/node.astro", void 0);

const $$Astro$j = createAstro();
const $$Sql = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Sql;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path><path d="M9 7h.01"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/sql.astro", void 0);

const $$Astro$i = createAstro();
const $$Git = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Git;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/git.astro", void 0);

const $$Astro$h = createAstro();
const $$Tailwind = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Tailwind;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/tailwind.astro", void 0);

const $$Astro$g = createAstro();
const $$Next = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Next;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/next.astro", void 0);

const $$Astro$f = createAstro();
const $$Swift = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Swift;
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M729.173 841.387c-100.693 58.026-238.506 64-378.026 4.266A589.099 589.099 0 0 1 85.333 618.667c28.587 23.466 62.294 42.666 98.134 59.733 143.786 66.987 287.146 62.293 388.266 0-143.786-110.507-266.24-254.293-357.12-371.627-19.2-19.2-33.28-43.093-47.786-64.426 353.28 258.133 337.92 323.84 102.826-43.094C478.293 410.027 672 529.493 672 529.493c6.827 3.84 10.667 6.827 15.36 9.387 4.267-10.667 8.107-21.76 11.093-33.28 33.707-121.6-4.693-261.12-88.746-375.893C803.84 247.04 919.04 467.2 870.827 651.947c-1.28 4.693-2.56 9.386-2.134 16.64 95.574 120.746 69.974 246.613 57.6 222.72-51.626-101.974-148.48-70.4-197.12-49.92z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/swift.astro", void 0);

const $$Astro$e = createAstro();
const $$Swiftui = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Swiftui;
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 50 50" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.182 5C9.122 5 5 9.122 5 14.182v21.636C5 40.878 9.122 45 14.182 45h21.636C40.878 45 45 40.878 45 35.818V14.182C45 9.122 40.878 5 35.818 5H14.182zm0 2h21.636A7.166 7.166 0 0 1 43 14.182v21.636A7.166 7.166 0 0 1 35.818 43H14.182A7.166 7.166 0 0 1 7 35.818V14.182A7.166 7.166 0 0 1 14.182 7zm12.816 6.033c2.078 4.156 3.283 6.5 2.307 12.227C27.079 23.774 18.855 17.152 17 15c1.336 2.375 5.18 7.586 6.516 8.922-2.375-1.632-10.02-7.645-10.02-7.645s6.532 9.871 12.024 13.211c-2.078.668-6.59 3.398-14.457-1.425 2.003 2.745 5.55 8.255 14.234 7.736 3.043-.148 4.896-1.113 6.603-1.781 1.707-.668 3.34-.595 4.75 1.93.297-2.302.371-4.454-2.004-6.903 0 0 2.348-8.95-7.648-16.012z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/swiftui.astro", void 0);

const $$Astro$d = createAstro();
const $$Kotlin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Kotlin;
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M55.467 1024 537.6 533.333 1024 1024zM0 0h512L0 533.333zm571.733 0L0 597.333V1024l512-512L1024 0z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/kotlin.astro", void 0);

const $$Astro$c = createAstro();
const $$Flutter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Flutter;
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M610.73 0 98.134 512 256 669.867 925.184.512H611.285L610.731 0zm.598 472.405L335.232 747.904l276.053 276.053h314.582L650.24 747.99l275.627-275.626H611.37z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/flutter.astro", void 0);

const $$Astro$b = createAstro();
const $$Astrojs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Astrojs;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="#000000" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735Zm0 0"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/astrojs.astro", void 0);

const $$Astro$a = createAstro();
const $$Mapbox = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Mapbox;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m4.75 12.45c1.9-1.9 1.83-5.06-.16-7.04c-1.99-1.98-5.14-2.06-7.04-.16c-3.43 3.43-2.33 9.53-2.33 9.53s6.11 1.09 9.53-2.33m-3.6-6.59l.98 2.01l2.01.98l-2.01.98l-.98 2.01l-.98-2.01l-2.01-.98l2.01-.98z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/mapbox.astro", void 0);

const $$Astro$9 = createAstro();
const $$Chartjs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Chartjs;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 444 512"><path fill="#000000" d="M93.773 383.301L56.185 359.84c7.174-23.248 66.002-128.702 101.15-125.735c-20.377 53.312-31.795 100.81-63.562 149.196m73.899-125.875c-16.825 50.264-35.685 96.805-59.43 134.418l113.77 65.845L401.808 354.1v-96.054c-17.409 1.899-28.04 11.714-33.856 27.625c-8.966 24.522-45.09 53.526-74.208 14.434c-46.294 73.817-89.691 61.131-126.072-42.678m-15.976-37.5c-29.717-63.536-86.128-64.359-110.288 30.382v99.365c16.752-30.082 69.495-126.03 110.288-129.747m241.551 23.284c-30.182-22.633-75.278 4.926-92.666 44.772c16.273 26.845 32.626 21.312 46.433 8.314c11.115-10.464 14.987-42.382 46.233-53.086m-131.318 1.74c-28.167-53.934-52.027-95.947-82.744-17.201c25.446 19.944 55.937 40.149 82.744 17.202m24.196 44.355c-6.059-9.207-12.04-20.276-17.61-31.46c-26.778 21.11-60.71 10.872-94.623-16.6c20.782 53.499 37.073 83.209 53.345 91.251c18.386 9.087 43.204-11.97 58.888-43.191M30.222 145.277v221.446L222 477.446l191.778-110.723V145.277L222 34.554zM444 128v256L222 512L0 384V128L222 0zm-42.192 96.855c-33.024-49.825-60.828-52.76-81.188-38.38c-18.528 13.084-31.146 44.257-41.24 60.66c4.485 10.063 8.71 15.672 13.613 24.951c23.655-45.014 67.622-71.407 108.815-40.748z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/chartjs.astro", void 0);

const $$Astro$8 = createAstro();
const $$Cypress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Cypress;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128"><path fill="#000000" d="M63.994.107c-2.123 0-4.249.119-6.36.329V.431c-.11.01-.217.03-.327.04c-.827.087-1.65.184-2.471.301c-.32.046-.638.1-.957.15c-.441.07-.886.129-1.324.208l.004.016C22.26 6.55 0 32.723 0 64.005c0 6.006.837 11.913 2.477 17.619l-.012.004c.158.55.334 1.091.506 1.635c.068.215.13.433.2.648c8.542 26 33.198 43.967 60.796 43.98h.014c.889 0 1.776-.014 2.665-.054c4.568-.189 8.652-3.057 10.403-7.3l2.531-6.16l-.008-.001l29.365-71.48h-9.619L86.963 74.204L74.516 42.897H64.33l17.461 42.732l-12.719 30.851h.002l-.271.66c-.431 1.038-1.415 1.753-2.52 1.794a65.02 65.02 0 0 1-2.303.052c-24.452 0-46.224-16.368-52.947-39.81a54.973 54.973 0 0 1-2.129-15.17c0-27.224 19.603-49.953 46.135-54.246c.4-.065.8-.131 1.203-.188c.453-.063.91-.115 1.367-.168a56.055 56.055 0 0 1 6.385-.377c23.516 0 44.034 14.524 51.858 36.414a55.722 55.722 0 0 1 .79 2.37a54.784 54.784 0 0 1 2.44 16.195c0 24.371-15.682 45.51-39.016 52.596l2.586 8.529c27.12-8.245 45.334-32.806 45.348-61.112c0-6.42-.96-12.698-2.822-18.75l.006-.002l-.075-.228a63.602 63.602 0 0 0-.619-1.88a65.225 65.225 0 0 0-.34-.96c-.106-.292-.201-.587-.312-.879l-.014.006C114.444 16.508 90.91.107 63.994.107m-19.01 41.981c-6.399 0-11.6 2.047-15.898 6.264c-4.27 4.19-6.426 9.457-6.426 15.654c0 6.157 2.169 11.398 6.426 15.574c4.298 4.217 9.5 6.266 15.898 6.266c9.094 0 16.828-5.094 20.196-13.272l.173-.443l-8.689-2.951l-.148.39c-1.94 4.73-6.25 7.545-11.532 7.545c-3.597 0-6.643-1.253-9.04-3.732c-2.44-2.506-3.665-5.672-3.665-9.377c0-3.732 1.199-6.83 3.664-9.457c2.412-2.479 5.444-3.73 9.041-3.73c5.174 0 9.376 2.76 11.532 7.556l.162.377l8.676-2.95l-.174-.444c-3.355-8.192-11.102-13.27-20.196-13.27"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/cypress.astro", void 0);

const $$Astro$7 = createAstro();
const $$Stripe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Stripe;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803c0-.622.511-.977 1.423-.977c1.667 0 3.379.642 4.558 1.22l.666-4.111c-.935-.446-2.847-1.177-5.49-1.177c-1.87 0-3.425.489-4.536 1.401c-1.155.954-1.757 2.334-1.757 4c0 3.023 1.847 4.312 4.847 5.403c1.936.688 2.579 1.178 2.579 1.934c0 .732-.629 1.155-1.762 1.155c-1.403 0-3.716-.689-5.231-1.578l-.674 4.157c1.304.732 3.705 1.488 6.197 1.488c1.976 0 3.624-.467 4.735-1.356c1.245-.977 1.89-2.422 1.89-4.289c0-3.091-1.889-4.38-4.935-5.468h.002z" fill="#000000"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/stripe.astro", void 0);

const $$Astro$6 = createAstro();
const $$Mongodb = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mongodb;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path fill="#000000" d="M22.906 12.693c-1.682-7.417-5.656-9.849-6.083-10.781c-.469-.661-.974-1.911-.974-1.911c-.005.026-.005.042-.01.068v.016c0 .021-.005.031-.005.052v.021h-.005v.067h-.005c0 .01 0 .026-.005.031v.031c0 .01 0 .021-.005.026v.026c0 .016 0 .031-.005.042v.005a.32.32 0 0 1-.01.068v.01c-.005.005-.005.01-.005.016v.021h-.005v.031h-.005v.021h-.01v.031h-.005V.61h-.005v.021h-.005v.021h-.005v.021h-.005v.021h-.005V.71h-.005v.021h-.005v.021h-.005c-.005 0-.005.005-.005.005v.01l-.005.01c0 .01-.005.021-.01.031c-.005.005-.005.005-.005.01v.01h-.005v.01h-.01v.026h-.01V.88h-.005v.005h-.005v.01h-.005v.016h-.005v.01h-.01v.016h-.005v.01h-.005v.01h-.005v.016h-.005v.01h-.005v.005h-.005v.01h-.01v.016h-.005v.005h-.005v.01h-.005v.016h-.005v.005h-.005v.01h-.005v.005h-.005v.016h-.01v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.01c-.005 0-.005.005-.005.005v.005h-.005l-.016.026s-.01.01-.01.016c-.005 0-.005.005-.005.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.005h-.005v.015h-.005v.005h-.005v.005h-.005v.01h-.005v-.01h-.01v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.01h-.01v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.016h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.01h-.005v.005h-.005v.005h-.005v.01h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.01h-.005v.005h-.005v.005h-.01v.005h-.005v.005h-.005v.01h-.005v.005h-.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005v.005h-.01v.005c-.005 0-.005.005-.005.005l-.005.005l-.005.005v.01h-.005v.005h-.005v.005h-.005v.005h-.005l-.01.01v.005c-.01.005-.01.01-.021.021c0 0-.01.01-.016.01c-.016.01-.036.031-.052.047c-.01.005-.021.016-.031.021c-.021.021-.042.036-.063.052c-.031.031-.063.052-.099.083h-.005l-.245.214h-.005c-.224.198-.49.453-.792.755l-.026.026c-1.813 1.875-4.672 5.786-4.969 12.104c-.031.521-.026 1.031.005 1.526v.01c.146 2.49.927 4.615 1.906 6.344c.385.688.807 1.313 1.234 1.875c1.469 1.938 2.969 3.089 3.349 3.37c.589 1.359.536 3.703.536 3.703l.859.286s-.177-2.266.068-3.365c.078-.339.255-.63.464-.88c.146-.099.563-.401 1.063-.859c.026-.026.042-.047.063-.073c2.026-1.891 5.813-6.547 4.516-14.13z"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/mongodb.astro", void 0);

const $$Astro$5 = createAstro();
const $$Ai = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Ai;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#000000" d="M4 21v-5q0-.825.588-1.412T6 14h12q.825 0 1.413.588T20 16v5zm5-8q-2.075 0-3.537-1.463T4 8q0-2.075 1.463-3.537T9 3h6q2.075 0 3.538 1.463T20 8q0 2.075-1.463 3.538T15 13zm-3 6h12v-3H6zm3-8h6q1.25 0 2.125-.875T18 8q0-1.25-.875-2.125T15 5H9q-1.25 0-2.125.875T6 8q0 1.25.875 2.125T9 11m0-2q.425 0 .713-.288T10 8q0-.425-.288-.712T9 7q-.425 0-.712.288T8 8q0 .425.288.713T9 9m6 0q.425 0 .713-.288T16 8q0-.425-.288-.712T15 7q-.425 0-.712.288T14 8q0 .425.288.713T15 9m-3-1"></path></svg>`;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/icons/ai.astro", void 0);

const $$Astro$4 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Skills;
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Next: $$Next,
    Tailwind: $$Tailwind,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter,
    AstroJS: $$Astrojs,
    Mapbox: $$Mapbox,
    ChartJS: $$Chartjs,
    Cypress: $$Cypress,
    Stripe: $$Stripe,
    MongoDB: $$Mongodb,
    AI: $$Ai
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Skills", "data-astro-cid-sye7xtqh": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-sye7xtqh> ${skills.map(({ name }) => {
    const iconName = name === "Next.js" ? "Next" : name === "Astro" ? "AstroJS" : name;
    const Icon = SKILLS_ICONS[iconName];
    return renderTemplate`<li data-astro-cid-sye7xtqh> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-sye7xtqh": true })}`} <span data-astro-cid-sye7xtqh>${name}</span> </li>`;
  })} </ul> ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/Skills.astro", void 0);

const $$Astro$3 = createAstro();
const $$KeyboardManager = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$KeyboardManager;
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><path
    fill="currentColor"
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path></svg
>`,
    LinkedIn: `<svg
  height="16"
  width="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>LinkedIn</title><path
    fill="currentColor"
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  ></path></svg
>`,
    X: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>X</title><path
    fill="currentColor"
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  ></path></svg
>
`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visit ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer id="normal-footer" class="no-print" data-astro-cid-5uazswxx>
Press <kbd data-astro-cid-5uazswxx>Cmd</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> to see keyboard commands.
</footer> <div id="footer-button" class="no-print" data-astro-cid-5uazswxx> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5uazswxx> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-5uazswxx></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-5uazswxx></path> </svg> </div> <div id="hotkeypad" data-placeholder="Search commands"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div>  `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/KeyboardManager.astro", void 0);

const $$Astro$2 = createAstro();
const $$Volunteer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Volunteer;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Mentoring", "data-astro-cid-rmis2gvc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-rmis2gvc> ${volunteer.map(
    ({ organization, startDate, endDate, position, summary, url }) => {
      const startYear = new Date(startDate).getFullYear();
      const endYear = endDate != null ? new Date(endDate).getFullYear() : "Now";
      const years = `${startYear} - ${endYear}`;
      return renderTemplate`<li data-astro-cid-rmis2gvc> <article data-astro-cid-rmis2gvc> <header data-astro-cid-rmis2gvc> <div data-astro-cid-rmis2gvc> <h3 data-astro-cid-rmis2gvc> <a${addAttribute(url, "href")}${addAttribute(`Ver ${organization}`, "title")} target="_blank" data-astro-cid-rmis2gvc> ${organization} </a> </h3> <h4 data-astro-cid-rmis2gvc>${position}</h4> </div> <time data-astro-cid-rmis2gvc>${years}</time> </header> <footer data-astro-cid-rmis2gvc> <p data-astro-cid-rmis2gvc>${summary}</p> </footer> </article> </li>`;
    }
  )} </ul> ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/Volunteer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Publications = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Publications;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Publications", "data-astro-cid-ji6bwvs5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul data-astro-cid-ji6bwvs5> ${publications.map(({ name, releaseDate, summary, url }) => {
    const releaseYear = new Date(releaseDate).getFullYear();
    return renderTemplate`<li data-astro-cid-ji6bwvs5> <article data-astro-cid-ji6bwvs5> <header data-astro-cid-ji6bwvs5> <div data-astro-cid-ji6bwvs5> <h3 data-astro-cid-ji6bwvs5> <a${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ji6bwvs5> ${name} </a> </h3> </div> <time data-astro-cid-ji6bwvs5>${releaseYear}</time> </header> <footer data-astro-cid-ji6bwvs5> <p data-astro-cid-ji6bwvs5>${summary}</p> </footer> </article> </li>`;
  })} </ul> ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/components/sections/Publications.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Portafolio de ${name} - ${label}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Experience", $$Experience, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Publications", $$Publications, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Volunteer", $$Volunteer, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/pages/index.astro", void 0);

const $$file = "/Users/elchiconube/Projects/personal/minimalist-portfolio-json/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
