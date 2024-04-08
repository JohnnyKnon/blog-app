import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <section className="profile__box">
      <div className="flex__box-lg">
        <div className="profile__image" />
        <div>
          <p className="profile__email">test@gmail.com</p>
          <p className="profile__name">김유저</p>
        </div>
      </div>
      <Link to="/" className="profile__logout">
        Log out
      </Link>
    </section>
  );
}
