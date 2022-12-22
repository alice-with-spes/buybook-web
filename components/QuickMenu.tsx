export default function QuickMenu() {
  return (
    <div className="grid place-items-center mt-8">
      <div className="flex flex-row gap-8">
        <div className="flex flex-col items-center ">
          <button className="bg-main-grey text-black border-0 w-16 h-16 rounded-full">
            N
          </button>
          <div className="mt-1">신간</div>
        </div>
        <div className="flex flex-col items-center ">
          <button className="bg-main-grey text-black border-0 w-16 h-16 rounded-full">
            B
          </button>
          <div className="mt-1">베스트</div>
        </div>
        <div className="flex flex-col items-center ">
          <button className="bg-main-grey text-black border-0 w-16 h-16 rounded-full">
            E
          </button>
          <div className="mt-1">이벤트</div>
        </div>
      </div>
    </div>
  );
}
