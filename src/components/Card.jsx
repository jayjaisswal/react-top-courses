import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "./Card.css";
function Card({ EachCourse, likedCourses, setLikedCourses }) {
  function likeHandler() {
    //  likedCourses.include(EachCourse.id)-->This checks if the id of EachCourse is present in the likedCourses array
    if (likedCourses.includes(EachCourse.id)) {
      // pehle se like h to ushko dislike kr rhe hai ,tlb wo id remove kr rhe h
      setLikedCourses((prev) => prev.filter((cid) => cid !== EachCourse.id));
      toast.warning(`Disliked ${EachCourse.title}`);
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([EachCourse.id]);
      } else {
        setLikedCourses((prev) => [...prev, EachCourse.id]);
      }

      toast.success(`Liked ${EachCourse.title}`);
    }
  }
  return (
    <div className=" ParentCard">
      <div className="relative">
        <img src={EachCourse.image.url} alt={EachCourse.image.alt}></img>
        <div className="heart">
          <button id="likebtn" onClick={likeHandler}>
            {
              !likedCourses.includes(EachCourse.id)?(<FcLikePlaceholder style={{ fontSize: "1.7rem" }} />):(<FcLike style={{ fontSize: "1.7rem" }} />)
            }
          </button>
        </div>
      </div>

      <div className="title">
        <p>{EachCourse.title}</p>
      </div>
      <div className="desc">
        <p>
          {
            EachCourse.description.length>100?
            (EachCourse.description.substr(0, 100))+"...":
            (EachCourse.description)
          }
          </p>
      </div>
    </div>
  );
}
export default Card;
