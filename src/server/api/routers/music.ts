import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

import { XMLParser } from "fast-xml-parser";

const getStateFromFetch = async (slug: string): Promise<any> => {
  const response = await fetch(`http://192.168.1.86:11000/${slug}`);

  const xmlString: string = (await response.text()).replaceAll("\n", "");

  const parser = new XMLParser();
  const xml = parser.parse(xmlString);

  return xml;
};

export const musicRouter = createTRPCRouter({
  play: publicProcedure.mutation(async () => {
    const { state, ...rest } = await getStateFromFetch("Play");

    console.log({ state, rest });

    // let jObj = parser.parse(xmlString);
    return {
      status: "success",
      playerState: state,
    };
  }),

  pause: publicProcedure.mutation(async ({}) => {
    const { state, ...rest } = await getStateFromFetch("Pause");

    console.log({ state, rest });

    // let jObj = parser.parse(xmlString);
    return {
      status: "success",
      playerState: state,
    };
  }),

  getStatus: publicProcedure.mutation(async ({}) => {
    const { status } = await getStateFromFetch("Status");

    // let jObj = parser.parse(xmlString);
    console.log({ status });
    return {
      status: "success",
      playerState: status,
    };
  }),
});
