import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {title, description, publishedDate} = blogList
  return (
    <li>
      <div className="title">
        <h1 className="head">{title}</h1>
        <p className="dates">{publishedDate}</p>
      </div>
      <p className="dates">{description}</p>
    </li>
  )
}
export default BlogItem
