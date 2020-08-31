import Head from 'next/head'
import Link from 'next/link'

const Layout = () => {
    return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/category">
          <a>Category</a>
        </Link>
      </li>
      <li>
        <Link href="/category/[id]" as="/category/100">
          <a>Category Id</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr/initialprops">
          <a>Initial Props</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr/withoutssr">
          <a>Without SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssr/initialprops">
          <a>Initial Props</a>
        </Link>
      </li>
      
    </ul>
 )
}
export default Layout;