import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import detailImg from "../../assets/detail.png";
import { FaXTwitter } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
const DetailContainer = () => {
  return (
    <section className="mb-20 container max-w-3xl">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-5">Introduction</h2>
      <p className="text-gray-700">
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id.
      </p>
      <br />
      <p className="text-gray-700 mb-10">
        Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis
        at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce
        augue enim. Quis at habitant diam at. Suscipit tristique risus, at
        donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales
        id est ac volutpat.
      </p>
      <div className="">
        <img src={detailImg} alt="" className="w-full rounded" />
      </div>
      <div className="pt-6">
        <p className="border-l-4 rounded border-gray-700 ps-5">
          Image caption goes here
        </p>
      </div>
      <p className="mt-10  font-medium">
        Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio
        nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi
        bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
      </p>
      <br />
      <p>
        Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
        commodo consectetur convallis risus. Sed condimentum enim dignissim
        adipiscing faucibus consequat, urna. Viverra purus et erat auctor
        aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
        aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
        ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc
        lectus in tellus, pharetra, porttitor.
      </p>
      <br />
      <div className="">
        <p className="italic font-medium border-l-4 rounded border-gray-700 ps-5">
          &quot;Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
          mauris id. Non pellentesque congue eget consectetur turpis. Sapien,
          dictum molestie sem tempor. Diam elit, orci, tincidunt aenean
          tempus.&quot;
        </p>
      </div>
      <br />
      <p>
        Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit
        duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam
        tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan.
        Cursus viverra aenean magna risus elementum faucibus molestie
        pellentesque. Arcu ultricies sed mauris vestibulum.
      </p>
      <h2 className="text-2xl sm:text-3xl mt-5 mb-6 font-semibold">
        Conclusion
      </h2>
      <p>
        Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
        scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit
        elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque
        amet nulla purus habitasse.
      </p>
      <br />
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
        condimentum mi massa. In tincidunt pharetra consectetur sed duis
        facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
        dictum eget nibh tortor commodo cursus.
      </p>
      <br />
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
        Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
        ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
        posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
        cursus diam.
      </p>
      <h4 className="text-lg font-semibold mt-10 mb-2">Share this post</h4>
      <div className="flex flex-wrap gap-7 justify-between items-center">
        <div className="social_link flex items-center gap-3">
          <a
            className="w-8 h-8 duration-500 hover:bg-primaryGreen rounded-full grid place-items-center border bg-slate-100 border-gray-200 text-primaryGreen hover:text-white"
            href="https://www.facebook.com"
            target="_black"
          >
            <FaFacebookF />
          </a>
          <a
            className="w-8 h-8 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border bg-slate-100 border-gray-200 text-primaryGreen hover:text-white"
            href="https://www.facebook.com"
            target="_black"
          >
            <FaXTwitter />
          </a>
          <a
            className="w-8 h-8 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border bg-slate-100 border-gray-200 text-primaryGreen hover:text-white"
            href="https://www.linkedin.com"
            target="_black"
          >
            <FaLinkedinIn />
          </a>
          <a
            className="w-8 h-8 rounded-full duration-500 hover:bg-primaryGreen grid place-items-center border bg-slate-100 border-gray-200 text-primaryGreen hover:text-white"
            href="https://www.youtube.com"
            target="_black"
          >
            <FaYoutube />
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="px-3 py-1 text-sm rounded bg-slate-200">
            Tag one
          </button>
          <button className="px-3 py-1 text-sm rounded bg-slate-200">
            Tag two
          </button>
          <button className="px-3 py-1 text-sm rounded bg-slate-200">
            Tag three
          </button>
          <button className="px-3 py-1 text-sm rounded bg-slate-200">
            Tag four
          </button>
        </div>
      </div>
      <hr className="my-7" />
      <div className="flex gap-3">
        <Avatar className="w-12 h-12 rounded-full">
          <AvatarImage
            src="https://i.ibb.co.com/s6B8T0W/author.jpg"
            className="object-cover w-full h-full rounded-full"
          />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <div className="">
          <h5 className="font-medium text-lg">Joan Doe</h5>
          <div className="flex gap-1 text-sm text-gray-700">
            <span>Job title</span> .<span>Company name</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContainer;
