import { useState } from "react";
import { ReactComponent as BookmarkSVG } from "./img/bookmark.svg";
import Card from "./Card";

function App() {
  const [cardDtails, setCardDetails] = useState([
    {
      id: 1,
      title: "Black Edition Stand",
      note: "You got an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign and you'll be added to a special backer member list",
      amount: 101,
    },
    {
      id: 2,
      title: "Black Edition Stand",
      note: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our backer member list. Shipping included",
      amount: 64,
    },
    {
      id: 3,
      title: "Black Edition Stand",
      note: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our backer member list. Shipping included",
      amount: 5,
    },
  ]);

  const onDelete = (id) => {
    setCardDetails((prev) => prev.filter((item) => item.id !== id));
  };

  const addCard = () => {
    const idNew = cardDtails.length + 1;
    setCardDetails((prev) => [
      ...prev,
      {
        id: idNew,
        title: "Newly Added Note",
        note: "Lorem Ipsum dolor dorime adabare iterimo",
        amount: 10,
      },
    ]);
  };

  return (
    <div className="font-body bg-stone-100 pb-16">
      <header className="flex items-center text-white bg-teal-500 sm:bg-header bg-cover bg-no-repeat justify-around pb-4 sm:pb-[200px] pt-4">
        <div className="font-extrabold">crowdfund</div>
        <div className="text-sm flex-row text-white hidden sm:flex sm:gap-4 font-semibold">
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Discover</span>
          <span className="cursor-pointer">Get Started</span>
        </div>
        <div id="hamburger" class="space-y-1 sm:hidden cursor-pointer z-20">
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
          <div class="w-6 h-0.5 bg-white"></div>
        </div>
      </header>

      <main className="w-full lg:w-1/2 z-10 mx-auto sm:mt-[-50px] ">
        <div className="border bg-white rounded-md mb-7 pb-8 pt-12 px-4 sm:px-11">
          <div className="h-11 w-11 flex justify-center items-center rounded-full bg-black text-white mx-auto mt-[-70px] mb-12 font-extrabold italic">
            M
          </div>
          <h1 className="text-center font-bold text-xl sm:text-2xl">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-center text-sm sm:text-base">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain
          </p>
          <div className="flex items-center justify-between mt-8 font-semibold">
            <span className="bg-teal-600 rounded-full text-white py-2 px-4 text-sm sm:text-base">
              Back this project
            </span>
            <div className="flex bg-zinc-200 gap-3 items-center rounded-full pr-4">
              <div className="h-[40px] w-[40px] bg-black flex items-center justify-center rounded-full">
                <BookmarkSVG />
              </div>
              <span className="text-sm sm:text-base text-zinc-500">
                Bookmark
              </span>
            </div>
          </div>
        </div>

        <div className="border bg-white rounded-md mb-7 py-12 px-4 sm:px-11">
          <div className="flex flex-col sm:flex-row sm:gap-14">
            <span className="flex flex-row items-center justify-center gap-2 sm:gap-0 sm:flex-col mb-3 sm:m-0">
              <span className="text-xl sm:text-2xl font-bold">$89,914</span>
              <span>of $100,000 backed</span>
            </span>

            <span className="flex flex-row items-center justify-center gap-2 sm:gap-0 sm:flex-col sm:px-14 sm:border-x-2 mb-3 sm:m-0">
              <span className="text-xl sm:text-2xl font-bold">5,007</span>
              <span>total backers</span>
            </span>

            <span className="flex flex-row items-center justify-center gap-2 sm:gap-0 sm:flex-col sm:m-0">
              <span className="text-xl sm:text-2xl font-bold">56</span>
              <span>days left</span>
            </span>
          </div>
          <div className="mt-4 w-full bg-zinc-200 rounded-full h-2">
            <div className="w-3/4 h-2 rounded-full bg-teal-600"></div>
          </div>
        </div>

        <div className="border bg-white rounded-md px-4 p-11 sm:p-11">
          <h2 className="text-xl font-bold mb-5">About this project</h2>
          <p className="mb-3">
            The Minecraft Bamboo Monitor Riser is asturdy and stylish platform
            that elevates your scrren to a more comfortable viewing height.
            Placing your monitor at eye level has the potential to improve your
            posture and make you more comfortable while at work, helping you
            stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens and
            USBs sticks to be stored under the stand.
          </p>
          {cardDtails?.map(({ id, title, note, amount }) => {
            return (
              <Card
                key={id}
                title={title}
                note={note}
                amount={amount}
                onDelete={() => onDelete(id)}
              />
            );
          })}
          <button
            onClick={addCard}
            className="mt-5 rounded py-2 px-4 bg-teal-600 font-semibold text-white"
          >
            Add Card
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
