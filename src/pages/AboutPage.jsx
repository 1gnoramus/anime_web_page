import profile_pic from "../assets/profile_pic.png";
import icon_github from "../assets/icon_github.png";
import icon_instagram from "../assets/icon_instagram.jpeg";
import icon_linked from "../assets/icon_linked.png";
import icon_gmail from "../assets/icon_gmail.png";
import { SocialCircle } from "../components/SocialCircle";

export function AboutPage() {
  return (
    <div className="about_page">
      <h1>About Me</h1>
      <h3>Welcome to my Anime Portal!</h3>
      <div className="profile_info">
        <img src={profile_pic} alt="" />
        <div className="profile_text">
          <div className="profile_desciption">
            <h2>Tyler Joseph</h2>
            <h3>Frontend Developer</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              non neque debitis quibusdam ipsa reiciendis obcaecati, beatae
              blanditiis quisquam, dolores illum ut fugiat quam laudantium?
            </p>
          </div>
          <div className="profile_social">
            <h4>Contact Me</h4>
            <div className="profile_social_row">
              <SocialCircle
                image={icon_github}
                link={"https://github.com/1gnoramus"}
              ></SocialCircle>
              <SocialCircle
                image={icon_gmail}
                link={"https://github.com/1gnoramus"}
              ></SocialCircle>
              <SocialCircle
                image={icon_instagram}
                link={"https://github.com/1gnoramus"}
              ></SocialCircle>
              <SocialCircle
                image={icon_linked}
                link={"https://github.com/1gnoramus"}
              ></SocialCircle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
