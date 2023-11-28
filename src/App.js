import Navbar from "./components/Navbar";
import About from "./components/About";
import Users from "./components/Users";

// import About from "./components/About";
function App(props) {
  let userList = [
    {
      imageUrl: "https://www.shutterstock.com/image-photo/young-beautiful-girl-preparing-exams-260nw-622036163.jpg",
      title: "Bisma",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageUrl:"https://c4.wallpaperflare.com/wallpaper/292/244/1008/apple-apple-computer-boy-code-wallpaper-preview.jpg",
      title: "Alqama",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      imageUrl:"https://c4.wallpaperflare.com/wallpaper/292/244/1008/apple-apple-computer-boy-code-wallpaper-preview.jpg",
      title: "Hanzala",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <>
      <Navbar title="Bisma"/>
      <Users userList={userList}/>
      <About />
      
    </>
  );
}

export default App;
