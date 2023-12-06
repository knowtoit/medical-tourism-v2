import TheSimplestProcess from "../Component/Gaurav/TheSimplestProcess/index.jsx";
import FAQs from "../Component/Gaurav/FAQ/index.jsx";
import WePushTheLimit from "../Component/Gaurav/WePushTheLimit/index.jsx";
import Footer from "../Component/Gaurav/Footer/index";

import Section1Mt from "../Component/Aishwarya/Section1Mt.jsx";
import Section2Mt from "../Component/Aishwarya/Section2Mt.jsx";
import Section3Mt from "../Component/Aishwarya/Section3Mt.jsx";
// import Section4Mt from "../Component/Aishwarya/index";
const Home = () => {
  return (
    <>
      <Section1Mt />
      <Section2Mt />
      <Section3Mt />
      {/* <Section4Mt /> */}
      <WePushTheLimit cols={{ md: "6", sm: "12", xs: "12" }} />
      <FAQs />
      <TheSimplestProcess />
      <Footer />
    </>
  );
};

export default Home;
