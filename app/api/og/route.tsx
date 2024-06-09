import { NextRequest } from "next/server";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";

const interBold = fetch(
  new URL("../../../assets/fonts/Inter-Bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const fontBold = await interBold;

    const { searchParams } = req.nextUrl;
    const title = searchParams.get("title");

    if (!title) {
      return new Response("Title Not Provided", { status: 500 });
    }

    const heading =
      title.length > 140 ? `${title.substring(0, 140)}...` : title;

    return new ImageResponse(
      (
        <div tw="flex relative flex-col p-12 w-full h-full items-start text-black bg-white" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
        }}>
          <div tw="flex items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 120 120"
            >
              <path
                d="M0 0 C15.18 0 30.36 0 46 0 C46 15.58308811 46 15.58308811 42.18896484 19.7019043 C41.65223145 20.21277588 41.11549805 20.72364746 40.5625 21.25 C40.02061035 21.82081299 39.4787207 22.39162598 38.92041016 22.97973633 C37.82569517 24.13004105 36.71741097 25.26760195 35.59521484 26.39111328 C33.26207924 28.74424515 31.07759422 31.21182721 28.875 33.6875 C27.81925781 34.83798828 27.81925781 34.83798828 26.7421875 36.01171875 C24.84837219 38.08536952 24.84837219 38.08536952 23 41 C30.59 41.33 38.18 41.66 46 42 C46 46.62 46 51.24 46 56 C30.16 56 14.32 56 -2 56 C-2 41.39856373 -2 41.39856373 1.6875 37.625 C2.90179688 36.31402344 2.90179688 36.31402344 4.140625 34.9765625 C4.59244141 34.5115332 5.04425781 34.04650391 5.50976562 33.56738281 C7.82348804 31.13388053 9.99538422 28.58170867 12.18481445 26.03662109 C13.33634174 24.69854607 14.49357955 23.3653603 15.65698242 22.03759766 C16.19170166 21.42706543 16.7264209 20.8165332 17.27734375 20.1875 C17.75421631 19.64480469 18.23108887 19.10210938 18.72241211 18.54296875 C20.19804601 16.81494601 20.19804601 16.81494601 22 14 C14.74 14 7.48 14 0 14 C0 9.38 0 4.76 0 0 Z "
                fill="currentColor"
                transform="translate(8,0)"
              />
              <path
                d="M0 0 C11.22 0 22.44 0 34 0 C34 12 34 12 30.71875 16.453125 C29.34221205 17.75100364 27.93480596 19.01684244 26.5 20.25 C25.78457031 20.91128906 25.06914063 21.57257812 24.33203125 22.25390625 C22.58092154 23.86492719 20.7938886 25.43675422 19 27 C23.95 27.33 28.9 27.66 34 28 C34 31.96 34 35.92 34 40 C22.12 40 10.24 40 -2 40 C-2 28 -2 28 1.28125 23.546875 C2.65778795 22.24899636 4.06519404 20.98315756 5.5 19.75 C6.57314453 18.75806641 6.57314453 18.75806641 7.66796875 17.74609375 C9.41907846 16.13507281 11.2061114 14.56324578 13 13 C8.71 12.67 4.42 12.34 0 12 C0 8.04 0 4.08 0 0 Z "
                fill="currentColor"
                transform="translate(60,30)"
              />
              <path
                d="M0 0 C10.56 0 21.12 0 32 0 C32 11.49306431 32 11.49306431 26.6875 17.375 C26.18798828 17.96410156 25.68847656 18.55320312 25.17382812 19.16015625 C24.24397387 20.25627584 23.30406291 21.34401594 22.3503418 22.41943359 C20.81826519 24.21271943 19.41517766 26.11309645 18 28 C22.62 28 27.24 28 32 28 C32 31.3 32 34.6 32 38 C21.44 38 10.88 38 0 38 C0 26.50693569 0 26.50693569 5.3125 20.625 C5.81201172 20.03589844 6.31152344 19.44679688 6.82617188 18.83984375 C7.75602613 17.74372416 8.69593709 16.65598406 9.6496582 15.58056641 C11.18173481 13.78728057 12.58482234 11.88690355 14 10 C9.38 10 4.76 10 0 10 C0 6.7 0 3.4 0 0 Z "
                fill="currentColor"
                transform="translate(22,62)"
              />
            </svg>
            <p tw="ml-2 font-bold text-5xl">Let Me Sleep</p>
          </div>
          <div tw="flex flex-col flex-1 py-10">
            <div tw="flex text-3xl uppercase font-bold tracking-tight font-normal">
              Brain Dump
            </div>
            <div tw="flex text-[80px] font-bold text-[50px]">{heading}</div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div tw="flex text-xl">{siteConfig.url}</div>
            <div tw="flex items-center text-xl">
              <div tw="flex ml-2">{siteConfig.links.github}</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontBold,
            style: "normal",
            weight: 700,
          },
        ],
      }
    );
  } catch (error) {
    return new Response("Failed To Generate Image", { status: 500 });
  }
}
