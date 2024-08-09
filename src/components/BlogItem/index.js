import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, description, publishedDate} = blogItem
  return (
    <li className="blog-item-container">
      <div className="title-and-published-date">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="seperator"/>
    </li>
  )
}

export default BlogItem
