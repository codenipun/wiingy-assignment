import FirstImage from './assets/image1.gif'
import SecondImage from './assets/image3.gif'
import ThirdImage from './assets/image2.gif'
import CardContainer from './components/CardCotainer/CardContainer';
import "./App.css"
function App() {
  const cards = [
    {
      heading : "Concept understanding",
      description : "Learn coding, math, science, computer science, and 100+ other subjects with personalized tutoring. Get 1-on-1 online support to build conceptual understanding for your class or course.",
      imgSrc : FirstImage 
    },
    {
      heading : "Homework Help",
      description : "Overcome academic challenges effortlessly with our homework help service. Our tutors for school and college are here to guide you through asignments, clarigy doubts and build confidence.",
      imgSrc : SecondImage 
    },
    {
      heading : "Test Prep",
      description : "Prepare for success with our comprehensive test preparation service. Our skilled tutors specialize in exam strategies, content review and practice sessions to help you ace your SAT, ACT, AP Tests and more.",
      imgSrc : ThirdImage
    },
  ]
  return (
    <div className="App">
      <CardContainer cards={cards}/>
      <footer className='footer'>Designed and Developer by <a href='https://linkedin/in/nipun18' target='_black' className='name'>NIPUN JAIN</a></footer>
    </div>
  );
}

export default App;
