import "./App.css";
import About from "./components/About";
import Book from "./components/Book";
import Cart from "./components/Cart";
import Devalopers from "./components/Devalopers";
import Header from "./components/Header";
import LoginForma from "./components/LoginForma";
import Navbar from "./components/Navbar";
import Reclama from "./components/Reclama";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div className="pt-[100px] linerbg mt-10 pb-11">
        <div>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="xl:text-[38px] w-[90%]  m-auto text-[28px] text-center font-bold"
          >
            What Will You Get From This Book?
          </p>
          <p className="text-center flex justify-center text-[19px] w-[90%] xl:w-[48%] lg:w-[80%] md:w-[85%] m-auto mt-5 text-[#4c527d]">
            Section intro goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer blandit consequat consequat. Orci varius
            natoque penatibus et magnis.
          </p>
        </div>
        <div>
          <Cart />
        </div>
        <div className="mt-[130px]">
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="xl:text-[38px] w-[90%]  m-auto text-[28px] text-center font-bold"
          >
            What's Included
          </p>
          <div className="mt-11">
            <Reclama />
          </div>
        </div>
        <div className="mt-[90px]">
          <div>
            <p
              style={{ fontFamily: "Quicksand, sans-serif" }}
              className="xl:text-[38px] w-[90%]  m-auto text-[28px] text-center font-bold"
            >
              Who This Book Is For
            </p>
            <p className="text-center flex justify-center text-[19px] w-[90%] xl:w-[48%] lg:w-[80%] md:w-[85%] m-auto mt-5 text-[#4c527d]">
              List your target readers in this section and back up with reviews.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              sodales sit amet neque sit amet molestie. Vivamus hendrerit nisi
              condimentum erat tempus, vitae accumsan odio euismod.
            </p>
          </div>
          <div>
            <Devalopers />
          </div>
        </div>
        <div>
          <LoginForma />
        </div>
        <div>
          <div className="mt-[80px]">
            <p
              style={{ fontFamily: "Quicksand, sans-serif" }}
              className="xl:text-[38px] w-[90%]  m-auto text-[28px] text-center font-bold"
            >
              Book Reviews
            </p>
            <p className="text-center flex justify-center text-[19px] w-[90%] xl:w-[48%] lg:w-[80%] md:w-[85%] m-auto mt-3 text-[#4c527d]">
              See what our readers are saying.
            </p>
          </div>
          <div>
            <Book />
          </div>
        </div>
        <div>
          <About />
        </div>

        <div className="text-center mt-9 text-[#4c527d]">
          <p>Designed with ❤️ love by Xiaoying Riley for developers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
