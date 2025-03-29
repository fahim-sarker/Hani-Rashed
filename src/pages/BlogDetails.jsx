import Newsletter from "../components/blog/Newsletter";
import DetailBanner from "../components/blogDetails/DetailBanner";
import DetailContainer from "../components/blogDetails/DetailContainer";
import RelatedPost from "../components/blogDetails/RelatedPost";

const BlogDetails = () => {
  return (
    <>
      <DetailBanner />
      <DetailContainer />
      <Newsletter />
      <RelatedPost />
    </>
  );
};

export default BlogDetails;
