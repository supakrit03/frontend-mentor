function App() {
  return (
    <main className="flex justify-center items-center h-screen bg-lightGray">
      <div className="flex-row space-y-6 bg-white shadow-lg rounded-xl p-5 text-black text-center w-80">
        <img
          src="/images/image-qr-code.png"
          className="max-w-full h-auto rounded-xl"
          alt="image-qr-code.png"
        />
        <p className="font-bold text-2xl text-darkBlue">
          Improve your front-end skills by building projects
        </p>
        <p className="pb-4 text-grayishBlue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}

export default App;
