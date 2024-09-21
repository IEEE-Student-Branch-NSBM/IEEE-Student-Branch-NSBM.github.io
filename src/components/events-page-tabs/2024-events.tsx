import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function TwentyFourEvents() {
  return (
    <div className="mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto max-w-[390px] md:max-w-[690px] lg:max-w-[850px] xl:max-w-[1100px] gap-5">
        <Card className="bg-slate-300 rounded-xl ">
          <CardHeader>
            <Image
              src="https://via.placeholder.com/1920x1080/eee?text=16:9"
              alt="duothan 4.0"
              width={1600}
              height={900}
              className="mx-auto mb-5 aspect-video"
            />
            <CardTitle>Duothan 4.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm lg:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque tempora laborum consequatur illum, earum iusto cumque
              odio! Ab rerum nam, facere delectus consequuntur in aspernatur
              perspiciatis quidem perferendis nesciunt, voluptate eius magnam
              quo quis quos error! Fuga, quibusdam eius reiciendis accusamus
              veritatis, magni inventore perspiciatis ad quisquam dolore laborum
              facilis.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-blue-950 text-white border-none">
              <Link href="#">View More</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-slate-300 rounded-xl">
          <CardHeader>
            <Image
              src="https://via.placeholder.com/1920x1080/eee?text=16:9"
              alt="2024 events"
              width={1600}
              height={900}
              className="mx-auto mb-5 aspect-video"
            />
            <CardTitle>Skill Share 1.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-justify text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque tempora laborum consequatur illum, earum iusto cumque
              odio! Ab rerum nam, facere delectus consequuntur in aspernatur
              perspiciatis quidem perferendis nesciunt, voluptate eius magnam
              quo quis quos error! Fuga, quibusdam eius reiciendis accusamus
              veritatis, magni inventore perspiciatis ad quisquam dolore laborum
              facilis.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-blue-950 text-white border-none">
              <Link href="#">View More</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-slate-300 rounded-xl">
          <CardHeader>
            <Image
              src="https://via.placeholder.com/1920x1080/eee?text=16:9"
              alt="2024 events"
              width={1600}
              height={900}
              className="mx-auto mb-5 aspect-video"
            />
            <CardTitle>IEEE Day 2024</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm lg:text-base text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque tempora laborum consequatur illum, earum iusto cumque
              odio! Ab rerum nam, facere delectus consequuntur in aspernatur
              perspiciatis quidem perferendis nesciunt, voluptate eius magnam
              quo quis quos error! Fuga, quibusdam eius reiciendis accusamus
              veritatis, magni inventore perspiciatis ad quisquam dolore laborum
              facilis.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild className="bg-blue-950 text-white border-none">
              <Link href="#">View More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
