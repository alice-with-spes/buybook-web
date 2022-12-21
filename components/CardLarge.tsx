export default function CardLarge() {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/400/arch" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">새로운 책 출시</h2>
        <p>오늘 할인?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">보기</button>
        </div>
      </div>
    </div>
  );
}
