import { Button } from './components/Button'
import ArrowRight from './components/icons/ArrowRight'

function App() {
  return (
    <div className="font-medium leading-tight -tracking-[0.01em]">
      <div className="layout bg-primary-500">
        <Button variant="inversePrimary">
          Hello
          <ArrowRight toggleOnHover />
        </Button>
      </div>
      {/* <div className="relative h-screen snap-y snap-mandatory overflow-y-scroll text-white">
        <div className="snap-start">
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
          <div className="relative z-10 h-screen snap-y snap-mandatory px-6 text-white">
            <div className="flex h-screen flex-col justify-evenly lg:flex-row lg:justify-around">
              <div className="h1 w-[300px]">
                <p>Trọn tâm</p>
                <p className="text-primary-500">Đồng hành cùng bạn!</p>
              </div>
              <div className="max-w-[464px]">
                <p className="mb-4 text-base font-semibold lg:mb-20">
                  Khởi nguồn từ Tâm, SHB tự hào đồng hành cùng bạn vươn tầm với
                  những trải nghiệm dịch vụ ngân hàng từ trái tim.
                </p>
                <div className="divide-y rounded-2xl bg-white p-4 text-neutrals-darkest">
                  <div className="pb-4 text-sm">
                    <span>Bạn là</span> Khách hàng cá nhân?
                  </div>
                  <div className="flex justify-between divide-x pb-2 pr-2 pt-6 text-lg">
                    <div>
                      <span>Tìm kiếm</span> Thẻ tín dụng
                    </div>
                    <span className="pl-4">Gợi ý cho tôi</span>
                  </div>
                </div>
              </div>
              <Button variant="whiteLink" className="self-start">
                Cuộn để khám phá
              </Button>
            </div>
          </div>
        </div>
        <div className="flex h-screen snap-start flex-col items-center bg-white px-6 py-12 text-neutrals-darkest">
          <p className="mb-8 text-center text-lg">
            Lấy khách hàng làm trọng tâm, SHB nỗ lực thấu hiểu nhu cầu của từng
            đối tượng khách hàng
          </p>
          <div className="mb-4 flex justify-center gap-2 text-sm">
            <Button variant="secondary" size="small">
              Cá nhân
            </Button>
            <Button variant="secondaryOutline" size="small">
              Tiểu thương
            </Button>
            <Button variant="secondaryOutline" size="small">
              Doanh nghiệp
            </Button>
          </div>
          <img src="https://dummyimage.com/344x334/000/fff" />
          <div>
            <p className="mb-2 text-sm text-neutrals-darkest">Giải pháp</p>
            <p className="mb-6 text-2xl text-primary-500">
              Cùng bạn hiện thực ước mơ cá nhân
            </p>
            <p className="mb-6 text-base text-neutrals-darkest">
              Chúng tôi hiểu rằng mỗi người đều có mục tiêu tài chính riêng cần
              chinh phục. Và SHB tự hào giới thiệu các sản phẩm toàn diện giúp
              bạn hướng tới ước mơ
            </p>
            <Button>
              Khám phá{' '}
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.762 4.938l4.047 4.046-4.047 4.047M2.475 8.984h11.22"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="snap-start bg-slate-700 px-6 py-12">
          <div className="mb-48 text-[40px]">
            <p>Cùng bạn trân trọng từng</p>
            <p className="text-primary-500">Khoảng khắc sống</p>
          </div>
          <p className="mb-4">
            SHB chân thành chia sẻ và đồng hành.<br></br> Bạn đang tìm kiếm
            những kiến thức đáng tin cậy?
          </p>
          <Button variant="whiteLink" className="block py-3.5">
            Kiến thức tài chính --
          </Button>
          <Button variant="whiteLink" className="block py-3.5">
            Công cụ thông minh --
          </Button>
        </div>
        <div className="snap-start bg-slate-300 px-6 py-12">
          <img
            src="https://dummyimage.com/344x334/000/fff"
            className="mx-auto mb-16"
          />
          <div>
            <p className="mb-4 text-2xl text-primary-500">
              Ngân hàng số dành cho cá nhân
            </p>
            <div className="mb-4 flex gap-2">
              <button>App Store</button>
              <button>Google Play</button>
            </div>
            <p className="mb-4 text-neutrals-darkest">
              Dễ dàng, thuận tiện & An tâm trong từng giao dịch
            </p>
            <Button>Khám phá</Button>
          </div>
        </div>
        <div className="snap-start bg-slate-700 px-6 py-12">
          <div className="mb-48 text-[40px]">
            <p>Hơn cả một</p>
            <p className="text-primary-500">Ngân hàng</p>
          </div>
          <p className="mb-4">
            SHB chân thành chia sẻ và đồng hành.<br></br> Bạn đang tìm kiếm
            những kiến thức đáng tin cậy?
          </p>
          <button className="block py-3.5">Kiến thức tài chính --</button>
          <button className="block py-3.5">Công cụ thông minh --</button>
        </div>
        <div className="snap-start px-6 py-12 text-neutrals-darkest">
          <p className="mb-8 text-[32px]">
            Hãy để chúng tôi <span className="text-primary-500">Hỗ trợ</span>
          </p>
          <div className="flex flex-col gap-2 lg:flex-row">
            <div className="rounded-lg border border-neutrals-lighter p-6">
              <svg
                width="38"
                height="44"
                viewBox="0 0 38 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-7"
              >
                <path
                  d="M2.24039 15.0371C6.1804 -2.28287 31.8404 -2.26287 35.7604 15.0571C38.0604 25.2171 31.7404 33.8171 26.2004 39.1371C22.1804 43.0171 15.8204 43.0171 11.7804 39.1371C6.2604 33.8171 -0.0596056 25.1971 2.24039 15.0371Z"
                  stroke="#3A3F64"
                  strokeWidth="3"
                />
              </svg>
              <p className="text-sm">Cần giao dịch trực tiếp</p>
              <p className="text-lg text-primary-500">Tìm chi nhánh & ATM</p>
            </div>
            <div className="rounded-lg border border-neutrals-lighter p-6">
              <svg
                width="38"
                height="44"
                viewBox="0 0 38 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-7"
              >
                <path
                  d="M2.24039 15.0371C6.1804 -2.28287 31.8404 -2.26287 35.7604 15.0571C38.0604 25.2171 31.7404 33.8171 26.2004 39.1371C22.1804 43.0171 15.8204 43.0171 11.7804 39.1371C6.2604 33.8171 -0.0596056 25.1971 2.24039 15.0371Z"
                  stroke="#3A3F64"
                  strokeWidth="3"
                />
              </svg>
              <p className="text-sm">Cần giao dịch trực tiếp</p>
              <p className="text-lg text-primary-500">Tìm chi nhánh & ATM</p>
            </div>
            <div className="rounded-lg border border-neutrals-lighter p-6">
              <svg
                width="38"
                height="44"
                viewBox="0 0 38 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-7"
              >
                <path
                  d="M2.24039 15.0371C6.1804 -2.28287 31.8404 -2.26287 35.7604 15.0571C38.0604 25.2171 31.7404 33.8171 26.2004 39.1371C22.1804 43.0171 15.8204 43.0171 11.7804 39.1371C6.2604 33.8171 -0.0596056 25.1971 2.24039 15.0371Z"
                  stroke="#3A3F64"
                  strokeWidth="3"
                />
              </svg>
              <p className="text-sm">Cần giao dịch trực tiếp</p>
              <p className="text-lg text-primary-500">Tìm chi nhánh & ATM</p>
            </div>
          </div>
        </div>
        <div className="h-screen snap-start rounded-tl-[80px] bg-slate-700"></div>
      </div> */}
    </div>
  )
}

export default App
