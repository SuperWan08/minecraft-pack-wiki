import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

/** @type {import("nextra-theme-docs/.").DocsThemeConfig} */
export default {
  logo: <span class="flex flex-row gap-4">
  <img
    class="align-baseline"
    width="21"
    height="21"
    src="/icon.svg"
  />
  <span class="hide-logo-text">Minecraft Pack Wiki</span>
</span>,
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
      <link rel="icon" type="image/png" href="/icon_full.png" />
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
          url: `/icon_full.png`,
        },
      ],
    };

    seoProps.twitter = {
      cardType: "app",
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
