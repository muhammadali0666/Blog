import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BigImg from "../../Assets/img/big.png";
import "./single.css"
import moment from "moment/moment";
import Watch from "../../Assets/img/clock.png"
import { Layout } from "../../Components/Layout/layout";
import Hand from "../../Assets/img/hand.png"
import Share from "../../Assets/img/share.png"

export const SinglePage = () => {
  const { postId } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function myData() {
      const res = await fetch("https://n36-blog.herokuapp.com/posts/" + postId);
      const mydatas = await res.json();
      setInfo(mydatas);
      // console.log(data);
    }
    myData();
  }, [postId]);
  console.log(info);
  return (
      <Layout>
    <div className="container d-flex mt-5">
      <div className="single-left mt-5 ms-auto">
        <img src={Hand} alt="img"  className="mb-5"/>
        <img src={Share} alt="img" />
      </div>

        <div className="w-50 ms-5 mx-auto w-75 ps-5">
          <p className="top-text mt-5">User interface</p>
          <h2 className="single-paragraph">{info.title}</h2>
          <div className="d-flex mt-2 mb-4">
            <p className="top-text">{moment(info.created_at).format("LL")}</p>
            <img className="img" src={Watch} alt="clock" />
            <p className="top-text">3 minutes read</p>
          </div>
          <img src={BigImg} alt="img" />
          <p className="single-paragraph mt-4">{info.category_name}</p>
          <h2 className="top-text-bottom">{info.body}</h2>
        </div>
    </div>
      </Layout>
  );
};
