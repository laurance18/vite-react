export default function Navbar() {
    return (
        <nav className="relative shadow bg-gradient-to-b from-red-700 to-red-500 w-full">
            <div className="relative h-16 mx-auto max-w-7xl flex items-center justify-center text-white">
                <img src="/world.png" alt="world_png" className="h-10 pr-2 brightness-11" />
                <a className="text-2xl hover:scale-[1.02] hover:shadow-sm" href="">Lau's Travel Journal</a>
            </div>
        </nav>
    )
}