import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

/** @type {import("nextra-theme-docs/.").DocsThemeConfig} */
export default {
  logo: <span>Minecraft Pack Wiki</span>,
  project: {
    link: "https://github.com/moddedmc-wiki/minecraft-pack-wiki",
  },
  chat: {
    link: "https://discord.gg/j6CKgT5yR3",
  },
  docsRepositoryBase:
    "https://github.com/moddedmc-wiki/minecraft-pack-wiki/blob/main/",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/icon.png" />
    </>
  ),
  useNextSeoProps: () => {
    const { route } = useRouter();
    const { frontMatter } = useConfig();

    /** @type {import("next-seo").NextSeoProps} */
    let seoProps = {};

    if (route !== "/" || !frontMatter.title || frontMatter.title != "Homepage") {
      seoProps.title = `${frontMatter.title} - Minecraft Pack Wiki`;
    } else {
      seoProps.title = "Minecraft Pack Wiki";
    }

    seoProps.description =
      frontMatter.description ||
      "An open source guide-book for creating resource packs and datapacks for Minecraft: Java Edition.";

    seoProps.openGraph = {
      images: [
        {
          type: "image/png",
          alt: "Cover Image",
          url: `https://og.mineblock11.dev/minecraft-pack-wiki?title=${encodeURIComponent(
            frontMatter.title || "Minecraft Pack Wiki"
          )}&description=${encodeURIComponent(
            frontMatter.description ||
              "An open source guide-book for creating resource packs and datapacks for Minecraft: Java Edition."
          )}&path=${route || "/"}`,
        },
      ],
    };

    seoProps.twitter = {
      cardType: "summary_large_image",
    };

    return seoProps;
  },
  primaryHue: {
    dark: 180,
    light: 72,
  },
  sidebar: {
    toggleButton: true,
  },
  toc: {
    float: true,
    extraContent: () => {
      return <></>;
    },
  },
  footer: {
    text: (
      <span>
        Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International{" "}
        {new Date().getFullYear()} ©{" "}
        <a href="https://mineblock11.dev/" target="_blank">
          Calum H. (mineblock11)
        </a><br />Not affliated with Mojang.
      </span>
    ),
  },
};
