import TimelineBox from "../../UI/timelineBox";
import classes from "./Experiences.module.less";
// import imgMom from "../../images/mom.png";
import imgPNJ from "../../images/pnj.png";
import imgNguyenKim from "../../images/nguyenkim.png";
import imgViettel from "../../images/viettel.png";
import { motion } from "framer-motion";

export const ARRAY_EXPERIENCES = [
  {
    title:
      "06/2017 - 02/2023 - Frontend Developer, Phu Nhuan Jewelry Joint Stock Company - Ho Chi Minh City, VietNam",
    content: (
      <>
        <div className={classes.img}>
          <img
            src={imgPNJ}
            alt="06/2017 - 02/2023 - Frontend Developer, Phu Nhuan Jewelry Joint Stock
        Company - Ho Chi Minh City, VietNam"
          ></img>
        </div>
        <div className={classes.content}>
          <ul>
            <li>
              Upgraded all pages for the jewelry website such as the homepage,
              products, categories, cart,... and responsive website.
            </li>
            <li>Maintained and updated some available functions and pages.</li>
            <li>
              Created new pages and functions by requirement department like
              marketing, sales, operation,..
            </li>
            <li>
              Created promotion pages for events or discount programs of the
              company.
            </li>
            <li>
              Participated in discussions with other teams for their
              requirements of new pages or functions, evaluating and giving
              feedback for a new function or about UI/UX
            </li>
            <li>
              Worked with the design team and marketing for promotion pages
            </li>
            <li>
              Ensured loading pages under 5s, using PageSpeed Insight to check
              the time loading page.
            </li>
            <li>Skills: HTML, CSS(.less), Smarty PHP, Js</li>
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
      "03/2017 - 05/2017 - Frontend Developer, OneCorp - Ho Chi Minh City, VietNam",
    content: (
      <>
        <div className={classes.content}>
          <ul>
            <li>
              Built all pages for e-commerce website like homepage, categories,
              products, promotion pages,..
            </li>
            <li>Skills: HTML, CSS, Javascript, Jquery, Navicat,..</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title:
      "09/2015 - 02/2017 -  Developer, Nguyen Kim Company - Ho Chi Minh City, VietNam",
    content: (
      <>
        <div className={classes.img}>
          <img
            src={imgNguyenKim}
            alt="09/2015 - 02/2017 -  Developer, Nguyen Kim Company - Ho Chi Minh City, VietNam"
          ></img>
        </div>
        <div className={classes.content}>
          <ul>
            <li>Position: PHP Developer</li>
            <li>Maintained and fixed bugs in the available functions.</li>
            <li>Upgraded the available functions.</li>
            <li>Created and upgraded new pages for Nguyen Kim's website.</li>
            <li>Made promotion pages for events or discount programs</li>
            <li>Built other websites for partners.</li>
            <li>Skills: PHP, Smarty, HTML, CSS, Javascript, Jquery,..</li>
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
    title:
      "10/2014 - 07/2015 - Web Developer .NET, Viettel Group - Ho Chi Minh City, VietNam",
    content: (
      <>
        <div className={classes.img}>
          <img
            src={imgViettel}
            alt="10/2014 - 07/2015 - Web Developer .NET, Viettel Group - Ho Chi Minh City, VietNam"
          ></img>
        </div>
        <div className={classes.content}>
          <ul>
            <li>Maintained and fixed bugs in the available functions.</li>
            <li>
              Built new functions like student management, and management of
              school schedules,...
            </li>
            <li>Upgraded the available functions</li>
            <li>Skills: SQL, .NET, HTML, CSS, Javascript, Jquery,..</li>
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
