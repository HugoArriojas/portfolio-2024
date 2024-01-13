// next link
import Link from 'next/link';

// icon
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div>
      <Link href={'/work'}>
        Projects Btn
        <HiArrowRight></HiArrowRight>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
