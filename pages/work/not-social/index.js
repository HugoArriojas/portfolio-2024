// components
import Bulb from '../../../components/Bulb';
import Circles from '../../../components/Circles';
import WorkDetails from '../../../components/WorkDetails';

import { workObjects } from '../constants';

// framer motion
import { useEffect } from 'react';

const Work = () => {
  useEffect(() => {
    document.title = 'Hugo Arriojas - Not So Social Planner';
  }, []);

  return (
    <div className='mt-[85px] flex h-full max-h-[calc(100dvh-164px)] items-center overflow-y-auto bg-gradient-to-b from-transparent to-primary/50 xl:max-h-[calc(100dvh-85px)]'>
      <div className='container mx-auto flex h-full flex-col align-middle'>
        <div className='relative my-auto flex h-fit flex-col gap-x-8 px-2 md:px-0 xl:mr-20 xl:flex-row'>
          <WorkDetails details={workObjects.notSoSocial} />
        </div>
      </div>
      <Circles />
      <Bulb />
    </div>
  );
};

export default Work;
