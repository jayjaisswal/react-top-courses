import Card from "./Card";
import "./card.css";
import { useState } from "react";
function Cards({ allCourse, category }) {
  const [likedCourses, setLikedCourses] = useState([]);
  function getCourses() {
    if (category === "All") {
      let courses = [];
      Object.values(allCourse).forEach((array) => {
        array.forEach((courseData) => {
          courses.push(courseData);
        });
      });
      return courses;
    } else {
      return allCourse[category];
    }
  }

  const courses = getCourses();
  return (
    <div className="cardss">
      <div className="allcards">
      {
        courses.map((EachCourse) => (
          <Card
            key={EachCourse.id}
            EachCourse={EachCourse}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        ))

        // Using return in map function and without return
        //     courses.map((EachCourse)=> {
        //     return <Card key={EachCourse.id} EachCourse={EachCourse}></Card>
        // })
      }
      </div>
    </div>
  );
}
export default Cards;
