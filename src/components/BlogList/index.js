import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {details} = props
  return (
    <ul className="blogs-list-container">
      {details.map(eachBlogItem => (
        <BlogItem blogItem={eachBlogItem} />
      ))}
    </ul>
  )
}

export default BlogList
