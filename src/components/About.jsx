// import React from 'react';
// 
// 

// 
// 
// 

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview</h2>
//       </motion.div>
//     </>
//   )
// }

// export default About;
import React from "react";
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction</p>
        <h3 className={styles.heroHeadText}>Overview</h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque molestiae recusandae est illum laboriosam quae fuga provident dolor odit iste! Pariatur quisquam dolor dolorum accusantium in ipsum. Labore minima accusantium impedit quos consequuntur accusamus sequi ipsam voluptates corporis doloribus amet at incidunt quo, expedita est quis provident deleniti cum cumque beatae repudiandae? Id laudantium distinctio cum illo amet laborum veritatis officia unde consequuntur mollitia, deserunt magnam temporibus debitis nostrum sunt.
      </motion.p>

      <div>
        
      </div>
    </>
  )
}

export default About