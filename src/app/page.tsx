import Image from "next/image";
import niceimage from "./download9.jpeg"
import simage from "./download (2).jpeg"
export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-5">
      <div className="bg-ryzen-850 rounded-full inline-flex items-center p-5 col-span-2 row-span-1 text-white font-bold">Home page
        
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex items-center p-5 col-span-4 row-span-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rem pariatur minus eveniet! In esse, ab dolores nam quibusdam omnis totam quas voluptatum ratione minus, iste aperiam! Minus, obcaecati aut.
      </div>
      <div className="bg-ryzen-850 rounded-2xl inline-flex items-center p-5 col-span-4 row-span-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, exercitationem nobis amet quae magni unde architecto itaque modi, odio tenetur fugiat aperiam, delectus reprehenderit velit ipsam officia? A, labore dolores?
      </div>
      <div className="bg-ryzen-900 rounded-2xl inline-flex items-center  col-span-2 row-span-3">
      <Image src={niceimage} alt="Description of Mizu" className="object-cover  rounded-3xl" />
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex items-center p-5 col-span-2 row-span-5">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum explicabo voluptatibus voluptates aut nostrum omnis, natus facilis officiis ipsum. Eveniet?
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex items-center p-5 col-span-4 row-span-3">
        6
      </div>
      <div className="bg-ryzen-950 rounded-2xl inline-flex items-center p-5 col-span-2 row-span-7">
        7
      </div>
      <div className="bg-ryzen-850 rounded-2xl row-start-7 row-end-11 col-start-1 col-end-11"></div>
    </div>
  );
}
