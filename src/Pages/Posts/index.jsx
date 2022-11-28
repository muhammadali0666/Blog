import { useEffect, useState, useRef } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./posts.css";
import Watch from "../../Assets/img/clock.png";
import { LeftCol } from "../../Components/LeftCol/leftCol";
import { Layout } from "../../Components/Layout/layout";
import moment from "moment/moment";

export const Posts = () => {
  const { categoryName } = useParams();
  const [post, setPost] = useState([]);
  const [count, setCount] = useState(0);
  const prevs = useRef(null)
  const next = useRef(null)

  useEffect(() => {
    async function myfunc() {
      const res = await fetch(
        `https://n36-blog.herokuapp.com/posts/bycategory?page=${count}`,
        {
          headers: { categoryname: categoryName, count: count },
        }
      );
      const data = await res.json();
      setPost(data.posts); 
    }

    myfunc();
  }, [categoryName, count]);

  function handlePrev() {
    setCount((count) => count - 1)
  }

  function handleNext() {
    setCount((count) => count + 1)
  }
  console.log(count);
  return (
    <Layout className="container d-flex">
      <div className="container d-flex">
        <div className="left-col w-25">
          <LeftCol />
        </div>
        <div className="right-col w-75 ms-5">
          <ul className="list-unstyled">
            <h2 className="paragraphs">Recent Posts</h2>
            {post?.length > 0 &&
              post.map((e) => (
                <li>
                  <NavLink className="text" to={"/posts/:postId" + e.id}>
                    <div className="cards w-75">
                      <div className="card-box">
                        <p className="card-box-p">
                          {moment(e.create_time).format("LL")}
                        </p>
                        <p className="card-box-text">{e.category_name}</p>
                      </div>
                      <h4 className="card-box-paragraph">{e.title}</h4>
                      <div className="card-bottom">
                        <img src={Watch} alt="clock" />
                        <p className="card-bottom-p">3 minutes read</p>
                      </div>
                      <hr />
                    </div>
                  </NavLink>
                </li>
              ))}
          </ul>
          <div className="buttons ms-auto mt-5">
            <button ref={prevs} onClick={handlePrev} className="btn btn-dark ms-auto">
              Prev
            </button>
            <button ref={next} onClick={handleNext} className="btn btn-dark ms-3">
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
