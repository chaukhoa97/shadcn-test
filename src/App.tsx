function App() {
  return (
    <div className="font-medium leading-tight -tracking-[0.01em]">
      {/* snap-y */}
      <div className="relative h-screen snap-mandatory overflow-y-scroll text-white">
        <div className="h-full snap-start overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute h-screen w-screen object-cover"
          >
            <source
              src="https://www.shutterstock.com/shutterstock/videos/1109672935/preview/stock-footage-dad-and-son-together-by-cozy-fireplace-with-hanging-stockings-and-christmas-garland-lights-family.webm"
              type="video/mp4"
            />
          </video>
          <p className="relative z-10 h-full text-7xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            similique harum magnam magni! Eos temporibus fuga repudiandae? In,
            hic magni ut illum velit voluptatem minus id corporis exercitationem
            expedita veritatis eum! Molestias animi exercitationem praesentium
            enim doloremque assumenda. Molestias sapiente modi reprehenderit
            suscipit est debitis non assumenda alias delectus maxime.
          </p>
          <img
            className="absolute top-0 z-20 w-full"
            src="https://25.media.tumblr.com/a02683bf4713cc6494a0c65e7e158363/tumblr_mtc8nypRD81s7o44uo1_500.gif"
          />
          {/* <svg
            className="animate-line absolute left-0 top-0 z-20 h-screen w-screen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 100 100"
            stroke="currentColor"
          >
            <path d="M50,0 L50,100" strokeWidth="2" />
          </svg> */}
        </div>
      </div>
    </div>
  )
}

export default App
