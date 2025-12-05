import { hiring_excellence_data } from "@/data/EmployerHiringExcellenceData";
import { subFeaturesPagesData } from "@/data/FeaturesSubPagesData";
import { homePageData } from "@/data/HomePageData";
import { solutionTabs } from "@/data/ResourcesPageData";
import { getAllBlogs } from "@/lib/mdx";
import { MetadataRoute } from "next";

const blogs = await getAllBlogs();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resourceRoutes: MetadataRoute.Sitemap = [];

  blogs.forEach((b) => {
    const url = `${process.env.BASE_URL}/resources/blog/${b.slug}`;
    resourceRoutes.push({
      url: url,
      lastModified: b.date,
    });
  });

  solutionTabs.forEach((page) => {
    const pageUrl = `${process.env.BASE_URL}/resources/${page.path}`;
    page.tabs.forEach((mainTab) => {
      const mainTabUrl = `${pageUrl}/${mainTab.path}`;

      mainTab.subTabs.forEach((subTab) => {
        const subTabUrl = `${mainTabUrl}/${subTab.path}`;
        resourceRoutes.push({
          url: subTabUrl,
          lastModified: new Date("2025-10-01"),
        });
      });
    });
  });

  subFeaturesPagesData.forEach((page) => {
    resourceRoutes.push({
      url: `${process.env.BASE_URL}/features/${page.path}`,
      lastModified: new Date("2025-10-01"),
    });
  });

  hiring_excellence_data.forEach((page) => {
    resourceRoutes.push({
      url: `${process.env.BASE_URL}/employer/${page.name}`,
    });
  });

  homePageData.forEach((page) => {
    resourceRoutes.push({
      url: `${process.env.BASE_URL}/home/${page.path}`,
      lastModified: new Date("2025-10-01"),
    });
  });

  return [
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/employer`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/candidates`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/recruiters`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/features`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/resources`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/pricing`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/contact-us`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/login`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: new Date("2025-10-01"),
    },
    {
      url: `${process.env.BASE_URL}/home`,
      lastModified: new Date("2025-10-01"),
    },
    ...resourceRoutes,
  ];
}
