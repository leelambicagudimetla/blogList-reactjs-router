import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="lists-ul">
      {blogsList.map(eachItem => (
        <BlogItem key={eachItem.id} blogList={eachItem} />
      ))}
    </ul>
  )
}
export default BlogList
