export function SocialCircle(props) {
  return (
    <div className="circle">
      <a href={props.link}>
        <img className="icon_image" src={props.image} alt="" />
      </a>
    </div>
  );
}
