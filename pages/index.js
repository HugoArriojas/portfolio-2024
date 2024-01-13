import ProjectsBtn from '../components/ProjectsBtn';
const Home = () => {
  return (
      {/* Text */}
      <div>
        <div>
          {/* Name */}
          <h1>
            Hugo&nbsp;<span className="text-accent">Arriojas</span>
          </h1>
          <p>
            Software engineer & scrum master with experience in white label
            e-commerce solutions
          </p>
          <div>
            <ProjectsBtn />
          </div>
        </div>
      </div>
  );
};

export default Home;
