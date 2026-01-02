import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <div>
        <nav className="flex justify-center ">
            <ul className="list-none flex justify-around w-xl gap-3 p-5 rounded-3xl sticky bg-white/30 backdrop-blur-lg
            mt-3 shadow-2xl shadow-">
                <Link to="/home" className="hover:cursor-pointer hover:underline hover:scale-110">
                Home</Link>
                <Link to='/courses' className="hover:cursor-pointer hover:underline">Courses</Link>
                <Link to='/playground' className="hover:cursor-pointer  hover:underline">Playground</Link>
            </ul>
        </nav>
    </div>
  )
}
