import Image from "next/image";
import InfiniteScroll from "./InfiniteScroll";
import { companies } from "@/data/data";

const Companies = () => {
  return (
    <div className="relative ">
      <InfiniteScroll space="lg">
        {companies.map((company, index) => (
          <div key={index} className="flex">
            <Image src={company} alt="company logo" width={170} height={170} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Companies;
