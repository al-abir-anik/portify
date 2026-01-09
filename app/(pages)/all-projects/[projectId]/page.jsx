import GetInTouch from "@/components/GetInTouch";
import { oswald } from "@/lib/fonts";

const ProjectDetailsPage = async ({ params }) => {
  const { projectId } = await params;

  console.log(projectId);

  const res = await fetch(
    `http://localhost:3000/api/projects?url=${projectId}`
  );
  // https://portfolio-template-zeta-murex.vercel.app
  const project = await res.json();

  if (!project || !project.title) {
    return <p>Project not found</p>;
  }

  return (
    <>
      <section className="w-full max-w-[1200px] px-[30px] pt-[196px] pb-[30px] mx-auto flex flex-col gap-[70px]">
        {/* work title & live site btn */}
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <h2 className="w-fit h-fit font-medium text-[64px] leading-[80%]">
            {project.title}
          </h2>
          <p className="w-full max-w-[612px] text-xl text-zinc500 text-center leading-[150%]">
            This project tackles core challenge by building a intuitive digital
            experience focused on maximizing conversions.
          </p>
          <button className="w-fit btn-primary bg-white">
            <p className="font-medium ">Visit Live Site</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.6699 9.62403L7.7939 17.5L6.5 16.2061L14.3751 8.33013H7.43428V6.5H17.5V16.5657H15.6699V9.62403Z"
                fill="url(#paint0_radial_787_2627)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_787_2627"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(17.5 12) rotate(180) scale(11)"
                >
                  <stop stopColor="#F64617" />
                  <stop offset="1" stopColor="#FD6E32" />
                </radialGradient>
              </defs>
            </svg>
          </button>
        </div>

        {/* top banner */}
        <figure className="w-full h-[600px] relative rounded-3xl overflow-hidden select-none">
          <img
            src="/images/workTopBanner.png"
            alt="work-image"
            className="object-cover object-center"
          />
        </figure>

        {/* work details */}
        <div className="flex flex-col gap-4 text-xl">
          {/* 1 */}
          <div className="w-full flex items-center justify-between">
            <span className="w-fit flex gap-[70px]">
              <p className="w-[72px] leading-[150%] text-zinc500">Title</p>
              <p>:</p>
            </span>
            <p className="w-[138px] font-medium">{project.title}</p>
          </div>
          {/* 2 */}
          <div className="w-full flex items-center justify-between">
            <span className="w-fit flex gap-[70px]">
              <p className="w-[72px] leading-[150%] text-zinc500">Industry</p>
              <p>:</p>
            </span>
            <p className="w-[138px] font-medium">Telecom</p>
          </div>
          {/* 3 */}
          <div className="w-full flex items-center justify-between">
            <span className="w-fit flex gap-[70px]">
              <p className="w-[72px] leading-[150%] text-zinc500">Timeline</p>
              <p>:</p>
            </span>
            <p className="w-[138px] font-medium">Sep 25 - Oct 25</p>
          </div>
          {/* 4 */}
          <div className="w-full flex items-center justify-between">
            <span className="w-fit flex gap-[70px]">
              <p className="w-[72px] leading-[150%] text-zinc500">Industry</p>
              <p>:</p>
            </span>
            <p className="w-[138px] font-medium">Telecom</p>
          </div>
        </div>

        {/* work section 1 */}
        <div className="w-full flex items-center gap-[30px]">
          <figure className="w-[560px] h-[560px] flex-shrink-0 relative overflow-hidden select-none">
            <img
              src="/images/workImg2.png"
              alt="work-image"
              className="rounded-3xl object-cover"
            />
          </figure>
          <p className="w-auto text-2xl font-medium leading-[130%]">
            Connecto is a telecom app for recharges, tracking, support, and
            seamless everyday mobile management, designed for modern users.
          </p>
        </div>

        {/* work section 2 */}
        <div className="w-full flex items-center gap-[70px]">
          <div className="flex flex-col gap-8">
            <h5
              className={`${oswald.className} text-[120px] font-medium leading-[100%]`}
            >
              92%
            </h5>
            <span className="flex flex-col gap-5">
              <h6 className="text-2xl font-medium leading-[100%]">
                Smoother Navigation
              </h6>
              <p className="w-auto text-xl text-zinc500 leading-[150%]">
                This project tackles core challenge by building a intuitive
                digital experience focused on maximizing conversions.
              </p>
            </span>
          </div>
          <figure className="w-[560px] h-[560px] flex-shrink-0 relative overflow-hidden select-none">
            <img
              src="/images/workImg1.png"
              alt="work-image"
              className="rounded-3xl object-cover object-left"
            />
          </figure>
        </div>

        {/* description */}
        <p className="w-[1054px] text-2xl leading-[130%]">
          Connecto is a telecom app for recharges, tracking, support, and
          seamless everyday mobile management, designed for modern users.
          Connecto is a telecom app for recharges, tracking, support, and
          seamless everyday mobile management, designed for modern users.
        </p>

        {/* bottom banner */}
        <figure className="w-full h-[600px] relative rounded-3xl overflow-hidden select-none">
          <img
            src="/images/workBottomBanner.png"
            alt="work-image"
            className="object-cover object-center"
          />
        </figure>
      </section>

      <GetInTouch />
    </>
  );
};

export default ProjectDetailsPage;
