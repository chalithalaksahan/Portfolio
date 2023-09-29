import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper} from '../hoc';
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}
      >What I done so far</p>
        <h2 className={styles.sectionHeadText}
        >Work Experience.</h2>
      </motion.div>

      <div className="flex mt-20-col">
          <test>
            try to test 
            
          </test>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience");
