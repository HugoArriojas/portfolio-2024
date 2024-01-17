// components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

const Work = () => {
  return (
    <div >
      <div className="h-full container mx-auto flex flex-col align-middle">
        <div className="flex flex-col">
          {/* text */}
          <div className="text-center flex flex-col  xl:mb-0 ">
            <h2
            >
              My work
            </h2>
            <p
            >
              Having worked at Mercatus, I have a great deal of experience
              creating accessible & scalable white-label e-commerce products for
              a variety of clients.
              <br />
              As I&apos;m in the process of obtaining permission to cite
              examples, here are some of my projects from bootcamp:
            </p>
          </div>

          {/* slider */}
          <div
          >
            <WorkSlider />
          </div>
        </div>
      </div>
      <Circles />
      <Bulb />
    </div>
  );
};

export default Work;
