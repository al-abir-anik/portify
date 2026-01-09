// app/api/allProjects/route.js

const allProjects = [
  {
    url: "zoho",
    title: "Zoho",
    year: "2023",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
  {
    url: "poho",
    title: "Poho",
    year: "2022",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
  {
    url: "moho",
    title: "Moho",
    year: "2021",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
  {
    url: "yoho",
    title: "Yoho",
    year: "2024",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
  {
    url: "koho",
    title: "Koho",
    year: "2025",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
  {
    url: "ooho",
    title: "Ooho",
    year: "2025",
    description:
      "This project tackles core challenge by building a intuitive digital experience focused on maximizing conversions.",
    image: "/images/works-bg.png",
  },
];

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("url");

  if (projectId) {
    const project = allProjects.find((p) => p.url === projectId);
    return Response.json(project || {});
  }

  return Response.json(allProjects);
}
