export default function joinUs() {
  return (
    <div className="container mx-auto lg:w-[1170px] px-4 md:px-0">
      {/* Section1*/}

      <div className="mt-10 flex  flex-col items-center  ">
        <h1 className="md:text-[3.270rem] text-[2.170rem] font-bold text-center ">
          How to get an IEEE Membership
        </h1>
        <p className=" w-auto lg:w-[1170px] mt-6 text-center">
          Reach your full potential as part of the world’s largest technology
          community. Membership in IEEE is open to individuals who by education
          or experience give evidence of competence in an IEEE-designated field.
          Refer to the informational video below to get an idea. In contrast
        </p>

        <a
          href="/pdfs/ieee-membership-guide.pdf"
          download
          className="text-primaryLight font-semibold hover:underline"
        >
          Click here to download the instructional PDF
        </a>
      </div>

      {/* Section2*/}

      <div className="mt-10 flex  flex-col items-center ">
        <h1 className="md:text-[3.270rem] text-[2.170rem] font-bold text-center ">
          How to Join IEEE National Level Projects
        </h1>
        <p className=" w-auto lg:w-[1170px] mt-6 text-center">
          first you can get IEEE Membership and then you can join our national
          projects. There are 3 categories in our national level projects
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-6 ">
          <h1 className=" px-4 py-2 bg-blue text-white rounded  transition-colors duration-300">
            1. Member Activity
          </h1>
          <h1 className=" px-4 py-2 bg-blue text-white rounded  transition-colors duration-300">
            2. Technical Activity
          </h1>
          <h1 className=" px-4 py-2 bg-blue text-white rounded  transition-colors duration-300">
            3. Young Profesionals
          </h1>
        </div>

        <p className=" w-auto lg:w-[1170px] mt-6 text-center">
          Reach your full potential as part of the world’s largest technology
          community. Membership in IEEE is open to individuals who by education
          or experience give evidence of competence in an IEEE-designated field.
          Refer to the informational video below to get an idea. In contrast
        </p>
        <a
          href="/pdfs/ieee-membership-guide.pdf"
          download
          className="text-primaryLight font-semibold hover:underline"
        >
          Click here to download the instructional PDF
        </a>
      </div>

      {/* Section3*/}

      <div className="py-8">
        <div className="w-full flex justify-center">
          <div
            className="relative mb-4"
            style={{ width: "100%", paddingBottom: "45%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/bFQzQ9av6eM?si=B7T6_yRbaIHNGqYL"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>

        {/* Section4*/}

        <div className="w-full flex justify-center mt-2 ">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            style={{ width: "100%" }}
          >
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/msCpKC7yhhU"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/bFQzQ9av6eM"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="relative" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/el0A0U7bJ6c"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
