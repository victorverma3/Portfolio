declare module '*.jsx' {
    interface ProjectCard {
      title: string;
      image: string;
      description: string;
      link: string;
      url: string;
    }
  
    const projectCards: ProjectCard[];
  
    const Projects: () => JSX.Element;
  
    export default Projects;
  }
  