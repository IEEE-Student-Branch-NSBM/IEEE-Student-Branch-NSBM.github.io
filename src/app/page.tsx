import ImageSwitcher from "@/components/ImageSwitcher";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
export default function VM() {
  return (
    <div className="xl:px-40 px-3">
      <div className="grid justify-items-center lg:grid-cols-3 grid-cols-3 mb-10 mt-10">
        <img src="Images\IEEE NSBM SB LOGO REBUILD - BLUE 1.svg" className="w-28 sm:w-48 lg:w-64" alt="SBLogo" />
        <img src="Images\WIE LOGO REBUILD - Color 1.svg" className="w-16 sm:w-28 lg:w-40 lg:ms-6 ms-1 me-1" alt="WIELogo" />
        <ImageSwitcher/>
      </div>
      <div className="grid justify-items-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
          <Card className="shadow-lg sm:w-96 border-2 mt-5" id="card">
            <CardHeader>
              <CardTitle className="text-lg font-bold flex" id="cardTitle"><img src="Images\Mission.svg" className="w-6 pe-1 pb-0.5" alt="missionLogo" id="cardImg"/>OUR MISSION</CardTitle>
              <CardDescription className="text-sm text-slate-700" id="cardDes">The Student Chapter of IEEE NSBM advises the community on ethics policy and concerns as well as fostering awareness on ethical issues and 
                promoting ethical behavior amongst individuals and organizations working within the IEEE fields of interest.</CardDescription>
            </CardHeader>
          </Card>
          <div className="sm:hidden xl:hidden"></div>
          <Card className="shadow-lg sm:w-96 border-2 mt-5" id="card">
            <CardHeader>
              <CardTitle className="text-lg flex" id="cardTitle"><img src="Images\Vision.svg" className="w-6 pe-1 pb-0.5" alt="visionLogo" id="cardImg"/>OUR VISION</CardTitle>
              <CardDescription className="text-sm text-slate-700" id="cardDes">A world in which engineers and scientists are respected for their exemplary ethical behavior and the IEEE and its Ethics & Member Conduct 
                Committee are recognized as a major drive in this regard.</CardDescription>
            </CardHeader>
          </Card>
      </div>
    </div>
  );
}