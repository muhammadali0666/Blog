const Base_URL = "https://n36-blog.herokuapp.com/"

export const api = {
  getPosts: function (cattegoryName = "All") {
    return fetch(`${Base_URL}/posts/bycategory?page=0`, {
      headers: {cattegoryName: cattegoryName}
    }).then(res => res.json()).
    then(data => data)
  }
}