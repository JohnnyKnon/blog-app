import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <main className="post__detail">
        <article className="post__box">
          <h1 className="post__title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <section className="post__profile-box">
            <div className="post__profile"></div>
            <div className="post__author-name">테스트명</div>
            <div className="post__date">2024.04.04 목요일</div>
          </section>
          <section className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </section>
          <p className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices nisi id leo bibendum commodo. Integer semper venenatis
            congue. Sed sed nisl accumsan, eleifend elit vestibulum, maximus mi.
            Nullam fermentum metus erat. Nulla non elementum lorem. In interdum
            eu mi eget tristique. Fusce faucibus ultricies elit et gravida.
            Vivamus scelerisque quam placerat, vulputate massa in, pulvinar
            erat. Cras posuere ipsum at nunc suscipit, eu egestas mi mattis.
            Fusce purus metus, ornare ac nisi sit amet, maximus consequat risus.
            In porta volutpat velit quis gravida. Nulla dapibus sed ipsum et
            feugiat. Curabitur posuere a orci ut viverra. Donec nec augue
            auctor, blandit velit in, mattis mauris. Nullam egestas blandit
            lorem, ut commodo nunc rutrum et.
          </p>
        </article>
      </main>
    </>
  );
}
