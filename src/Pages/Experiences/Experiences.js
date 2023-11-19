import TimelineBox from "../../UI/timelineBox";
import classes from "./Experiences.module.less";
// import imgMom from "../../images/mom.png";
import imgPNJ from "../../images/pnj.png";
import imgNguyenKim from "../../images/nguyenkim.png";
import imgViettel from "../../images/viettel.png";
import { motion } from "framer-motion";

export const ARRAY_EXPERIENCES = [
  // {
  //   title: "03/2023 - present - Mom stay at home",
  //   content: (
  //     <div>
  //       <div className={classes.img}>
  //         <img src={imgMom} alt="03/2023 - present - Mom stay at home"></img>
  //       </div>
  //       <div className={classes.content}>
  //         <p>
  //           I moved to Gold Coast for March 2023. I just stay at home and take
  //           care my child.
  //         </p>
  //       </div>
  //     </div>
  //   ),
  // },
  {
    title:
      "06/2017 - 02/2023 - Front End Developer, Phu Nhuan Jewelry Joint Stock Company - Ho Chi Minh City, Viet Nam",
    content: (
      <>
        <div className={classes.img}>
          <img
            src={imgPNJ}
            alt="06/2017 - 02/2023 - Front End Developer, Phu Nhuan Jewelry Joint Stock
        Company - Ho Chi Minh City, Viet Nam"
          ></img>
        </div>
        <div className={classes.content}>
          <ul>
            <li>
              Project: Our team had built a new PNJ website from 2017 until now
              using open source Cs-cart. My duty is building templates for
              almost every page of the website such as homepage, detail product,
              checkout, category, and some functions related to frontend…
              Besides that, I build landing pages for promotion events. I
              support another team with problems like orders, stores, etc…
              Participation in building UI/UX for the website.
            </li>
            <li>Skill: HTML, Css(.less), Smarty PHP, Js</li>
            <li>
              Website:{" "}
              <a
                href="https://www.pnj.com.vn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.pnj.com.vn/
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title:
      "02/2017 - 05/2015 - Frontend Developer, OneCorp - Ho Chi Minh City, Viet Nam",
    content: (
      <>
        <div className={classes.content}>
          <ul>
            <li>
              Project: Build a new version for E-commerce website based on file
              design in accordance with user needs. This is online shopping
              website with many variety products such as: fashion clothes,
              footwear, stationery, functional foods,… Using Html, Css & Js to
              build these page
            </li>
            <li>This company has gone bankrupt.</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title:
      "09/2015 - 02/2017 -  Developer, Nguyen Kim Company - Ho Chi Minh City, Viet Nam",
    content: (
      <>
        <div className={classes.img}>
          <img
            src={imgNguyenKim}
            alt="09/2015 - 02/2017 -  Developer, Nguyen Kim Company - Ho Chi Minh City, Viet Nam"
          ></img>
        </div>
        <div className={classes.content}>
          <p>
            <strong>Form 9/2015 to 12/2015</strong>
          </p>
          <ul>
            <li>Position: PHP Developer</li>
            <li>
              Make to upgrade for available function for Nguyen Kim website.
              This website of E-commerce use Cs-cart open source.
            </li>
            <li>
              Website:{" "}
              <a
                href="http://www.nguyenkim.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.nguyenkim.com/
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "",
    content: (
      <>
        <div className={classes.content}>
          <p>
            <strong>From 01/2016 to 02/2017</strong>
          </p>
          <ul>
            <li>Position: HTML Developer</li>
            <li>
              Project:
              <ul className={classes.child}>
                <li>
                  {" "}
                  Super Sports Website: The website introduces a sport shop with
                  its products and supports online order. Built layouts
                  according to customer parameters using HTML, CSS3 and Js.{" "}
                  <br></br>Website:{" "}
                  <a
                    href="http://supersportsvietnam.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://supersportsvietnam.com/
                  </a>
                </li>
                <li>
                  Ecommerce B2S Website: This is an e-commerce website with full
                  features to best serve the online shopping needs of customers:
                  ordering, show products, carts, ... Built layouts according to
                  customer parameters using HTML, CSS3 and Js.
                  <br></br>Website:{" "}
                  <a
                    href="http://b2s.com.vn/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://b2s.com.vn/
                  </a>
                </li>
                <li>
                  Upgrade New Layout Website Nguyen Kim: Implement as HTML, Css
                  & JS according to available designs, cut shapes as well as
                  extract color in accordance with design, make conversion, edit
                  pages for new design such as product catalog, banner,
                  Products, popup, services of Nguyen Kim, responsive mobile.
                  Besides, during time work at Nguyen Kim, I create a lot of
                  promotion pages follow Marketing design and plan.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title:
      "10/2014 - 07/2015 - Web Developer .NET, Viettel Group - Ho Chi Minh City, Viet Nam",
    content: (
      <>
        <div className={classes.img}>
          <img
            src={imgViettel}
            alt="10/2014 - 07/2015 - Web Developer .NET, Viettel Group - Ho Chi Minh City, Viet Nam"
          ></img>
        </div>
        <div className={classes.content}>
          <ul>
            <li>
              This website allows school to management students, teachers and
              communicate with parents of student. Demonstrating the interaction
              between the school with teachers, teachers with students, the
              school + teachers width parents. My work made translate website
              and then made to build for new function or upgrade for available
              function.
            </li>
            <li>
              Website:{" "}
              <a
                href="http://smas.edu.vn"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://smas.edu.vn
              </a>
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

const Experiences = () => {
  return (
    <ul className={classes.experiences}>
      {ARRAY_EXPERIENCES.map((item, index) => {
        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.4, type: "spring" }}
          >
            <TimelineBox title={item.title}>{item.content}</TimelineBox>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default Experiences;
