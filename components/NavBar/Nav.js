import Link from 'next/link'

const Nav = () => {
    return(
        <nav>
            <Link href={'/'}><a>Dev Skills</a></Link>
            <Link href={'/myskills'}><a>My Skills</a></Link>
            <Link href={'/contact'}><a>Contact</a></Link>
        </nav>
    )
}

export default Nav