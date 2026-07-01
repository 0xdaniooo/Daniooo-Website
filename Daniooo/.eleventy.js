import "dotenv/config";

export default function (eleventyConfig) 
{
    eleventyConfig.addPassthroughCopy({ "src/css": "css" });
    eleventyConfig.addPassthroughCopy({ "src/javascript": "javascript" });
    eleventyConfig.addPassthroughCopy({ "src/content": "content" });

    eleventyConfig.addGlobalData("env", {
        isProduction: process.env.NODE_ENV === "production",
        cloudflareToken: process.env.CF_BEACON_TOKEN || ""
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes"
        }
    };
}