import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            onClick={() => setActiveTab("all")}
            className={activeTab === "all" ? "post__navigation--active" : ""}
          >
            전체
          </div>
          <div
            role="presentation"
            onClick={() => setActiveTab("my")}
            className={activeTab === "my" ? "post__navigation--active" : ""}
          >
            나의 글
          </div>
        </div>
      )}
      <article className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"></div>
                <div className="post__author-name">테스트명</div>
                <div className="post__date">2024.04.04 목요일</div>
              </div>
              <h2 className="post__title">게시글 {index}</h2>
              <p className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ultrices nisi id leo bibendum commodo. Integer semper venenatis
                congue. Sed sed nisl accumsan, eleifend elit vestibulum, maximus
                mi. Nullam fermentum metus erat. Nulla non elementum lorem. In
                interdum eu mi eget tristique. Fusce faucibus ultricies elit et
                gravida. Vivamus scelerisque quam placerat, vulputate massa in,
                pulvinar erat. Cras posuere ipsum at nunc suscipit, eu egestas
                mi mattis. Fusce purus metus, ornare ac nisi sit amet, maximus
                consequat risus. In porta volutpat velit quis gravida. Nulla
                dapibus sed ipsum et feugiat. Curabitur posuere a orci ut
                viverra. Donec nec augue auctor, blandit velit in, mattis
                mauris. Nullam egestas blandit lorem, ut commodo nunc rutrum et.
              </p>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </article>
    </>
  );
}
