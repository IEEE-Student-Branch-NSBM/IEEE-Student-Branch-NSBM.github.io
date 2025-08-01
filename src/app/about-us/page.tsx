import CSLogo from "@/assets/ieee-cs-colored-black.png";
import JoinUsImage from "@/assets/join-us.png";
import SBLogo from "@/assets/logo new.png";
import WIELogo from "@/assets/wie-logo-bar-colored.png";
import AboutSection from "@/components/about-us/about-section";
import ShapeFuture from "@/components/index/shape-future";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col gap-8 my-8 w-full">
      <div className="w-full">
        <AboutSection
          firstTitle="IEEE"
          secondTitle="NSBM"
          subtitle="IEEE STUDENT BRANCH OF NSBM"
          imageSrc={SBLogo}
          socialLinks={[
            {
              platform: "facebook",
              link: "https://www.facebook.com/ieeensbm",
            },
            {
              platform: "linkedin",
              link: "https://www.linkedin.com/company/ieeesbnsbm/",
            },
            {
              platform: "instagram",
              link: "https://www.instagram.com/ieee_nsbm",
            },
          ]}
          description={`stablished in 2015, the IEEE Student Branch at NSBM Green University is part of the global IEEE community, bringing together members from the Faculty of Computing and the Faculty of Engineering of NSBM. This branch offers students the chance to enhance their knowledge and skills in electrical engineering, electronics, computing, and related fields, all while encouraging personal and professional growth.
As part of IEEE’s extensive network, the IEEE Student Branch of NSBM connects students to valuable resources, including workshops, conferences, and networking opportunities. We aim to support students in developing their leadership skills, advancing technology, and making meaningful contributions to their communities.`}
        />
      </div>
      <div className="w-full">
        <AboutSection
          firstTitle="WIE"
          secondTitle="Affinity Group"
          firstTitleColor="#702f8a"
          subtitle="WOMEN IN ENGINEERING AFFINITY GROUP OF NSBM"
          imageSrc={WIELogo}
          imagePosition="left"
          socialLinks={[
            {
              platform: "facebook",
              link: "https://www.facebook.com/nsbmwie",
            },
            {
              platform: "linkedin",
              link: "https://www.linkedin.com/company/ieee-women-in-engineering-nsbm/",
            },
            {
              platform: "instagram",
              link: "https://www.instagram.com/ieeewie_nsbm",
            },
          ]}
          description={`IEEE Women in Engineering (WIE) is a global platform of IEEE members and volunteers dedicated to advancing women engineers and scientists and empowering young girls throughout the world to pursue academic interests in engineering and scientific professions. 
            Women in Engineering Affinity Group of NSBM (WIE NSBM) is one of the student branch chapters of the global network which uplifts the women in leadership roles in industry as well as international platforms.`}
        />
      </div>
      <div className="w-full">
        <AboutSection
          firstTitle="COMPUTER SOCIETY"
          secondTitle="NSBM"
          firstTitleColor="#ffa300"
          subtitle="COMPUTER SOCIETY STUDENT BRANCH CHAPTER OF NSBM"
          imageSrc={CSLogo}
          socialLinks={[
            {
              platform: "facebook",
              link: "https://www.facebook.com/ieeecsnsbm",
            },
            {
              platform: "linkedin",
              link: "https://www.linkedin.com/company/ieee-computer-society-nsbm/",
            },
            {
              platform: "instagram",
              link: "https://www.instagram.com/ieeecs_nsbm",
            },
          ]}
          description={`IEEE Computer Society (often abbreviated as the Computer Society or CS) is a professional society of the Institute of Electrical and Electronics Engineers (IEEE). Its purpose is "to advance the theory, practice, and application of computer and information processing science and technology" and the "professional standing of its members". The CS is the largest of 39 technical societies organised under the IEEE Technical Activities Board.
The IEEE Computer Society sponsors workshops and conferences, publishes a variety of peer-reviewed literature, operates technical committees, and develops IEEE computing standards. It supports more than 200 chapters worldwide and participates in educational activities at all levels of the profession, including distance learning, accreditation of higher education programs in computer science, and professional certification in software engineering.`}
        />
      </div>
      <ShapeFuture />
    </div>
  );
}
